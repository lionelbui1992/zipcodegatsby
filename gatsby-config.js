// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `zipCode`,
    author: `Onextdigital`,
    description: "ZipCode application",
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": process.env.WPGRAPHQL_URL
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zipcode application",
        short_name: "ZipCode",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "./static/favicon-32x32.png",
      },
    },
    "gatsby-plugin-apollo"
  ],
}