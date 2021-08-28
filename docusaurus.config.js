const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '🥝 kiwi',
  tagline: 'Schoolwork as code',
  url: 'https://docs.kiwi.mattglei.ch',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gleich',
  projectName: 'kiwi.docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: '🥝',
        src: 'img/kiwi.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'CLI',
              href: 'https://github.com/gleich/kiwi',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/gleich/kiwi.docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matt Gleich`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gleich/kiwi.docs/edit/main/website/',
          routeBasePath: '/',
        },
      },
    ],
  ],
};
