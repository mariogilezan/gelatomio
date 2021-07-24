require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gelatomio`,
    description: `Zanatsko poslastičarska radnja "Gelato" osnovana je juna 1999. godine. Osnivač Đorđe Guga je želeo da "Gelato" bude mesto gde ćete probati najbolji italijanski sladoled proizveden u Srbiji.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
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
