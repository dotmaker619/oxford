require("dotenv").config({
  path: `.env`,
})
const tailwind = require("tailwindcss")

const linkResolver = require("./src/utils/linkResolver")

module.exports = {
  siteMetadata: {
    title: `Oxford Pennant`,
    description: `Oxford Pennant is a designer and manufacturer of wool felt pennants, flags and banners`,
    author: `@oxfordpennant`,
    siteUrl: "https://oxfordpennant.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        accessToken: process.env.SHOP_TOKEN,
        apiVersion: "2020-01",
        downloadImages: false,
        includeCollections: ["shop"],
        paginationSize: 100,
        shopName: process.env.SHOP_NAME,
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        accessToken: process.env.SHOP_TOKEN,
        shouldConfigureSourcePlugin: false,
        shopName: process.env.SHOP_NAME,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "oxfordpennant",
        accessToken: process.env.PRISMIC_TOKEN,
        prismicToolbar: true,
        schemas: {
          page: require("./src/schemas/page.json"),
          project: require("./src/schemas/project.json"),
          custom: require("./src/schemas/custom.json"),
          layout: require("./src/schemas/layout.json"),
          instagram: require("./src/schemas/instagram.json"),
          gallery: require("./src/schemas/gallery.json"),
          product_category_detail: require("./src/schemas/product_category_detail.json"),
        },
        linkResolver: () => doc => linkResolver(doc),
        shouldDownloadImage: () => {
          return false
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries: require("./src/utils/algoliaQueries"),
        enablePartialUpdates: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://oxfordpennant.com",
        sitemap: "https://oxfordpennant.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
