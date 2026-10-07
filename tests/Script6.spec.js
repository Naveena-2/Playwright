const { test, expect } = require('@playwright/test');

test('Edit Profile', async ({ page }) => {

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    // Login
    await page.locator('#email').fill('naveenatest@gmail.com');
    await page.locator('#password').fill('Password@123');
    await page.locator('input[name="submit"]').click();

    // Navigate to Edit Profile
    await page
        .locator('.ui-tabs-anchor')
        .filter({ hasText: 'Edit Profile' })
        .click();

    // Update profile fields
    await page.locator('#user_firstname')
        .fill('NaveenaUpdated');

    await page.locator('#user_surname')
        .fill('ShreeUpdated');

    await page.locator('#user_phone')
        .fill('9876543210');

    await page.locator('#user_address_attributes_street')
        .fill('Gandhipuram');

    await page.locator('#user_address_attributes_city')
        .fill('Coimbatore');

    await page.locator('#user_address_attributes_county')
        .fill('Tamil Nadu');

    // Save profile
    await page
        .locator('input[value="Update User"]')
        .click();

    // Open Profile tab
    /*await page
        .locator('.ui-tabs-anchor')
        .filter({ hasText: 'Profile' })
        .click();*/
    await page.locator('#ui-id-4').click();


    // Verify updated data
    await expect(page.locator('#showfirstname'))
        .toContainText('NaveenaUpdated');

    await expect(page.locator('#showsurname'))
        .toContainText('ShreeUpdated');

    await expect(page.locator('#showphone'))
        .toContainText('9876543210');

    await expect(page.locator('#showcity'))
        .toContainText('Coimbatore');

    await page.pause();
});