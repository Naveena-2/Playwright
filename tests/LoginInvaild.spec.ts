import { test, expect } from '@playwright/test';

test('Login with invalid password', async ({ page }) => {

    await page.goto('https://qademo.com/login');

    await page.getByLabel('Username').fill('standard_user');

    await page.getByLabel('Password').fill('wrongpassword');

    await page.getByTestId('login-submit-button').click();

    await expect(
        page.getByText(/invalid|incorrect/i)
    ).toBeVisible();

});