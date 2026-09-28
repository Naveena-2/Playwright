import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();
});

//sort products by A to Z 
test('Sort Products by Name A to Z', async ({ page }) => {

    await page.locator('.product_sort_container')
        .selectOption('az');

    // Verification
    await expect(page.locator('.product_sort_container'))
        .toHaveValue('az');
});

//sort products by Z to A
test('Sort Products by Name Z to A', async ({ page }) => {

    await page.locator('.product_sort_container')
        .selectOption('za');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('za');
});

//sort products by Price low to high
test('Sort Price Low to High', async ({ page }) => {

    await page.locator('.product_sort_container')
        .selectOption('lohi');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('lohi');
});

//sort products by Price high to low
test('Sort Price High to Low', async ({ page }) => {

    await page.locator('.product_sort_container')
        .selectOption('hilo');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('hilo');
});
