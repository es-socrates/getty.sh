import type { ThemeNavItem } from 'vuepress-theme-plume'
import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: 'Docs',
    icon: 'material-symbols-light:docs-outline',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  },
  {
    text: 'Blog',
    link: '/blog/',
    icon: 'material-symbols-light:inbox-text-outline-rounded',
    activeMatch: '^/(en/)?blog/',
  },
  {
    text: 'App',
    icon: 'fluent:rocket-24-regular',
    link: 'https://app.getty.sh/',
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    link: 'https://github.com/gettyteam/getty/releases'
  },
  {
    text: 'Odysee',
    icon: 'qlementine-icons:play-stroke-16',
    link: 'https://odysee.com/',
  },
])

export const esNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: 'Docs',
    icon: 'material-symbols-light:docs-outline',
    link: '/es/guide/intro/',
    activeMatch: '^/es/guide/',
  },
  {
    text: 'Blog',
    link: '/es/blog/',
    icon: 'material-symbols-light:inbox-text-outline-rounded',
    activeMatch: '^/es/blog/',
  },
  {
    text: 'App',
    icon: 'fluent:rocket-24-regular',
    link: 'https://app.getty.sh/',
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    link: 'https://github.com/gettyteam/getty/releases'
  },
  {
    text: 'Odysee',
    icon: 'qlementine-icons:play-stroke-16',
    link: 'https://odysee.com/',
  },
])