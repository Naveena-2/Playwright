import { test, expect } from '@playwright/test'; //importing test & functions from playwright 

test('Valid Login', async ({ page }) => { // test block statement 

    await page.goto('https://www.saucedemo.com/');  
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(page.locator('.login_logo')).toBeVisible();

    await expect(page).toHaveTitle('Swag Labs');

   await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    // Verification
    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('.title')).toHaveText('Products');
});