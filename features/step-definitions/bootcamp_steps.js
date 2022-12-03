const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("open newegg home page", async () => {
    await browser.url(`https://www.newegg.com`);
});

When("enter {string} in a search bar", async (searchedPhrase) => {
    const searchInput = await $(`input[type=search]`);
    await searchInput.setValue(searchedPhrase);
});

When("click on a search icon", async () => {
    const searchButton = await $(`//button[contains(., "Search")]`);
    await searchButton.click()
});

Then("searching resluts for {string} are displayed", async (searchedPhrase) => {
    const resultElement = await $(`div.list-wrap > div:nth-child(3) > div:nth-child(1)`);
    await expect(resultElement).toBeDisplayed();
}); 

When("click on Today's Best Deals tab", async () => {
    const todaysBestDealsTab = await $(`#trendingBanner_720202`);
    await todaysBestDealsTab.click()
});

When("click on Internet shop logo", async () => {
    const shopLogo = await $(`a.header2021-logo-img`);
    await shopLogo.click()
});

Then("home page is displayed", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`);
});