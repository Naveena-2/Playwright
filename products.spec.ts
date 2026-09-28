import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { // This block will run before each test in this file

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();
});

//verify the Products page 
test('Verify Products Page', async ({ page }) => {

    await expect(page.locator('.title'))
        .toHaveText('Products');

    await expect(page.locator('.inventory_list'))
        .toBeVisible();
});

//verify all products
test('Verify all Products', async ({ page }) => {

    const products = page.locator('.inventory_item');

    // Verify there are exactly 6 products
    await expect(products).toHaveCount(6);

    // Verify every product has a product name
    for (let i = 0; i < await products.count(); i++) {

        const productName =
            products.nth(i).locator('.inventory_item_name');

        await expect(productName).toBeVisible();
    }
});

//all product has price 
test('Verify Products Have Price', async ({ page }) => {

    const prices = page.locator('.inventory_item_price');

    const count = await prices.count();

    for (let i = 0; i < count; i++) {

        await expect(prices.nth(i))
            .toBeVisible();
    }
});