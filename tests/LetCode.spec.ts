import {test, expect} from '@playwright/test';  
test('LetCode Login', async({page}) => {
    await page.goto('https://letcode.in/edit?utm_source=chatgpt.com');
    await page.locator('#fullName').fill('Naveena');
}