import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AntiBlackTide",
  description: "Anti Black Tide",
  lang: "zh",
  base: "/AntiBlackTide/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wild Fire', link: '/wild-fire' },
      { text: 'Hall of Shame', link: '/hall-of-shame'}
    ],

    sidebar: [
      {
        text: 'AntiBlackTide',
        items: [
          { text: 'Wild Fire', link: '/wild-fire' },
          { text: 'Hall of Shame', link: '/hall-of-shame' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
