import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('amirtha@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Password@123');
  await page.getByRole('checkbox', { name: 'Remember me?' }).check();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'amirtha@gmail.com' })).toBeVisible();
  await page.getByRole('link', {name: 'Apparel & Shoes'}).first().click();
  await expect(page.getByRole('heading', {name: 'Apparel & Shoes'})).toBeVisible();
  await page.getByRole('link', {name: 'Blue Jeans',exact: true}).click();
  await expect(page.locator('h1')).toContainText('Blue Jeans');
  await page.locator('#add-to-cart-button-36').click();
  await expect(page.getByText('The product has been added to')).toBeVisible();
  await page.getByRole('link', {name: 'Log out'}).click();

});