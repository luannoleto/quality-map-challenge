const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com',
    env: {
      hideCredentials: true, // serve para o access token não vazar na execução via API
      requestMode: true // ter feedback visual de estamos fazendo o uso do comendo cy.request
      // snapshotOnly: true //serve apresentar um feedback visual dos métodos de chamada api quando executados via GUI
    },
    experimentalRunAllSpecs: true, // Executa todos os testes em modo iterativo sem a necessidade de executar spec a spec
  },
  fixturesFolder: false,
  video: false,
});
