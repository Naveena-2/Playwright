import { test, expect } from '@playwright/test';

test('Registration Page Test', async ({ page }) => {

  // Open website
  await page.goto('https://demowebshop.tricentis.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Click Register
  await page.getByRole('link', {
    name: 'Register'
  }).click();

  // Select Female
  await page.locator('#gender-female').check();

  // Enter First Name
  await page.locator('#FirstName').fill('Amirtha');

  // Enter Last Name
  await page.locator('#LastName').fill('Govindasamy');

  // Enter Email
  await page.locator('#Email').fill('amirtha123@gmail.com');

  // Enter Password
  await page.locator('#Password').fill('Amirtha@123');

  // Enter Confirm Password
  await page.locator('#ConfirmPassword').fill('Amirtha@123');

  // Verify entered values
  await expect(page.locator('#FirstName')).toHaveValue('Amirtha');
  await expect(page.locator('#LastName')).toHaveValue('Govindasamy');

  // Keep browser open for checking
  await page.pause();

});