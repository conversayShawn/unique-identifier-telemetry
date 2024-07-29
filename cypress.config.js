const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
    fixturesFolder: false
  },
  retries: 3
});
