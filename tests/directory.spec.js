const { test, expect } = require('@playwright/test');

test('OrangeHRM Directory - Locate Elements', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();

    await page.getByText('Directory', { exact: true }).click();

    const employeeName = page.locator('[placeholder="Type for hints..."]');
    await expect(employeeName).toBeVisible();

    const jobTitle = page.locator('.oxd-select-text').nth(0);
    await expect(jobTitle).toBeVisible();

    const location = page.locator('.oxd-select-text').nth(1);
    await expect(location).toBeVisible();

});