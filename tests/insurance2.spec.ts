import {test, expect} from '@playwright/test';

test('Insurance Quotation Request', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.getByLabel('Email').fill('amirtha@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('link',{name:'Request Quotation'}).click();
    await expect(page.getByText('Request a quotation')).toBeVisible();

    await page.getByLabel('Breakdowncover').selectOption({label:'At home'});
    await page.locator('input[value="Yes"]').check();
    await page.getByPlaceholder('Enter incidents').fill('1');
    await page.getByPlaceholder('Enter vehicle registration').fill('TN01AB1234');
    await page.getByPlaceholder('Enter vehicle mileage').fill('12000');
    await page.getByPlaceholder('Enter vehicle value').fill('500000');
    await page.locator('select[name="parkinglocation"]').selectOption({label:'Private Property'});
    await page.locator('select[name="year"]').selectOption({label:'2025'});
    await page.locator('select[name="month"]').selectOption({label:'October'});
    await page.locator('select[name="date"]').selectOption({label:'15'});
    await page.locator('input[value="Calculate Premium"]').click();

    await expect(page.getByText('No discount')).toBeVisible();
    await expect(page.getByTitle('This is the Premium including the discount you have')).toBeVisible();

    await page.locator('input[type="reset"]').click();

});