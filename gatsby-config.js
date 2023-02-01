/**
 * @type {import('gatsby').GatsbyConfig}
 */
const stylePath = `${__dirname}/src/styles/style`.replace(/\\/g, '/')

module.exports = {
  siteMetadata: {
    title: `SaigonDigital Test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "bHQwRosqLNPM3wY1RsqRWdN1HiJTlo7CGTeXMTA_DJU",
      "spaceId": "7trptn303oxb"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      additionalData: `@import "${stylePath}";`,
    }
  }]
};
