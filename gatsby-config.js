require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gelato`,
    description: `Zanatsko poslastičarska radnja "Gelato" osnovana je juna 1999. godine. Osnivač Đorđe Guga je želeo da "Gelato" bude mesto gde ćete probati najbolji italijanski sladoled proizveden u Srbiji.`,
    keywords: ["gelato", "vrsac"],
    siteUrl: `http://localhost:8000/`,
    menuLinks: [
      {
        name: `Početna`,
        slug: `/`,
      },
      {
        name: `O Nama`,
        slug: `/o-nama/`,
      },
      {
        name: `Proizvodi`,
        slug: `/proizvodi/`,
        subMenu: [
          {
            name: `Torte`,
            slug: `/torte/`,
          },
          {
            name: `Kolači`,
            slug: `/kolaci/`,
          },
          {
            name: `Macarons`,
            slug: `/macarons/`,
          },
          {
            name: `Sladoled`,
            slug: `/sladoled/`,
          },
        ],
      },
      {
        name: `Cenovnik`,
        slug: `/cenovnik/`,
      },
      {
        name: `Galerija`,
        slug: `/galerija/`,
      },
      {
        name: `Kontakt`,
        slug: `/kontakt/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gelato`,
        short_name: `Gelato`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#FF0000`,
        display: `standalone`,
        icon: `content/assets/page-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === "development",
      },
    },
  ],
}
