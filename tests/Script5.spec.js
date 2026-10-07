const { test, expect } = require('@playwright/test');

test('Profile Verification', async ({ page }) => {

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.locator('#email').fill('naveenatest@gmail.com');
    await page.locator('#password').fill('Password@123');
    await page.locator('input[name="submit"]').click();

    await page.locator('#ui-id-4').click();


    await expect(page.locator('#showtitle')).toBeVisible();
    await expect(page.locator('#showfirstname')).toBeVisible();
    await expect(page.locator('#showsurname')).toBeVisible();
    await expect(page.locator('#showphone')).toBeVisible();
    await expect(page.locator('#showdateofbirth')).toBeVisible();
    await expect(page.locator('#showlicencetype')).toBeVisible();
    await expect(page.locator('#showlicenceperiod')).toBeVisible();
    await expect(page.locator('#showoccupation')).toBeVisible();
    await expect(page.locator('#showincidents')).toBeVisible();
    await expect(page.locator('#showstreet')).toBeVisible();
    await expect(page.locator('#showcity')).toBeVisible();
    await expect(page.locator('#showcounty')).toBeVisible();
    await expect(page.locator('#showpostcode')).toBeVisible();

    console.log('First Name:',await page.locator('#showfirstname').textContent());

    await page.pause();
});