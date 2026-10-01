import { test, expect } from '@playwright/test';

test('Open product details', async ({ page }) => {

    await page.goto('https://qademo.com/');

    await page.getByText(/Laptop/i).first().click();

    await expect(page).toHaveURL(/product/);

    console.log('Product details page opened');

});

