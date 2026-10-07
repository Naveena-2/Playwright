import { test, expect } from '@playwright/test';

test('Read and manipulate data from web table', async ({ page }) => {

    await page.goto('file:///C:/Users/NaveenaShreeArulvel/Downloads/Playwright/table.html');

    // Find all rows in the table
    const rows = page.locator('table tbody tr');

    // Read number of rows
    console.log('Number of rows:', await rows.count());

    // Read first row
    console.log('First row:', await rows.nth(0).textContent());

    // Read second row
    console.log('Second row:', await rows.nth(1).textContent());

    // Find Naveena's row
    const naveenaRow = rows.filter({ hasText: 'Naveena' });
    console.log('Row with Naveena:', await naveenaRow.textContent());

    // Find David's row
    const davidRow = rows.filter({ hasText: 'David' });
    console.log('Row with David:', await davidRow.textContent());

    // Get David's role
    const davidRole = davidRow.locator('td').nth(2);
    console.log("David's role:", await davidRole.textContent());

    // Click Edit button in David's row
    const editButton = davidRow.getByRole('button', { name: 'Edit' });
    await editButton.click();

    // Click Delete button in David's row
    const deleteButton = davidRow.getByRole('button', { name: 'Delete' });
    await deleteButton.click();

    // Verify David's row is deleted
    await expect(davidRow).toHaveCount(0);
});