import type { ThemeCollections } from 'vuepress-theme-plume'
import { defineCollections } from 'vuepress-theme-plume'
import { themeGuide } from './theme-guide'
import { blog } from './blog'

export const esCollections: ThemeCollections = defineCollections([
  themeGuide,
  blog,
])
