import type { ThemeCollections } from 'vuepress-theme-plume'
import { defineCollections } from 'vuepress-theme-plume'
import { themeGuide } from './theme-guide'
import { blog } from './blog'

export const enCollections: ThemeCollections = defineCollections([
  themeGuide,
  blog,
])
