import { test, expect } from '@playwright/test';

test('Complete shopping flow', async ({ page }) => {

  await page.goto('https://qademo.com/');
  await page.getByTestId('hero-signin-button').click();
  await page.getByTestId('username-input').fill('standard_user');
  await page.getByTestId('password-input').fill('standard123');
  await page.getByTestId('login-submit-button').click();
  await page.getByTestId('product-add-to-cart-4').click();
  await page.getByTestId('product-add-to-cart-3').click();
  await page.getByTestId('product-add-to-cart-5').click();
  await page.getByTestId('navbar-cart-link').click();
  await page.getByTestId('continue-shopping-link-button').click();
  await page.getByTestId('navbar-logout-button').click();
});




