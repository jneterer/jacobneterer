require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Jacob Neterer`,
    description: `My name is Jacob Neterer and I'm a full stack web developer!`,
    author: `@jacobneterer`,
    siteUrl: `https://jacobneterer.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {	
      resolve: `gatsby-source-filesystem`,	
      options: {	
        name: `images`,	
        path: `${__dirname}/src/images`,	
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jn.png`
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
