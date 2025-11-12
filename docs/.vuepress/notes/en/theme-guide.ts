import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { defineCollection } from 'vuepress-theme-plume'

export const themeGuide: ThemeCollectionItem = defineCollection({
  type: 'doc',
  dir: 'en/notes/theme/guide',
  title: 'Guide',
  linkPrefix: '/en/guide/',
  sidebar: [
    {
      text: 'Quick Start',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        { text: 'Introduction', link: '/en/guide/intro/' },
        { text: 'Installation', link: '/en/guide/usage/' },
        { text: 'The Widgets', link: '/en/guide/widgets/' },
        { text: 'App Structure', link: '/en/guide/project-structure/' },
        { text: 'MIT License', link: '/en/guide/license/' },
        { text: 'Terms of Service', link: '/en/guide/terms/' },
        { text: 'Privacy Policy', link: '/en/guide/privacypolicy/' },
      ],
    },
  ],
})
