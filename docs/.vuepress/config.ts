import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { enNavbar, esNavbar } from './navbar'
import { searchEsLocale } from './plugin-search-locales'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  locales: {
    '/': {
      title: 'Getty',
      lang: 'en-US',
      description: 'Widget app for tip notifications, tip goals, chat rewards and display real-time alerts for your livestreams in Odysee.',
    },
    '/es/': {
      title: 'Getty',
      lang: 'es-ES',
      description: 'Widget app para notificaciones de propinas, objetivos de propinas, recompensas de chat y visualización de alertas en tiempo real para tus directos en Odysee.',
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '.vuepress/public/getty-fav.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    locales: {
      '/': {
        navbar: enNavbar,
      },
      '/es/': {
        navbar: esNavbar,
        selectLanguageName: 'Español',
        selectLanguageText: 'Idioma',
        notFound: {
          title: 'Página no encontrada',
          linkLabel: 'Volver al inicio',
        },
      },
    },
    hostname: 'https://getty.sh/',
    markdown: {
      timeline: true,
    },

    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    // blog: false,
    // blog: {
    //   postList: true,
    //   tags: true,
    //   archives: true,
    //   categories: true,
    //   postCover: 'right',
    //   pagination: 15,
    // },

    // article: '/article/',
    cache: 'filesystem',

    // autoFrontmatter: {
    //   permalink: true,
    //   createTime: true,
    //   title: true,
    // },

    search: {
      provider: 'local',
      locales: {
        '/es/': searchEsLocale,
      },
    },

    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    // codeHighlighter: {
    //   twoslash: true,
    //   whitespace: true,
    //   lineNumbers: true,
    // },

    // readingTime: true,

    // markdown: {
    //   abbr: true,
    //   annotation: true,
    //   pdf: true,
    //   caniuse: true,
    //   plot: true,
    //   bilibili: true,
    //   youtube: true,
    //   artPlayer: true,
    //   audioReader: true,
    //   icon: { provider: 'iconify' },
    //   table: true,
    //   codepen: true,
    //   replit: true,
    //   codeSandbox: true,
    //   jsfiddle: true,
    //   npmTo: true,
    //   demo: true,
    //   repl: {
    //     go: true,
    //     rust: true,
    //     kotlin: true,
    //     python: true,
    //   },
    //   math: {
    //     type: 'katex',
    //   },
    //   chartjs: true,
    //   echarts: true,
    //   mermaid: true,
    //   flowchart: true,
    //   image: {
    //     figure: true,
    //     lazyload: true,
    //     mark: true,
    //     size: true,
    //   },
    //   include: true,
    //   imageSize: 'local',
    // },

    // watermark: true,

    // replaceAssets: 'https://cdn.example.com',

    // encrypt: {},
  }),
})
