import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'

const sidebar = JSON.parse(readFileSync(new URL('./sidebar.json', import.meta.url), 'utf8'))

export default defineConfig({
  title: 'AD Component Inventory',
  description:
    'Component inventory and per-page composition analysis of the Avery Dennison corporate website (AEM 6.5), prepared for the headless CMS + React/Next.js rebuild.',
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    nav: [
      { text: 'Components', link: '/components/' },
      { text: 'Pages', link: '/pages/' },
    ],
    sidebar,
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    footer: {
      message: 'Generated component inventory — Avery Dennison corporate site (AEM 6.5 → React/Next.js).',
    },
  },
})
