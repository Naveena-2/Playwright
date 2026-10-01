import {test , expect } from '@playwright/test';

test('My Info', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/')
await expect(page).toHaveTitle('OrangeHRM')

await expect(page.getByPlaceholder('Username')).toBeVisible();
await page.getByPlaceholder('Username').fill('Admin');

await expect(page.getByPlaceholder('Password')).toBeVisible();
await page.getByPlaceholder('Password').fill('admin123');

await page.getByRole('button',{name:'Login'}).click();

await page.getByText('My Info',{exact: true}).click();
await expect(page.getByRole('heading', { name: 'Personal Details', exact: true })).toBeVisible();;
const firstName = page.getByPlaceholder('First Name');
const middleName = page.getByPlaceholder('Middle Name');
const lastName = page.getByPlaceholder('Last Name');
await firstName.click();
await firstName.fill('Renu');

await middleName.click();
await middleName.fill('Priya');

await lastName.click();
await lastName.fill('R');



});