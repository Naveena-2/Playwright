import { test, expect } from '@playwright/test';

test('Checkout Information', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();


    // Add product to cart
    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();


    // Go to cart
    await page.locator('.shopping_cart_link')
        .click();


    // Checkout
    await page.locator('#checkout')
        .click();


    // Verify Checkout Information page
    await expect(page.locator('#first-name'))
        .toBeVisible();

    await expect(page.locator('#last-name'))
        .toBeVisible();

    await expect(page.locator('#postal-code'))
        .toBeVisible();

    await expect(page.locator('#continue'))
        .toBeVisible();

    await expect(page.locator('.title'))
        .toHaveText('Checkout: Your Information');


    // Fill customer information
    await page.locator('#first-name')
        .fill('John');

    await page.locator('#last-name')
        .fill('Doe');

    await page.locator('#postal-code')
        .fill('641001');


    // Continue to overview
    await page.locator('#continue')
        .click();


    // Verify Checkout Overview page
    await expect(page.locator('.title'))
        .toHaveText('Checkout: Overview');


    // Finish order
    await page.locator('#finish')
        .click();


    // Verify order completion
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
});