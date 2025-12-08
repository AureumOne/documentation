// docusaurus.config.js

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aureum One Documentation',
  tagline: 'Swiss-Grade Gold Tokenization & Institutional Governance',
  url: 'https://AureumOne.github.io',
  baseUrl: '/documentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'AureumOne',
  projectName: 'documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-BR', 'de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editCurrentVersion: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Aureum One',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/docs/whitepaper-executive-summary',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Website',
            position: 'right',
            href: 'https://aureumone.io',
            className: 'button button--secondary',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/whitepaper-executive-summary',
              },
            ],
          },
          {
            title: 'Institutional',
            items: [
              {
                label: 'Aureum One',
                href: 'https://aureumone.io',
              },
              {
                label: 'Contact',
                href: 'mailto:institutional@aureumone.io',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Aureum One. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
