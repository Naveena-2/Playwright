import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {

    // Open login page
    await page.goto('https://qademo.com/login');

    // Enter username
    await page.getByLabel('Username').fill('standard_user');

    // Enter password
    await page.getByLabel('Password').fill('standard123');

    // Click the actual Login form Sign In button
    await page.getByTestId('login-submit-button').click();

    // Verify login was successful
    await expect(page).toHaveURL(/qademo.com/);

    console.log('Login successful');
});