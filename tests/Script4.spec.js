const { test, expect } = require('@playwright/test');

test('Retrieve Quotation', async ({ page }) => {

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.locator('#email').fill('naveenatest@gmail.com');
    await page.locator('#password').fill('Password@123');
    await page.locator('input[name="submit"]').click();

    await page.locator('.ui-tabs-anchor').filter({ hasText: 'Retrieve Quotation' }).click();

    await page.locator('input[placeholder="identification number"]').fill('69042');

    await page.locator('#getquote').click();

    await expect(page.locator('body')).toContainText('TN09AB1234');

    await expect(page.locator('body')).toContainText('50000');

    await expect(page.locator('body')).toContainText('40000');

    await expect(page.locator('body')).toContainText('Private property');

    await expect(page.locator('body')).toContainText('2024.6.10');

    //await page.pause();
});