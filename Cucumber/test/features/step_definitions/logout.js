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

When('I click on the logout button', async function () {
  await driver.findElement(By.css('.bm-burger-button')).click();
  await driver.findElement(By.id('logout_sidebar_link')).click();
});

Then('I should be logged out successfully', async function () {
  const loginButton = await driver.findElement(By.css('.btn_action'));
  expect(await loginButton.isDisplayed()).to.be.true;
});

AfterAll(async function () {
  await driver.quit();
});
