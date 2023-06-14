const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

let driver;

Given('I am logged in to the Sauce Demo website', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.css('.btn_action')).click();
});

When('I navigate to the cart page', async function () {
  await driver.get('https://www.saucedemo.com/cart.html');
});

When('I remove an item from the cart', async function () {
  await driver.findElement(By.css('.cart_item')).click();
  await driver.findElement(By.css('.cart_button')).click();
});

Then('the item should be removed successfully', async function () {
  const cartCount = await driver.findElement(By.css('.shopping_cart_badge')).getText();
  expect(cartCount).to.equal('0');
});

AfterAll(async function () {
  await driver.quit();
});
