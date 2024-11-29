const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  require('cypress-mochawesome-reporter/plugin')(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://magento.softwaretestingboard.com",
    specPattern: "**/*.feature",
    screenshotOnRunFailure: true, // Enable screenshot on failure
    screenshotsFolder: "cypress/screenshots", // Default folder for screenshots
    video: false, // Disable videos if not needed
    nonGlobalStepDefinitions: true,
    stepDefinition:"**/*.js",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
      embeddedScreenshots: true,
      charts: true, 
    },
  },
});