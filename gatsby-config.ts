import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Adeniyi Olamide - Portfolio',
    description: 'Adeniyi Olamide - Full Stack Web Developer Portfolio',
    image: '/gatsby-icon.png',
    siteUrl: 'https://www.yourdomain.tld',
    social: {
      twitter: `_ola.dev`
    },
    colorTheme: '#ffe367',
    author: 'Adeniyi Olamide'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '  '
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        initialColorMode: 'dark'
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100
      }
    }
  ]
};

export default config;
