import { test, expect } from '@playwright/test';

test('Search Product Test', async ({ page }) => {

  // Give this demo website more time
  test.setTimeout(60000);

  // Open website
  await page.goto('https://demowebshop.tricentis.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Search box
  const searchBox = page.locator('#small-searchterms');

  await searchBox.fill('Blue Jeans');

  // Click Search
  await page.getByRole('button', {
    name: 'Search',
    exact: true
  }).click();

  // Verify search result
  await expect(
    page.getByRole('link', {
      name: 'Blue Jeans',
      exact: true
    }).first()
  ).toBeVisible();

});