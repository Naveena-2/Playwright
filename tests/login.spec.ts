import { test, expect } from '@playwright/test';

test('Login Page Test', async ({ page }) => {

  // Open website
  await page.goto('https://demowebshop.tricentis.com/');

  // Click Login
  await page.getByRole('link', {name: 'Log in'}).click();

  // Verify login page
  await expect(page.getByRole('heading', {name: 'Welcome, Please Sign In!'})).toBeVisible();

});