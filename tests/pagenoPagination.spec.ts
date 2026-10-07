import { test, expect } from '@playwright/test';

test('Navigate directly to Page 3', async ({ page }) => {

    await page.goto('file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html'
    );

    await page.getByRole('button', { name: '3' }).click();

    // Verify Page 3 is displayed
    await expect(page.getByText('Page 3')).toBeVisible();
    //await page.waitForTimeout(2000);

    // Verify Page 3 data
    await expect(page.getByText('Kiran')).toBeVisible();
    await expect(page.getByText('Anu')).toBeVisible();
    await expect(page.getByText('Ravi')).toBeVisible();
});