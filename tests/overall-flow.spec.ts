import { test, expect } from '@playwright/test';

test('Demo Web Shop Overall Flow', async ({ page }) => {

  // =================================
  // MODULE 1 - HOME PAGE
  // =================================

  await page.goto('https://demowebshop.tricentis.com/');

  await expect(page).toHaveTitle(/Demo Web Shop/);


  // =================================
  // MODULE 2 - CATEGORY
  // =================================

  await page.getByRole('link', {
    name: 'Apparel & Shoes',
    exact: true
  }).first().click();

  await expect(
    page.getByRole('heading', {
      name: 'Apparel & Shoes'
    })
  ).toBeVisible();


  // =================================
  // MODULE 3 - PRODUCT
  // =================================

  await page.getByRole('link', {
    name: 'Blue Jeans',
    exact: true
  }).click();

  await expect(
    page.getByRole('heading', {
      name: 'Blue Jeans'
    })
  ).toBeVisible();


  // =================================
  // MODULE 4 - ADD TO CART
  // =================================

  await page.locator('#add-to-cart-button-36').click();

  await expect(
    page.locator('#bar-notification')
  ).toContainText('The product has been added');


  // =================================
  // MODULE 5 - SHOPPING CART
  // =================================

  await page.getByRole('link', {
    name: /Shopping cart/
  }).first().click();

  await expect(
    page.getByRole('heading', {
      name: 'Shopping cart'
    })
  ).toBeVisible();

  // Verify product in cart
  await expect(
    page.locator('.cart').getByRole('link', {
      name: 'Blue Jeans',
      exact: true
    })
  ).toBeVisible();


  // =================================
  // MODULE 6 - CHECKOUT
  // =================================

  // Accept Terms of Service
  await page.locator('#termsofservice').check();

  // Click Checkout
  await page.getByRole('button', {
    name: 'Checkout'
  }).click();

  // User is not logged in,
  // so Login page should appear
  await expect(
    page.getByRole('heading', {
      name: 'Welcome, Please Sign In!'
    })
  ).toBeVisible();

});