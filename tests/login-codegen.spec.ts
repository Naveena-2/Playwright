import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qademo.com/');
  await page.getByTestId('navbar-signin-link').getByRole('button', { name: 'Sign in' }).click();
  await page.getByTestId('username-input').click();
  await page.getByTestId('username-input').fill('standard_user');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('standard123');
  await page.getByTestId('login-submit-button').click();
  await page.getByTestId('navbar-logout-button').click();
});