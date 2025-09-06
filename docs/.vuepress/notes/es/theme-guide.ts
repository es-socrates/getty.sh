import type { ThemeNote } from 'vuepress-theme-plume'
import { defineNoteConfig } from 'vuepress-theme-plume'


export const themeGuide: ThemeNote = defineNoteConfig({
  dir: 'theme/guide',
  link: '/guide/',
  sidebar: [
    {
      text: 'Empieza aquí',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        { text: 'Introducción', link: '/es/guide/intro/' },
        { text: 'Instalación', link: '/es/guide/usage/' },
        { text: 'Los widgets', link: '/es/guide/widgets/' },
        { text: 'Estructura', link: '/es/guide/project-structure/' },
        { text: 'Actualizaciones', link: '/es/guide/blog/' },
        { text: 'Licencia MIT', link: '/es/guide/license/' },
        { text: 'Términos de uso', link: '/es/guide/terms/' },
        { text: 'Política de Privacidad', link: '/es/guide/privacypolicy/' },
      ],
    },
  ],
})

