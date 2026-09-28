import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();
});


test('Add Product to Cart', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    // Verification
    await expect(page.locator('.shopping_cart_badge'))
        .toHaveText('1');
});

//add multiple products to cart
test('Add Multiple Products', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    await page.locator('#add-to-cart-sauce-labs-bike-light')
        .click();

    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        .click();

    // Verification
    await expect(page.locator('.shopping_cart_badge'))
     .toHaveText('3');
});

//remove product from cart
test('Remove Product from Cart', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    await expect(page.locator('.shopping_cart_badge'))
        .toHaveText('1');

    await page.locator('#remove-sauce-labs-backpack')
        .click();

    // Verification
    await expect(page.locator('.shopping_cart_badge'))
        .not.toBeVisible();
});