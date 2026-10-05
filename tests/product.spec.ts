import { test, expect } from '@playwright/test';

test('Product Test', async ({ page }) => {

  // Open Blue Jeans product
  await page.goto(
    'https://demowebshop.tricentis.com/blue-jeans'
  );

  // Verify product name
  await expect(
    page.getByRole('heading', {
      name: 'Blue Jeans'
    })
  ).toBeVisible();

  // Click Add to Cart
  await page.locator('#add-to-cart-button-36').click();

  // Verify success message
  await expect(
    page.locator('#bar-notification')
  ).toContainText('The product has been added');

});