import { test, expect } from '@playwright/test';

test('Verify product information is displayed', async ({ page }) => {

    await page.goto('https://qademo.com/');

    // Verify that product-related content is displayed
    await expect(page.getByRole('heading').first()).toBeVisible();

    console.log('Product information is displayed');

});

