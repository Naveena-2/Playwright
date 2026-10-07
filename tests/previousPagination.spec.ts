/* import {test,expect} from '@playwright/test';
test('Previous page pagination', async({page}) => {
    await page.goto('file:///c%3A/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html');
    const nextButton = page.getByRole('button', { name: 'Next' });
    const previousButton = page.getByRole('button', { name: 'Previous' });
    await nextButton.click();
    await nextButton.click();
    await page.waitForTimeout(2000);
    await expect(page.getByText('Page 3')).toBeVisible();
    await previousButton.click();
    await page.waitForTimeout(2000);
    await expect(page.getByText('Page 2')).toBeVisible();

}) */


/* import { test, expect } from '@playwright/test';

test('Navigate from Page 1 to Page 3 and back to Page 1', async ({ page }) => {

    await page.goto('file:///c%3A/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html');
    const nextButton = page.getByRole('button', {
        name: 'Next'
    });

    const previousButton = page.getByRole('button', {
        name: 'First'
    });

    // Page 1 → Page 2
    await nextButton.click();
    await expect(page.getByText('Page 2')).toBeVisible();
    await page.waitForTimeout(2000);

    // Page 2 → Page 3
    await nextButton.click();
    await expect(page.getByText('Page 3')).toBeVisible();
    await page.waitForTimeout(2000);

    // Page 3 → Page 2
   /*  await previousButton.click();
    await expect(page.getByText('Page 2')).toBeVisible();
    //await page.waitForTimeout(2000); */

    // Page 2 → Page 1
   /*  await previousButton.click();
    await expect(page.getByText('Page 1')).toBeVisible();
    await page.waitForTimeout(2000);

    // Verify Page 1 data
    await expect(page.getByText('John')).toBeVisible();
    await expect(page.getByText('David')).toBeVisible();
    await expect(page.getByText('Naveena')).toBeVisible();
}); */ 


import { test, expect } from '@playwright/test';

test('Navigate from Page 1 to Page 3 and back to Page 1', async ({ page }) => {

    await page.goto(
        'file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html'
    );

    const nextButton = page.getByRole('button', {
        name: 'Next'
    });

    const firstButton = page.getByRole('button', {
        name: 'First'
    });

    // Page 1 → Page 2
    await nextButton.click();
    await expect(page.getByText('Page 2')).toBeVisible();
    await page.waitForTimeout(2000);

    // Page 2 → Page 3
    await nextButton.click();
    await expect(page.getByText('Page 3')).toBeVisible();
    await page.waitForTimeout(2000);

    // Page 3 → Page 1
    await firstButton.click();
    await expect(page.getByText('Page 1')).toBeVisible();
    await page.waitForTimeout(2000);

    // Verify Page 1 data
    await expect(page.getByText('John')).toBeVisible();
    await expect(page.getByText('David')).toBeVisible();
    await expect(page.getByText('Naveena')).toBeVisible();
});