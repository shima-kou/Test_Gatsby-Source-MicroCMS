const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "stripeportfolio",
        apis: [
          {
            endpoint: "information",
          },
        ],
      },
    },
  ],
}
