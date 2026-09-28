import { test, expect } from '@playwright/test';

test('Swag Labs Complete Purchase Flow', async ({ page }) => {

    // 1. Open application
    await page.goto('https://www.saucedemo.com/');

    // 2. Login
    await page.locator('#user-name')
        .fill('standard_user');

    await page.locator('#password')
        .fill('secret_sauce');

    await page.locator('#login-button')
        .click();

    // Verification
    await expect(page.locator('.title'))
        .toHaveText('Products');


    // 3. Add product
    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    // Verification
    await expect(page.locator('.shopping_cart_badge'))
        .toHaveText('1');


    // 4. Open cart
    await page.locator('.shopping_cart_link')
        .click();

    // Verification
    await expect(page.locator('.title'))
        .toHaveText('Your Cart');


    // 5. Checkout
    await page.locator('#checkout')
        .click();

    // 6. Enter information
    await page.locator('#first-name')
        .fill('John');

    await page.locator('#last-name')
        .fill('Doe');

    await page.locator('#postal-code')
        .fill('641001');

    await page.locator('#continue')
        .click();

    // Verification
    await expect(page.locator('.title'))
        .toHaveText('Checkout: Overview');


    // 7. Finish order
    await page.locator('#finish')
        .click();

    // Final verification
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
});