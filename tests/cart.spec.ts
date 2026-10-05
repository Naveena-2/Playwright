import { test, expect } from '@playwright/test';

test('Shopping Cart Test', async ({ page }) => {

  // Open product
  await page.goto(
    'https://demowebshop.tricentis.com/blue-jeans'
  );

  // Add product to cart
  await page.locator('#add-to-cart-button-36').click();

  // Wait for product to be added
  await expect(
    page.locator('#bar-notification')
  ).toContainText('The product has been added');

  // Open Shopping Cart
  await page.getByRole('link', {
    name: /Shopping cart/
  }).first().click();

  // Verify Shopping Cart page
  await expect(
    page.getByRole('heading', {
      name: 'Shopping cart'
    })
  ).toBeVisible();

  // Verify Blue Jeans inside cart
  await expect(
    page.locator('.cart').getByRole('link', {
      name: 'Blue Jeans',
      exact: true
    })
  ).toBeVisible();

});