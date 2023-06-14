const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

Given('I am on the Sauce Demo login page', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.saucedemo.com/');
});

When('I enter my username and password', async function () {
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
});

When('I click the login button', async function () {
  await driver.findElement(By.css('.btn_action')).click();
});

AfterAll(async function () {
  if (driver) {
    await driver.quit();
  }
});
