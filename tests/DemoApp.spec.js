const { test, expect } = require('@playwright/test');

test.only('Browser Context playwright test', async ({ page }) => {

    const productName='ZARA COAT 3';
    const email="anshika@gmail.com";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();   
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();//wait for atleast to find one card and get loaded
    const titles= await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count=await products.count();
    for (let i=0;i<count;++i)
    {
    if (await products.nth(i).locator("b").textContent()===productName)//finds the product zara coat by iterating through the loop and after finding it , item will be added to the cart
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator('div li').first().waitFor();//waits until the list is loaded
    await page.locator("h3:has-text('ZARA COAT 3')").isVisible();//finds locator based upopn text with a tag 
    //element will only be visible if the item is added in the cart
    //expect(bool).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator("[placeholder*='Country']").pressSequentially('ind');
    const dropdown=page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount=await dropdown.locator('button').count();
    for(let i =0;i< optionsCount;++i)
    {
        const text=await dropdown.locator("button").nth(i).textContent();
        if(text===" India"){
            await dropdown.locator("button").nth(i).click();
            break;

        }
    }
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);   
    await page.locator(".action__submit").click(); 
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const order=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(order);
    await page.pause();

    
});


