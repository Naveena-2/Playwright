import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
  await expect(page.getByRole('heading', { name: 'Apparel & Shoes' })).toBeVisible();
  await page.getByRole('link', { name: 'Blue Jeans', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Blue Jeans');
  await page.locator('#add-to-cart-button-36').click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
});