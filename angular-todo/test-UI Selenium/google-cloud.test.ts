// Import necessary modules


//url ersetzen


import { browser, by, element, ExpectedConditions } from 'protractor';

describe('Google Cloud Angular App', () => {
  beforeAll(async () => {
    // Set up Selenium WebDriver
    await browser.waitForAngularEnabled(false); // If not an Angular app
    await browser.driver.manage().window().maximize(); // Optional
  });

  it('should navigate to the Google Cloud website and perform a search', async () => {
    // Navigate to the website
    await browser.get('https://your-angular-app-url'); // Replace with your app's URL

    // Perform actions on the webpage
    const searchInput = element(by.css('input[name="q"]'));
    await searchInput.sendKeys('Selenium testing on Google Cloud');

    const searchButton = element(by.css('input[name="btnK"]'));
    await searchButton.click();

    // Wait for search results
    const searchResults = element.all(by.css('div.g'));
    await browser.wait(ExpectedConditions.presenceOf(searchResults.first()), 10000);

    // Perform assertions
    expect(await searchResults.count()).toBeGreaterThan(0);
  });

  afterAll(async () => {
    // Clean up
    await browser.quit();
  });
});
