import { test, expect } from '@playwright/test';

test('OrangeHRM Login Page', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    //Attribute
    await expect(page.locator('[alt="company-branding"]')).toBeVisible();

    //Tag + Class
    await expect(page.locator('h5.oxd-text.oxd-text--h5.orangehrm-login-title')).toHaveText('Login');

    await expect(page.locator('[name="username"]')).toBeVisible();

    await expect(page.locator('[name="password"]')).toBeVisible();

    await expect(page.locator('[type="submit"]')).toBeVisible();

    //Class
    await expect(page.locator('.orangehrm-login-forgot-header')).toBeVisible();

    await expect(page.locator('.orangehrm-login-footer')).toBeVisible();

    await page.locator('[name="username"]').fill('Admin');

    await page.locator('[name="password"]').fill('admin123');

    //Check entered Username
    await expect(page.locator('[name="username"]')).toHaveValue('Admin');

    await expect(page.locator('[name="password"]')).toHaveValue('admin123');

    //footer links

    await expect(page.locator('a[href*="linkedin"]')).toBeVisible();

    await expect(page.locator('a[href*="facebook"]')).toBeVisible();

    await expect(page.locator('a[href*="twitter"]')).toBeVisible();    

    await expect(page.locator('a[href*="youtube"]')).toBeVisible();

    await page.locator('[type="submit"]').click();
});


