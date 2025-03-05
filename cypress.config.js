const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    env: {
      API_URL: 'https://api.demoblaze.com'
    },
    fixturesFolder: false,
  },
})
