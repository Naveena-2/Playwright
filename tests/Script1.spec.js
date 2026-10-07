const { test, expect } = require('@playwright/test');

test('Registration and Login', async ({ page }) => {
    
    const email = 'naveenatest@gmail.com';
    const password = 'Password@123';

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    await expect(page).toHaveTitle(/Insurance/i);
    await page.locator('a[href="register.php"]').click();
    await page.locator('#user_title').selectOption({ label: 'Miss' });
    await page.locator('#user_firstname').fill('Naveena');
    await page.locator('#user_surname').fill('Shree');
    await page.locator('#user_phone').fill('9894511250');
    await page.locator('#user_dateofbirth_1i').selectOption('1995');
    await page.locator('#user_dateofbirth_2i').selectOption({ label: 'September' });
    await page.locator('#user_dateofbirth_3i').selectOption('10');
    await page.locator('#licencetype_t').check();
    await page.locator('#user_licenceperiod').selectOption('5');
    await page.locator('#user_occupation_id').selectOption({ label: 'Academic' });
    await page.locator('#user_address_attributes_street').fill('ESI');
    await page.locator('#user_address_attributes_city').fill('Coimbatore');
    await page.locator('#user_address_attributes_county')
        .fill('Tamil Nadu');
    await page.locator('#user_address_attributes_postcode')
        .fill('641001');
    await page.locator('#user_user_detail_attributes_email')
        .fill(email);
    await page.locator('#user_user_detail_attributes_password')
        .fill(password);
    await page.locator('#user_user_detail_attributes_password_confirmation')
        .fill(password);
    await page.locator('input[value="Create"]').click();
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    await page.locator('#email').fill(email);
    await page.locator('#password').fill(password);
    await page.locator('input[value="Log in"]').click();
    //await page.pause();
    await expect(page.locator('body')).toContainText(email);
    await expect(page.locator('input[value="Log out"]')).toBeVisible();
    await expect(page.locator('body')).toContainText(/Broker Insurance/i);

});
