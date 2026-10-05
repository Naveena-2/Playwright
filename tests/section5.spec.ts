import {test, expect} from '@playwright/test';

test('Section 5 Practice', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const Username = page.locator('#username');
    const SignIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator('[href*="documents-request"]');
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    
    console.log(await (page.locator('.radiotextsty').last()).isChecked());
    expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
    //await page.pause();
    
});

test('Child Window Handling', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator('[href*="documents-request"]');
    
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        documentLink.click()
    ])
    const  text = await newPage.locator(".red").textContent()?? "";
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').type(domain);
    //await page.pause();


});
