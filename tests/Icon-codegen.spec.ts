import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qademo.com/');
  await page.getByTestId('navbar-signin-link').getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByTestId('username-input')).toBeEmpty();
  await page.getByTestId('username-input').click();
  await page.getByTestId('username-input').fill('standard_user');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('standard123');
  await page.getByTestId('login-submit-button').click();
  await expect(page.getByTestId('catalog-heading')).toContainText('Product Catalog');
  await page.getByTestId('catalog-product-count').click();
  await page.getByTestId('catalog-product-count').click();
  await page.getByTestId('navbar-logout-button').click();

// assert snapshot for accessibility
  await page.getByTestId('login-submit-button').click();
  await expect(page.getByTestId('catalog-heading')).toMatchAriaSnapshot(`- heading "Product Catalog" [level=1]`);
  await page.getByTestId('catalog-product-count').click();
  await expect(page.getByTestId('catalog-product-count')).toMatchAriaSnapshot(`- paragraph: /Browse our complete selection of \\d+ products/`);

});