import { test } from '@playwright/test';

test('browser', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
});

test('API test', async ({ request }) => {

    const response = await request.get('https://www.saucedemo.com/');

    console.log(response.status());
});

test('context', async ({ context }) => {
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
});