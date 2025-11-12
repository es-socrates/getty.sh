import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { defineCollection } from 'vuepress-theme-plume'

export const blog: ThemeCollectionItem = defineCollection({
  type: 'post',
  dir: 'blog',
  title: 'Blog',
  link: 'blog/',
  linkPrefix: '/es/blog/',
  tags: true,
  tagsLink: 'blog/tags/',
  archives: true,
  archivesLink: 'blog/archives/',
  categories: true,
  categoriesLink: 'blog/categories/',
})
