import { test, expect } from '@playwright/test';

test('Invalid Login Test', async ({ page }) => {

  // Open website
  await page.goto('https://demowebshop.tricentis.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Click Log in
  await page.getByRole('link', {
    name: 'Log in'
  }).click();

  // Enter Email
  await page.locator('#Email').fill('testuser123@gmail.com');

  // Enter Password
  await page.locator('#Password').fill('Test@123');

  await page.pause();

  // Click Login button
  await page.getByRole('button', {
    name: 'Log in'
  }).click();

  // Verify error message
  await expect(
    page.getByText(/Login was unsuccessful/i)
  ).toBeVisible();

});