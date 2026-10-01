import { test, expect } from '@playwright/test';

test('Verify products are displayed', async ({ page }) => {

    await page.goto('https://qademo.com/');

    // Verify that products are displayed
    const products = page.getByRole('heading');

    await expect(products.first()).toBeVisible();

    console.log('Products are displayed');

});