require('dotenv').config();

const siteInfo = {
  title: 'Web Cifar',
  short_name: 'webcifar',
  subTitle: 'Your complete web solution',
  description: `A masterful team that executes engagement with accuracy, proficiency, and innovation.`,
};

module.exports = {
  siteMetadata: {
    title: siteInfo.title,
    subTitle: siteInfo.subTitle,
    description: siteInfo.description,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteInfo.title,
        short_name: siteInfo.short_name,
        description: siteInfo.description,
        start_url: '/',
        background_color: '#0D1117',
        icon: 'src/assets/images/wc-512x512.png',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-6YE5RTH5NE', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
