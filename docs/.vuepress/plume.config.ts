import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, esNavbar } from './navbar'
import { enNotes } from './notes'
import { esNotes } from './notes/es'

export default defineThemeConfig({
  logo: '.vuepress/public/getty-fav.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/es-socrates/getty' },
  ],

  // copyright: true,

  // prevPage: true,
  // nextPage: true,
  // createTime: true,

    footer: {
    message: '<a target="_blank" href="https://github.com/es-socrates/getty">Getty</a> - This is not an official Odysee product. Made with love for Odysee ❤️',
    copyright: '',
  },

  // transition: {
  //   page: true,
  //   postList: true,
  //   appearance: 'fade',
  // },

  locales: {
    '/': {
      profile: {
        avatar: '.vuepress/public/getty-fav.png',
        name: 'Getty',
        description: 'Widgets for tip notifications, tip goals, chat rewards and display real-time alerts for your livestreams in Odysee',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,

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
        name: 'Getty',
        description: 'Widgets para notificaciones de propinas, objetivos de propinas, recompensas de chat y visualización de alertas en tiempo real para tus directos en Odysee',
      },

      navbar: esNavbar,
      notes: esNotes,
    },
  },
})
