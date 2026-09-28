import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible(); //assert visibility 

  await expect(page.locator('#root')).toContainText('Swag Labs'); //asssert text 
   
  await expect(page.locator('[data-test="username"]')).toBeEmpty();

  await page.locator('[data-test="username"]').fill('standard_user'); //assert fill 

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
   
  //assert snapshot 
  await expect(page.locator('[data-test="product-sort-container"]')).toMatchAriaSnapshot(`
    - combobox "Sort products":
      - option "Name (A to Z)" [selected]
      - option "Name (Z to A)"
      - option "Price (low to high)"
      - option "Price (high to low)"
    `);
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toMatchAriaSnapshot(`- button "Add to cart"`);
});