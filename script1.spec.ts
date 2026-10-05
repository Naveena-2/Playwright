import {test, expect} from '@playwright/test';
 
test('Insurance Broker System', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
 
    await page.getByRole('link',{name:'Register'}).click();
    await expect(page).toHaveTitle('Insurance Broker System - Register');
 
    await page.locator('#user_title').selectOption({label:'Miss'});
    await page.getByLabel('First name').fill('Kaviya');
    await page.getByLabel('Surname').fill('ravi');
    await page.getByLabel('Phone').fill('9876543210');
    await page.locator('#user_dateofbirth_1i').selectOption({label:'1990'});
    await page.locator('#user_dateofbirth_2i').selectOption({label:'May'});
    await page.locator('#user_dateofbirth_3i').selectOption({label:'23'});
    
    await page.locator('input[value="Full"]').check();
    await page.getByRole('combobox',{name:'Licence Period'}).selectOption({label:'5'});
    await page.locator('#user_occupation_id').selectOption({label:'Engineer'});
    await page.locator('input[name="street"]').fill('123 cheran Street');
    await page.locator('input[name="city"]').fill('Coimbaotre');
    await page.getByRole('textbox',{name:'County'}).fill('India');
    await page.getByLabel('Post code').fill('641014');
    await page.getByLabel('Email').fill('kaviya@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.locator('input[name="c_password"]').fill('Test@123');
    await page.getByRole('button',{name:'Create'}).click();
 
    await page.getByLabel('Email').fill('kaviya@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();
 
    await expect(page.getByText('kaviya@gmail.com')).toBeVisible();
    await expect(page.getByRole('button',{name:'Log out'})).toBeVisible();
    await expect(page.getByText('Broker Insurance WebPage')).toBeVisible();
});