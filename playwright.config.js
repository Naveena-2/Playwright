// @ts-check
import { defineConfig } from '@playwright/test';

const config = defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000,
    },

    reporter: 'html',

    use: {
        browserName: 'chromium',
        //channel: 'msedge',
        headless: false,
    },
});

module.exports = config;
