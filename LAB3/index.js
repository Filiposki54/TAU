const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const driver = new webdriver.Builder().forBrowser('chrome').build();

// Test 1: Logowanie użytkownika poprawnymi danymi
async function testValidLogin() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  const url = await driver.getCurrentUrl();
  if (url === 'https://www.saucedemo.com/inventory.html') {
    console.log('Test 1: Valid login successful');
  } else {
    console.log('Test 1: Valid login failed');
  }
}

// Test 2: Logowanie użytkownika niepoprawnym hasłem
async function testInvalidPassword() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('password')).sendKeys('invalid_password');
  await driver.findElement(By.id('login-button')).click();
  const errorMessage = await driver
    .findElement(By.css('.error-message-container.error'))
    .getText();
  if (
    errorMessage ===
    'Epic sadface: Username and password do not match any user in this service'
  ) {
    console.log('Test 2: Invalid password login successful');
  } else {
    console.log('Test 2: Invalid password login failed');
  }
}

// Test 3: Logowanie użytkownika niepoprawnym loginem
async function testInvalidUsername() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('invalid_username');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  const errorMessage = await driver
    .findElement(By.css('.error-message-container.error'))
    .getText();
  if (
    errorMessage ===
    'Epic sadface: Username and password do not match any user in this service'
  ) {
    console.log('Test 3: Invalid username login successful');
  } else {
    console.log('Test 3: Invalid username login failed');
  }
}

// Test 4: Logowanie użytkownika bez wpisania danych
async function testEmptyFields() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('login-button')).click();
  const errorMessage = await driver
    .findElement(By.css('.error-message-container.error'))
    .getText();
  if (
    errorMessage === 'Epic sadface: Username is required' ||
    errorMessage === 'Epic sadface: Password is required'
  ) {
    console.log('Test 4: Empty fields login successful');
  } else {
    console.log('Test 4: Empty fields login failed');
  }
}

// Test 5: Logowanie użytkownika bez wpisania hasła
async function testEmptyPassword() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('login-button')).click();
  const errorMessage = await driver
    .findElement(By.css('.error-message-container.error'))
    .getText();
  if (errorMessage === 'Epic sadface: Password is required') {
    console.log('Test 5: Empty password login successful');
  } else {
    console.log('Test 5: Empty passwordlogin failed');
  }
}

// Test 6: Logowanie użytkownika bez wpisania loginu
async function testEmptyUsername() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  const errorMessage = await driver
    .findElement(By.css('.error-message-container.error'))
    .getText();
  if (errorMessage === 'Epic sadface: Username is required') {
    console.log('Test 6: Empty username login successful');
  } else {
    console.log('Test 6: Empty username login failed');
  }
}

// Test 7: Sprawdzenie, czy przycisk login jest aktywny po wpisaniu danych
async function testLoginButton() {
  await driver.get('https://www.saucedemo.com/');
  const loginButton = await driver.findElement(By.id('login-button'));
  if (await loginButton.isEnabled()) {
    console.log('Test 7: Login button is enabled');
  } else {
    console.log('Test 7: Login button is disabled');
  }
}

// Test 8: Sprawdzenie, czy po zalogowaniu użytkownik widzi poprawną nazwę użytkownika
async function testValidUsernameDisplayed() {
  await driver.get('https://www.saucedemo.com/');
  await driver.findElement(By.id('user-name')).sendKeys('standard_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  const username = await driver
    .findElement(By.css('.header_secondary_container .header_username'))
    .getText();
  if (username === 'Standard_User') {
    console.log('Test 8: Valid username displayed after login');
  } else {
    console.log('Test 8: Valid username not displayed after login');
  }
}

// Uruchomienie wszystkich testów
async function runTests() {
  await testValidLogin();
  await testInvalidPassword();
  await testInvalidUsername();
  await testEmptyFields();
  await testEmptyPassword();
  await testEmptyUsername();
  await testLoginButton();
  await testValidUsernameDisplayed();
  driver.quit();
}

runTests();
