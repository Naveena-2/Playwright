import { test, expect } from '@playwright/test';

test('Open QADemo website', async ({ page }) => {

    await page.goto('https://qademo.com/');

    await expect(page).toHaveURL(/qademo.com/);

    console.log('Website opened successfully');

});

