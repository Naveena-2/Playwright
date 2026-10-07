const { test, expect } = require('@playwright/test');

test('Employee Personal Details', async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();

     await page.getByText('My Info').click();
     await expect(page.getByRole('heading', { name: 'Personal Details' })
    ).toBeVisible();
   
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill('Naveena');
    await page.locator('label:has-text("Employee Id")').locator('..').locator('input').fill('10509');
    await page.locator('label:has-text("Other Id")').locator('..').locator('input').fill('56789');

    await page.getByLabel("Driver's License Number").fill('20078');
    await page.getByLabel('License Expiry Date').fill('2028-06-10');

    await page.getByLabel('Nationality').click();
    await page.getByText('Indian').click();

    await page.getByLabel('Marital Status').click();
    await page.getByText('Single').click();
    await page.getByLabel('Female').check();
    await page.getByLabel('Date of Birth').fill('2023-09-10');
    await page.getByRole('button', { name: 'Save' }).click();

});