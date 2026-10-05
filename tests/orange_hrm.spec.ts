import { test,expect } from '@playwright/test';

test('Practice getByPlaceholder', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    const dashboard= page.locator('.oxd-text--h6');
    const loginButton = page.getByRole('button', { name: 'Login' });

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    
    await expect(loginButton).toBeVisible();
    await loginButton.click();
    await expect(dashboard).toBeVisible();

    await page.getByText('My Info').click();
    
    await page.getByText('Personal Details').first().click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Amirtha');
    await page.getByPlaceholder('Middle Name').fill('G');
    await page.getByPlaceholder('Last Name').fill('Test');
    await page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input').fill('EMP001');
    await page.locator('.oxd-input-group').filter({ hasText: 'Other Id' }).locator('input').fill('OTH001');
    await page.locator('.oxd-input-group').filter({ hasText: 'Driver\'s License Number' }).locator('input').fill('DL123456');
    await page.locator('.oxd-input-group').filter({ hasText: 'License Expiry Date' }).locator('input').fill('2030-12-31');
    await page.locator('.oxd-input-group').filter({hasText: 'Nationality'}).locator('.oxd-select-text').click();
    await page.getByRole('option', { name: 'Indian' }).click();
    await page.locator('.oxd-input-group').filter({hasText: 'Marital Status'}).locator('.oxd-select-text').click();
    await page.getByRole('option', { name: 'Single' }).click();
    await page.locator('.oxd-input-group').filter({ hasText: 'Date of Birth' }).locator('input').fill('2000-05-23');
    await page.getByText('Female').click();
    await page.getByRole('button',{name:'Save'}).first().click();
    await expect(page.getByText('Successfully Updated')).toBeVisible();
    
    await page.locator('.oxd-input-group').filter({hasText: 'Blood Type'}).locator('.oxd-select-text').click();
    await page.getByRole('option', { name: 'B+' }).first().click();
    await page.locator('.oxd-input-group').filter({hasText:'Test_Field'}).locator('input').fill('489');
    await page.getByRole('button',{name:'Save'}).first().click();
    await expect(page.getByText('Successfully Updated')).toBeVisible();

});