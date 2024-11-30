import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../pom/signup_page";
const signupPage = new SignupPage();
//const date = `test${Date.now()}@test.com`;


Given("user visit magento website", () => {
  cy.visit("/");
});

When("user click on create account", () => {
  signupPage.clickOnCreateAnAccount()
});

When("user enters all valid details and click on create an Account", () => {

  signupPage.fillSignupFormWithValidDetails();
  signupPage.submitForm();
});

When("user click on create an Account in form", () => {
  signupPage.submitForm();
});

Then("user is able to see Thank you message", () => {
  signupPage.verifySuccess();
});

Then("user logout from application", () => {
  signupPage.logout()
});

Then("user is able to see required field error for required field", () => {
  signupPage.verifyErrorMessage()
});

When("user enters details with invalid email address", () => {
  signupPage.fillSignupFormWithInvalidEmail()
});

When("user is able to see invalid email address error", () => {
  signupPage.verifyInvaliEmaildAddressError()
});

When("user enters details with not matching password", () => {
  signupPage.fillSignupFormWithNotMatchingPassword()
});

When("user is able to see password not matching error", () => {
  signupPage.verifyPasswordNotMatchError()
});

When("user enters password less than minimum length", () => {
  signupPage.enterPasswordLessThanMinimumLength()
});
Then("user is able to see minimum length error in password", () => {
  signupPage.verifyMinimumPasswordLengthError()
});

When("user enters password without digits", () => {
  signupPage.enterPasswordWithoutDigit()
});
Then("user is able to see error that password should have 3 classes", () => {
  signupPage.verifyPasswordErrorForHaving3classes()
});

When("user enters invalid firstnamd and lastname", () => {
  signupPage.fillSignupFormWithInvalidFirstAndLastName()
})

Then("user is able to see invalid firstname and lastname error", () => {
  signupPage.verifyInvalidFirstNameAndLastNameError()
})

When("user enters already registered email and other valid details", () => {
  signupPage.fillSignupWithAlreadyRegisteredEmail()
})

Then("user is able to see already registered email error", () => {
  signupPage.verifyAlreadyRegisteredEmailError()
})

When("user enters password with leading and trailing space and other valid details", () => {
  signupPage.fillSignupWithLeadingAndtTrailingSpace()
})

Then("user is able to see error related to space in password", () => {
  signupPage.verifyErrorInPasswordAboutSpace()
})