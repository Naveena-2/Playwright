const {test, expect}= require('@playwright/test');
test.only ('request quotation', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    const Email = page.locator('#email');
    const Password = page.locator('#password');
    const loginBtn = page.locator('input[name="submit"]');
    const requestQuotation = page.locator('.ui-tabs-anchor').filter({ hasText: 'Request Quotation' });
    await Email.fill('naveenatest@gmail.com');
    await Password.fill('Password@123');
    await loginBtn.click();
    await expect(page.getByText('Broker Insurance WebPage', { exact: true })).toBeVisible();
    await requestQuotation.click();
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
    console.log('calculated premium:', await calculatedPremium.textContent());
    //ait expect(page.locator('#discount')).toBeVisible();
    await expect(page.locator('#calculatedpremium')).toContainText('No discount');
    await page.locator('#resetquote').click();
    

    
     await page.pause();

});