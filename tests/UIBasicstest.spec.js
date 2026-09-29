const { test, expect } = require('@playwright/test');

test('Browser Context playwright test', async ({ browser }) => {
//opens a browser and creates a new page
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Invalid login
    await userName.fill('Nav');
    await password.fill('learning');
    await signIn.click();

    await expect(page.locator("[style*='block']"))
        .toContainText('Incorrect');

    // Valid login
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signIn.click();

    // Verify successful login
    await expect(page).toHaveURL(/shop/);
    console.log(await cardTitles.nth(1).textContent());
    console.log(await cardTitles.first().textContent());
    const allTitles=await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Page playwright test',async ({page})=>
{
    await page.goto('https://google.com');
    //get title
    console.log(await page.title());
    await expect (page).toHaveTitle('Google');
});

test('UI Controls', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const dropdown=page.locator('select.form-control');
    const documentLink=page.locator("[href*='documents-request']");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText")});

test.only('Child windows hadl',async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink=page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([context.waitForEvent('page'),
    //waits for pages to open in the background and if any new page is opended it will be returned
    documentLink.click()])
    //await is not used , then it moves to pending state and the next command that is'documentLink.click()])'
//will be executed  and the loop keeps iterating until a fulfilled promise is returned which is a newPage
    
    const text = await newPage.locator(".red").textContent();
    const arrayText=text.split("@")
    const domain=arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    //await page.pause();
    console.log(await page.locator("#username").inputValue());
});

