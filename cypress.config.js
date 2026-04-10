module.exports = defineConfig({
  e2e: {
    video: true,   // 👈 هنا

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      allure: true
    }
  }
});