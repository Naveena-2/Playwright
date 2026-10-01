import { test, expect } from '@playwright/test';

test('Verify cart page', async ({ page }) => {

    await page.goto('https://qademo.com/cart');

    await expect(page).toHaveURL(/cart/);

    
    console.log('Cart page opened');

});
