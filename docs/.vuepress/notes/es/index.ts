import type { ThemeNoteListOptions } from 'vuepress-theme-plume'
import { defineNotesConfig } from 'vuepress-theme-plume'
import { themeGuide } from './theme-guide'

export const esNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'es/notes',
  link: '/',
  notes: [
    themeGuide,
  ],
})
