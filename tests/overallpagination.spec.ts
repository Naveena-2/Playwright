import { test, expect } from '@playwright/test';

test('Find Ravi and read his role across paginated table', async ({ page }) => {

    await page.goto(
        'file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/pagination.html'
    );

    const rows = page.locator('table tbody tr');

    const nextButton = page.getByRole('button', {
        name: 'Next'
    });

    while (true) {

        // Check whether Ravi is present on the current page
        const raviRow = rows.filter({ hasText: 'Ravi' });

        if (await raviRow.count() > 0) {

            console.log('Ravi found!');

            // Get Ravi's Role
            const raviRole = raviRow.locator('td').nth(1);

            console.log(
                'Ravi role:',
                await raviRole.textContent()
            );

            // Verify the role
            await expect(raviRole).toHaveText('Manager');

            break;
        }

        // If Ravi is not found, move to the next page
        if (await nextButton.isDisabled()) {
            console.log('Ravi was not found');
            break;
        }

        await nextButton.click();
    }
});