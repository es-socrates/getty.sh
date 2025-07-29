import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enGuideNote = defineNoteConfig({
  dir: 'en/notes/theme/guide/quick-start',
  link: '/en/guide',
  sidebar: [
    {
      text: 'Quick Start',
      items: [
        { text: 'Introduction', link: '/en/guide/intro/' },
        { text: 'Installation', link: '/en/guide/usage/' },
        { text: 'App Structure', link: '/en/guide/project-structure/' },
        { text: 'Blog updates', link: '/en/guide/blog/' },
        { text: 'MIT License', link: '/en/guide/license/' },
      ]
    },
  ],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enGuideNote],
})
