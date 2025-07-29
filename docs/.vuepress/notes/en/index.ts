import type { ThemeNoteListOptions } from 'vuepress-theme-plume'
import { defineNotesConfig } from 'vuepress-theme-plume'
import { themeGuide } from './theme-guide'

export const enNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [
    themeGuide,
  ],
})
