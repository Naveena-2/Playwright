const {test,expect}=require("@playwright/test");
test('Locating Elements',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill('visual_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');
});