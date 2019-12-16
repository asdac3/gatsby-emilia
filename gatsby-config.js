require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Portfolio`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        showThemeAuthor: false,
        name: 'Graham Hemsley',
        location: 'Chicago',
        socialMedia: [
            {
              title: `Instagram`,
              href: `https://www.instagram.com/graham_hemsley/`
            },
            {
              title: 'YouTube',
              href: 'https://www.youtube.com/channel/UCPBF8BLVVuLA5J8SQkejK7Q'
            },
            {
              title: 'GitHub',
              href: 'https://github.com/ghemsley'
            }
          ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Graham Hemsley`,
        short_name: `Graham Hemsley`,
        description: `Portfolio website of Graham Hemsley`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
