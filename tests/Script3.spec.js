const { test, expect } = require('@playwright/test');

test('Save Quotation', async ({ page }) => {

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    await page.locator('#email').fill('naveenatest@gmail.com');
    await page.locator('#password').fill('Password@123');
    await page.locator('input[name="submit"]').click();
    await expect(page.getByText('Broker Insurance WebPage', { exact: true })).toBeVisible();
    await page.locator('.ui-tabs-anchor').filter({ hasText: 'Request Quotation' }).click();
    await page.getByPlaceholder('Enter incidents').fill('2');
    await page.getByPlaceholder('Enter vehicle registration').fill('TN09AB1234');
    await page.getByPlaceholder('Enter vehicle mileage').fill('50000');

    await page.getByPlaceholder('Enter vehicle value').fill('40000');
    await page.locator('#quotation_vehicle_attributes_parkinglocation').selectOption('Private Property');
    await page.locator('#quotation_vehicle_attributes_policystart_1i').selectOption('2024');
    await page.locator('#quotation_vehicle_attributes_policystart_2i').selectOption('6');
    await page.locator('#quotation_vehicle_attributes_policystart_3i').selectOption('10');
    await page.getByRole('button', { name: 'Calculate Premium' }).click();
    const calculatedPremium = page.locator('#calculatedpremium');
    await expect(calculatedPremium).toBeVisible();
    console.log('Calculated Premium:',await calculatedPremium.textContent());
    await expect(page.locator('#calculatedpremium')).toContainText('No discount')
    await page.getByRole('button', { name: 'Save Quotation' }).click();
    await expect(page.locator('body')).toContainText('You have saved this quotation!');
    await expect(page.locator('body')).toContainText('Your identification number is');
    const pageText = await page.locator('body').textContent();
    const match = pageText.match(/Your identification number is\s*:\s*(\d+)/);
    expect(match).not.toBeNull();
    const quotationId = match[1];
    console.log('Quotation ID:', quotationId);
    expect(quotationId).toMatch(/\d+/);
    await page.pause();

});