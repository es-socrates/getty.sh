import type { ThemeNote } from 'vuepress-theme-plume'
import { defineNoteConfig } from 'vuepress-theme-plume'

export const themeGuide: ThemeNote = defineNoteConfig({
  dir: 'theme/guide',
  link: '/guide/',
  sidebar: [
    {
      text: 'Quick Start',
      collapsed: false,
      icon: 'carbon:idea',
      prefix: 'quick-start',
      items: [
        'intro',
        'usage',
        'project-structure',
        'blog',
        'license',
      ],
    },
  ],
})
