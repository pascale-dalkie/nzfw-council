module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `NZFW`,
    description: `Auckland Council Libraries NZFW`,
    author: `Auckland Council Libraries`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
