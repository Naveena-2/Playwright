import { test, expect } from '@playwright/test';

test('Verify Menu', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.locator('#react-burger-menu-btn')
        .click();

    // Verification
    await expect(page.locator('#inventory_sidebar_link'))
        .toBeVisible();

    await expect(page.locator('#about_sidebar_link'))
        .toBeVisible();

    await expect(page.locator('#logout_sidebar_link'))
        .toBeVisible();

    await expect(page.locator('#reset_sidebar_link'))
        .toBeVisible();
});