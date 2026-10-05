import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 30 * 1000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
  },
});
