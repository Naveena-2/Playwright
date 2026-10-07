import { test, expect } from '@playwright/test';

test('Find Ravi across multiple pages', async ({ page }) => {

    await page.goto('file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html');

    const nextButton = page.getByRole('button', {name: 'Next'});

    // Check Page 1
    let priya = page.getByText('Priya');
     while (true) {

        // Check if Priya is on the current page
        if (await priya.isVisible()) {
            console.log('Priya found!');
            break;
        }

        // If Priya is not found, go to the next page
        await nextButton.click();
    }
   
    await expect(priya).toBeVisible();
});