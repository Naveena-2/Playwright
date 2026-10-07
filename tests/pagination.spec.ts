import {test, expect} from '@playwright/test';
test('Next page pagination', async({page}) => {
    await page.goto('file:///c%3A/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html');
    const nextButton = page.getByRole('button', { name: 'Next' });
    await nextButton.click();
    //await page.waitForTimeout(2000);// just to see the page change, not needed for the test
    await expect(page.getByText('Page 2')).toBeVisible();
    await nextButton.click();
    //await page.waitForTimeout(2000);
    await expect(page.getByText('Page 3')).toBeVisible();
    await expect(page.getByText('Kiran')).toBeVisible();
    await expect(page.getByText('Anu')).toBeVisible();
    await expect(page.getByText('Ravi')).toBeVisible();

});