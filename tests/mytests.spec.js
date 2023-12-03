const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.beforeEach('Login on site', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();
  });

test('Login with valid creds', async ({page}) => {

    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

    const isVisibleTitle = await page.isVisible('.title');
    expect(isVisibleTitle).toBe(true);

    const isVisibleIcon = await page.isVisible('.shopping_cart_container');
    expect(isVisibleTitle).toBe(true);

    const numberOfProducts = (await page.$$('.inventory_item')).length
    expect(numberOfProducts).toBeGreaterThan(1)
});

test('Add product to the cart', async ({page}) => {

    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    const addedItem = page.locator('#item_4_title_link')

    const cartItems = page.locator('.shopping_cart_badge');
    expect(cartItems).toHaveText('1');

    await page.locator('.shopping_cart_link').click();
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');

    expect(page.locator('#item_4_title_link')).toStrictEqual(addedItem);

    await page.locator('#remove-sauce-labs-backpack').click();
    expect(await page.locator('.shopping_cart_badge').count()).toBe(0);
    

});
