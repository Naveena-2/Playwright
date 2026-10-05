import {test, expect} from '@playwright/test';

test('Insurance Broker System', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.getByRole('link',{name:'Register'}).click();
    await expect(page).toHaveTitle('Insurance Broker System - Register');

    await page.locator('#user_title').selectOption({label:'Miss'});
    await page.getByLabel('First name').fill('Amirtha');
    await page.getByLabel('Surname').fill('Govindasamy');
    await page.getByLabel('Phone').fill('9876543210');
    await page.locator('#user_dateofbirth_1i').selectOption({label:'1990'});
    await page.locator('#user_dateofbirth_2i').selectOption({label:'May'});
    await page.locator('#user_dateofbirth_3i').selectOption({label:'23'});

    await page.locator('input[value="Full"]').check();
    await page.getByRole('combobox',{name:'Licence Period'}).selectOption({label:'5'});
    await page.locator('#user_occupation_id').selectOption({label:'Engineer'});
    await page.locator('input[name="street"]').fill('123 Main Street');
    await page.locator('input[name="city"]').fill('Coimbaotre');
    await page.getByRole('textbox',{name:'County'}).fill('India');
    await page.getByLabel('Post code').fill('641014');
    await page.getByLabel('Email').fill('amirtha@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.locator('input[name="c_password"]').fill('Test@123');
    await page.getByRole('button',{name:'Create'}).click();

    await page.getByLabel('Email').fill('amirtha@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await expect(page.getByText('amirtha@gmail.com')).toBeVisible();
    await expect(page.getByRole('button',{name:'Log out'})).toBeVisible();
    await expect(page.getByText('Broker Insurance WebPage')).toBeVisible();
 
});


test('Insurance Quotation Request', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.getByLabel('Email').fill('amirtha@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('link',{name:'Request Quotation'}).click();
    await expect(page.getByText('Request a quotation')).toBeVisible();

    await page.getByLabel('Breakdowncover').selectOption({label:'At home'});
    await page.locator('input[value="Yes"]').check();
    await page.getByPlaceholder('Enter incidents').fill('1');
    await page.getByPlaceholder('Enter vehicle registration').fill('TN01AB1234');
    await page.getByPlaceholder('Enter vehicle mileage').fill('12000');
    await page.getByPlaceholder('Enter vehicle value').fill('500000');
    await page.locator('select[name="parkinglocation"]').selectOption({label:'Private Property'});
    await page.locator('select[name="year"]').selectOption({label:'2025'});
    await page.locator('select[name="month"]').selectOption({label:'October'});
    await page.locator('select[name="date"]').selectOption({label:'15'});
    await page.locator('input[value="Calculate Premium"]').click();

    await expect(page.getByText('No discount')).toBeVisible();
    await expect(page.getByTitle('This is the Premium including the discount you have')).toBeVisible();

    await page.locator('input[type="reset"]').click();

});


test.only('Insurance Save and value verification',  async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.getByLabel('Email').fill('amirtha@gmail.com');
    await page.getByLabel('Password').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('link',{name:'Request Quotation'}).click();
    await expect(page.getByText('Request a quotation')).toBeVisible();

    await page.getByLabel('Breakdowncover').selectOption({label:'At home'});
    await page.locator('input[value="Yes"]').check();
    await page.getByPlaceholder('Enter incidents').fill('1');
    await page.getByPlaceholder('Enter vehicle registration').fill('TN01AB1234');
    await page.getByPlaceholder('Enter vehicle mileage').fill('12000');
    await page.getByPlaceholder('Enter vehicle value').fill('500000');
    await page.locator('select[name="parkinglocation"]').selectOption({label:'Private Property'});
    await page.locator('select[name="year"]').selectOption({label:'2025'});
    await page.locator('select[name="month"]').selectOption({label:'October'});
    await page.locator('select[name="date"]').selectOption({label:'15'});
    await page.locator('input[value="Calculate Premium"]').click();

    await expect(page.getByText('No discount')).toBeVisible();
    await expect(page.getByTitle('This is the Premium including the discount you have')).toBeVisible();
    await page.locator('input[value="Save Quotation"]').click();
    const idText = await page.getByText(/Your identification number is :\s*\d+/).textContent();
    console.log(idText);
    await expect(page.getByText('Please write it down for later retrieve')).toBeVisible();
});