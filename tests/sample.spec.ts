import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
  await page.getByRole('heading', { name: 'Apparel & Shoes' }).click();
  await page.getByRole('link', { name: 'Blue Jeans', exact: true }).click();
  await page.getByRole('heading', { name: 'Blue Jeans' }).click();
  await page.getByRole('heading', { name: 'Blue Jeans' }).click();
  await page.locator('#add-to-cart-button-36').click();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await page.getByRole('heading', { name: 'Shopping cart' }).click();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('blue jeans');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Blue Jeans', exact: true }).click();
  await page.locator('.product-name').click();
  await page.locator('#add-to-cart-button-36').click();
  await page.getByText('Register Log in Shopping cart (2) Wishlist (0) There are 2 item(s) in your cart').click();
  await page.getByRole('link', { name: 'Shopping cart (2)' }).click();
  await page.locator('#termsofservice').check();
  await page.getByLabel('Country:').selectOption('5');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
  await expect(page.getByRole('heading', { name: 'Apparel & Shoes' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Shoes');
});