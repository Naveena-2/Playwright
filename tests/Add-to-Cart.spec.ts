import { test, expect } from '@playwright/test';

test('Verify product details', async ({ page }) => {

    await page.goto('https://qademo.com/');

    await page.getByText(/Laptop/i).first().click();

    await expect(page.getByRole('heading').first()).toBeVisible();

    console.log('Product details page opened');

});