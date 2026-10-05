import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {

  // Open website
   await page.goto('https://demowebshop.tricentis.com/');

  // Verify title
   await expect(page).toHaveTitle(/Demo Web Shop/);

});