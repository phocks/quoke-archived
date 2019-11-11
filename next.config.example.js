const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
  /**
   * Environment variables are now handled
   * in the Zeit Now environment.
   */
  // env: {
  //   dbUser: "quoke",
  //   dbPassword: "change me",
  //   jwtSecret: "a long secret that only you know",
  //   recaptchaSecret: "a reCAPTCHA secret token"
  // }
});
