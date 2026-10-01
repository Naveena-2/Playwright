import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://qademo.com/');
  await page.getByRole('button', { name: 'Sign in' }).click();  
  await page.locator('#username').fill('standard_user');
  await page.locator('[type="password"]').fill('standard123');
  await page.locator('[type="submit"]').click();

});