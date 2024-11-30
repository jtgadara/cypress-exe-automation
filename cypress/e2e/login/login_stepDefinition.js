import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pom/login_page";
const loginPage = new LoginPage();
//const date = `test${Date.now()}@test.com`;


Given("user visit magento website", () => {
  cy.visit("/");
});

When("user click on signin in homePage", () => {
  loginPage.clickOnSignInInHomePage();
});
When("user enters valid credential", () => {
  loginPage.loginWithValidCredential();
});
When("user clicks on Sign In after entering credentials", () => {
  loginPage.clickOnSignInAfterEnteringCredentials();
});
Then("user verify successful login", () => {
  loginPage.verifyLogin();
});

When("user enters invalid credential", () => {
  loginPage.loginWithInvalidCredential();
})
Then("user verify error message for invalid login credential", () => {
  loginPage.verifyErrorMessageInLogin();
})