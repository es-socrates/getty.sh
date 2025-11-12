import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { defineCollection } from 'vuepress-theme-plume'


export const themeGuide: ThemeCollectionItem = defineCollection({
  type: 'doc',
  dir: 'notes/theme/guide',
  title: 'Guía',
  linkPrefix: '/es/guide/',
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
        { text: 'Licencia MIT', link: '/es/guide/license/' },
        { text: 'Términos de uso', link: '/es/guide/terms/' },
        { text: 'Política de Privacidad', link: '/es/guide/privacypolicy/' },
      ],
    },
  ],
})
