import { expect, test } from "@playwright/test";
 
test('locator', async({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await expect(page.locator('.login_logo')).toHaveText("Swag Labs"); //class
 
   
   const username = page.locator('#user-name')  //stored in variable
   await username.fill("kaviya"); //id     // using the variable here
 
 
   await (page.locator('[aria-label="Password"]').fill('secret_sauce')); //any attribute
 
   await (page.locator('.submit-button.btn_action').click());
 
   // console.log(await page.locator("[data-test='error']").textContent());  //to display error msg
 
   await username.fill("");      //wipe the previous value
   await username.fill("standard_user");    //new value
   await page.locator('.submit-button.btn_action').click();
 
   console.log(await page.locator(".inventory_item .inventory_item_name").first().textContent());
   console.log(await page.locator(".inventory_item .inventory_item_name").allTextContents());
});
 