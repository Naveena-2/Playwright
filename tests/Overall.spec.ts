import { test, expect } from '@playwright/test';

test('Complete shopping flow', async ({ page }) => {

    // 1. OPEN WEBSITE
    await page.goto('https://qademo.com/');
    await expect(page).toHaveURL(/qademo.com/);

    // 2. LOGIN
    await page.getByTestId('navbar-signin-link').click();
    await page.getByLabel(/username|email/i).fill('standard_user');
    await page.getByLabel(/password/i).fill('standard123');
    await page.getByTestId('login-submit-button').click();

    // Verify login
    await expect(
        page.getByRole('link', { name: /my orders/i })
    ).toBeVisible();

    // 3. OPEN PRODUCTS
    await page.getByRole('link', { name: /^products$/i }).click();
    await expect(page).toHaveURL(/catalog|products/i);

    // 4. SELECT AN ENABLED PRODUCT
    const addToCartButton = page.locator('button[data-testid^="product-add-to-cart-"]:not([disabled])').first();
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // 5. OPEN CART
    await page.getByRole('link', { name: /^cart$/i }).click();
    await expect(page).toHaveURL(/cart/);

    // 6. VERIFY PRODUCT IS IN CART
    await expect(page.locator('body')).toContainText(/bluetooth speaker|wireless|laptop/i, { timeout: 10000 });

    // 7. CHECKOUT
    await page.getByRole('button', { name: /proceed to checkout/i }).click();
    await expect(page).toHaveURL(/checkout/);

    // 8. ENTER CHECKOUT DETAILS
    await page.getByLabel('First Name').fill('Keerthana');
    await page.getByLabel('Last Name').fill('Priya');
    await page.getByLabel('Shipping Address').fill('Coimbatore');
    await page.getByLabel('Card Number').fill('4111111111111111');
    await page.getByLabel('Expiry Date').fill('12/30');
    await page.getByLabel('CVV').fill('123');
    await page.getByLabel('Name on Card').fill('Keerthana Priya');

    // 9. PLACE ORDER
    await page.getByRole('button', { name: /place order/i }).click();

    // 10. VERIFY ORDER SUCCESS
    await expect(
        page.getByText(/thank you|your order|order placed|success/i).first()
    ).toBeVisible({ timeout: 20000 });

    // 11. OPEN ORDERS
    await page.getByRole('link', { name: /my orders/i }).click();
    await expect(page).toHaveURL(/orders/);

    // 12. VERIFY ORDER EXISTS
    await expect(
        page.getByText(/order/i).first()
    ).toBeVisible();

});