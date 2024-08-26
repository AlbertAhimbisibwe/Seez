import { defineConfig } from "cypress";

module.exports = defineConfig({
  projectId: "",
  viewportWidth: 1368,
  viewportHeight: 800,
  requestTimeout: 10000,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 10000,
  video: true,
  e2e: {
    baseUrl: "https://aam-demo.seez.dev/search?sort=-attractiveness",
    specPattern: "./**/**/*.cy.ts",
  },
});