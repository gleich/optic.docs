const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'optic',
  tagline: 'Schoolwork as code',
  url: 'https://docs.optic.mattglei.ch',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gleich',
  projectName: 'optic.docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: '🥝',
        src: 'img/optic.png',
      },
      items: [
        {
          href: 'https://github.com/gleich/optic',
          label: '📟 CLI Repository',
          position: 'right',
        },
        {
          href: 'https://github.com/gleich/optic.docs',
          label: '📖 Docs Repository',
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
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'CLI',
              href: 'https://github.com/gleich/optic',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/gleich/optic.docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matt Gleich`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['toml'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gleich/optic.docs/edit/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: [require.resolve('./src/custom.css')],
        },
      },
    ],
  ],
};
