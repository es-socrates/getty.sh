import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, esNavbar } from './navbar'
import { enNotes } from './notes'
import { esNotes } from './notes/es'

export default defineThemeConfig({
  logo: '.vuepress/public/getty-fav.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/es-socrates/getty' },
    { icon: 'twitter', link: 'https://x.com/getty_sh' },
  ],

  // copyright: true,

  // prevPage: true,
  // nextPage: true,
  // createTime: true,

  // transition: {
  //   page: true,
  //   postList: true,
  //   appearance: 'fade',
  // },

  locales: {
    '/': {
      profile: {
        avatar: '.vuepress/public/getty-fav.png',
        name: 'getty',
        description: 'Complete, customizable app with live-streaming tools for Odysee. Download now!',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,

      footer: {
        message: 'Copyright © λ 2025 <a target="_blank" href="https://github.com/es-socrates/getty">getty</a> - This is not an official Odysee product. With love for Odysee ❤️ - Email: hello@getty.sh',
        copyright: '',
      },

      // bulletin: {
      //   layout: 'top-right',
      //   contentType: 'markdown',
      //   title: '',
      //   content: '',
      // },
    },
    '/es/': {
      profile: {
        avatar: '.vuepress/public/getty-fav.png',
        name: 'getty',
        description: 'Aplicación completa y personalizable con herramientas de transmisión en directo para Odysee.',
      },

      navbar: esNavbar,
      notes: esNotes,

      footer: {
        message: 'Copyright © λ 2025 <a target="_blank" href="https://github.com/es-socrates/getty">getty</a> - No es un producto oficial de Odysee. Con cariño para Odysee ❤️ - Email: hello@getty.sh',
        copyright: '',
      },
    },
  },
})
