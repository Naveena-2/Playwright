import { test, expect } from '@playwright/test';

test('Logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.locator('#react-burger-menu-btn')
        .click();

    await page.locator('#logout_sidebar_link')
        .click();

    // Verification
    await expect(page.locator('#login-button'))
        .toBeVisible();

    await expect(page.locator('#user-name'))
        .toBeVisible();

    await expect(page.locator('#password'))
        .toBeVisible();
});