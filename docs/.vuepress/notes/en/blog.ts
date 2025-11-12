import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { defineCollection } from 'vuepress-theme-plume'

export const blog: ThemeCollectionItem = defineCollection({
  type: 'post',
  dir: 'en/blog',
  title: 'Blog',
  link: '/blog/',
  linkPrefix: '/en/blog/',
})
