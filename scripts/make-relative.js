#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

/**
 * Make VuePress site paths relative for deployment to unknown subdirectories
 * Output final site to /dist folder
 */

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const distDir = path.join(__dirname, '../docs/.vuepress/dist')
const outputDir = path.join(__dirname, '../dist')

function makePathsRelative(dir, outputBaseDir) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      // Create corresponding directory in output
      const relativePath = path.relative(distDir, filePath)
      const outputDirPath = path.join(outputBaseDir, relativePath)
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true })
      }
      makePathsRelative(filePath, outputBaseDir)
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      console.log(`Processing: ${filePath}`)
      
      let content = fs.readFileSync(filePath, 'utf8')
      
      // Calculate the relative depth from current file to root
      const relativePath = path.relative(distDir, filePath)
      const depth = relativePath.split(path.sep).length - 1
      const rootPrefix = depth > 0 ? '../'.repeat(depth) : './'
      
      // Convert absolute paths to relative paths
      // Handle assets, scripts, stylesheets, and internal links
      content = content
        // CSS and JS assets
        .replace(/href="\/assets\//g, `href="${rootPrefix}assets/`)
        .replace(/src="\/assets\//g, `src="${rootPrefix}assets/`)
        
        // Favicon and images in root
        .replace(/href="\/([^\/][^"]*\.(png|jpg|jpeg|gif|svg|ico))"/g, `href="${rootPrefix}$1"`)
        .replace(/src="\/([^\/][^"]*\.(png|jpg|jpeg|gif|svg|ico))"/g, `src="${rootPrefix}$1"`)
        
        // Internal page links (but not external links starting with http)
        .replace(/href="\/([^\/"][^"]*)"(?![^>]*target="_blank")/g, `href="${rootPrefix}$1"`)
        
        // Handle root links like href="/"
        .replace(/href="\/"(?![^>]*target="_blank")/g, `href="${rootPrefix}"`)
        
        // Handle JavaScript module imports and other asset references
        .replace(/"\/assets\//g, `"${rootPrefix}assets/`)
        
        // CSS url() references
        .replace(/url\(\/assets\//g, `url(${rootPrefix}assets/`)
        .replace(/url\("\/assets\//g, `url("${rootPrefix}assets/`)
        .replace(/url\('\/assets\//g, `url('${rootPrefix}assets/`)
      
      // Write processed file to output directory
      const outputRelativePath = path.relative(distDir, filePath)
      const outputFilePath = path.join(outputBaseDir, outputRelativePath)
      const outputFileDir = path.dirname(outputFilePath)
      
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir, { recursive: true })
      }
      
      fs.writeFileSync(outputFilePath, content, 'utf8')
    } else {
      // Copy other files (images, fonts, etc.) as-is
      const outputRelativePath = path.relative(distDir, filePath)
      const outputFilePath = path.join(outputBaseDir, outputRelativePath)
      const outputFileDir = path.dirname(outputFilePath)
      
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir, { recursive: true })
      }
      
      fs.copyFileSync(filePath, outputFilePath)
    }
  })
}

console.log('Converting VuePress absolute paths to relative paths...')

// Clean output directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true })
}
fs.mkdirSync(outputDir, { recursive: true })

// Process files and output to /dist
makePathsRelative(distDir, outputDir)

console.log(`✅ Relative paths created successfully in: ${outputDir}`)
console.log('📁 Deploy the /dist folder to your web server')