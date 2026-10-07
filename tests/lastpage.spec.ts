import { test, expect } from '@playwright/test';

test('Navigate directly to Last Page', async ({ page }) => {

    await page.goto(
        'file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html'
    );

    const lastButton = page.getByRole('button', {
        name: 'Last'
    });

    // Click Last
    await lastButton.click();

    // Verify we are on the last page
    await expect(page.getByText('Page 3')).toBeVisible();

    /* // Verify last page data
    await expect(page.getByText('Kiran')).toBeVisible();
    await expect(page.getByText('Anu')).toBeVisible();
    await expect(page.getByText('Priya')).toBeVisible(); */
});