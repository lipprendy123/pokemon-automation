const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  use: {
    baseURL: 'https://www.pokemon.com',
    headless: false,
    slowMo: 1500,
    video: 'on',
    screenshot: 'on',
    viewport: {width: 1280, height: 720},
    launchOptions: {
      args: ['--disable-blink-features=AutomationControlled'],
    },
  },
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
  ],
});