import { expect, test } from "@playwright/test";

test('Invalid Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('wrong_user');

    await page.locator('#password').fill('wrong_password');

    await page.locator('#login-button').click();

    // Verification
    await expect(page.locator('[data-test="error"]'))
        .toBeVisible();

});