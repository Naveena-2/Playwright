const { test, expect } = require('@playwright/test');
 
test.only('orangehrm', async ({ browser }) => {
 
    const context = await browser.newContext();
    const page = await context.newPage();
 
    const userName = page.locator('input[placeholder="Username"]');
    const password = page.locator('input[placeholder="Password"]');//tagName[attribute="value"]
    const signInBtn = page.locator('button[type="submit"]');
    const firstName = page.getByPlaceholder('First Name');
    const middleName = page.getByPlaceholder('Middle Name');
    const lastName = page.getByPlaceholder('Last Name');
   const employeeId = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
   const otherId = page.locator('.oxd-input-group').filter({ hasText: 'Other Id' }).locator('input');
    const licenseNumber = page.locator('.oxd-input-group').filter({ hasText: "Driver's License Number" }).locator('input');
    const expiryDate = page.getByPlaceholder('yyyy-dd-mm').nth(0);
 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
    console.log(await page.title());
 
    await userName.fill('Admin');
    await password.fill('admin123');
    await signInBtn.click();
 
    await expect(page).toHaveURL(/dashboard/);
    await page.getByText('My Info').click();
    await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
    await firstName.click();
    await firstName.fill('Naveena');
    await middleName.click();
    await middleName.fill('Shree');
    await lastName.click();
    await lastName.fill('A');
 
await employeeId.click();
await employeeId.fill('abc123');
await otherId.click();
await otherId.fill('45678');
await licenseNumber.click();
await licenseNumber.fill('9876');
await expiryDate.click();
await expiryDate.fill('2023-10-01');
 
 
    await page.pause();
   
});
 