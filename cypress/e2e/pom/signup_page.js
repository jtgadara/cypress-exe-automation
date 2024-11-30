class SignupPage {

  locators = {
    createAccountLink: "//a[@href='#contentarea']//parent::div//a[text()='Create an Account']",
    firstNameField: '#firstname',
    lastNameField: '#lastname',
    emailField: '#email_address',
    passwordField: '#password',
    confirmPasswordField: '#password-confirmation',
    createAccountButton: 'button[title="Create an Account"]',
    successMessage: 'Thank you for registering',
    customerMenuToggle: '(//*[@data-action="customer-menu-toggle"])[1]',
    signOutLink: "(//a[normalize-space()='Sign Out'])[1]",
    createAccountVisibleCheck: '//header//*[text()="Create an Account"]',
    //ErrorMessagesXpath
    firstName_error: "//*[@id='firstname-error'][text()='This is a required field.']",
    lastName_error: "//*[@id='lastname-error'][text()='This is a required field.']",
    emailID_error: "//*[@id='email_address-error'][text()='This is a required field.']",
    password_error: "//*[@id='password-error'][text()='This is a required field.']",
    confirmPassword_error: "//*[@id='password-confirmation-error'][text()='This is a required field.']",
    invalid_emailAddress_error: "//*[@id='email_address-error'][text()='Please enter a valid email address (Ex: johndoe@domain.com).']",
    passwordNotMatching_error: "//*[@id='password-confirmation-error'][text()='Please enter the same value again.']",
    minimumLengthPassword_error: "//*[@id='password-error'][text()='Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.']",
    passwordShouldHave3Classes_error: "//*[@id='password-error'][text()='Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.']",
    invalidFirstAndLastName_error: "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)'][normalize-space()='First Name is not valid! Last Name is not valid!']",
    emailAlreadyRegistered_error: "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)'][contains(normalize-space(),'There is already an account with this email address.')]",
    passwordWithSpace_error: "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)'][contains(normalize-space(),'begin or end with a space. Verify the password and try again.')]"
  };

  clickOnCreateAnAccount() {
    cy.xpath(this.locators.createAccountLink).click();
  }

  generateEmail() {
    const email = `test${Date.now()}@test.com`;
    Cypress.env('emailAddress', email); // Storing email globally
    return email;
  }

  fillSignupFormWithValidDetails() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, password, confirmPassword } = data.validUser;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(this.generateEmail());
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }

  fillSignupFormWithInvalidEmail() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, email, password, confirmPassword } = data.invalidEmailAddress;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(email);
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }

  fillSignupFormWithNotMatchingPassword() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, email, password, confirmPassword } = data.password_NotMatching;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(this.generateEmail());
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }

  fillSignupFormWithInvalidFirstAndLastName() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, email, password, confirmPassword } = data.invalidFirstAndLastName;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(this.generateEmail());
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }

  fillSignupWithAlreadyRegisteredEmail() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, email, password, confirmPassword } = data.validUser;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(email);
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }

  submitForm() {
    cy.get(this.locators.createAccountButton).click();
  }

  verifySuccess() {
    cy.contains(this.locators.successMessage).should('be.visible');
  }

  logout() {
    cy.xpath(this.locators.customerMenuToggle).click({ force: true });
    cy.xpath(this.locators.signOutLink).click({ force: true });
    cy.xpath(this.locators.createAccountVisibleCheck).should('be.visible');
  }

  verifyErrorMessage() {
    cy.xpath(this.locators.firstName_error).should('be.visible');
    cy.xpath(this.locators.lastName_error).should('be.visible');
    cy.xpath(this.locators.emailID_error).should('be.visible');
    cy.xpath(this.locators.password_error).should('be.visible');
    cy.xpath(this.locators.confirmPassword_error).should('be.visible');
  }

  verifyInvaliEmaildAddressError() {
    cy.xpath(this.locators.invalid_emailAddress_error).should('be.visible');
  }

  verifyPasswordNotMatchError() {
    cy.xpath(this.locators.passwordNotMatching_error).should('be.visible');
  }
  enterPasswordLessThanMinimumLength() {
    cy.fixture('usertestdata').then((data) => {
      const { password } = data.password_lessThanMinimumLength;
      cy.get(this.locators.passwordField).type(`${password}{enter}`);
    });
  }
  verifyMinimumPasswordLengthError() {
    cy.xpath(this.locators.minimumLengthPassword_error).should('be.visible');
  }
  enterPasswordWithoutDigit() {
    cy.fixture('usertestdata').then((data) => {
      const { password } = data.password_NotHavingDigits;
      cy.get(this.locators.passwordField).type(`${password}{enter}`);
    });
  }

  verifyPasswordErrorForHaving3classes() {
    cy.xpath(this.locators.passwordShouldHave3Classes_error).should('be.visible');
  }

  verifyInvalidFirstNameAndLastNameError() {
    cy.xpath(this.locators.invalidFirstAndLastName_error).should('be.visible')
  }
  verifyAlreadyRegisteredEmailError() {
    cy.xpath(this.locators.emailAlreadyRegistered_error).should('be.visible')
  }

  fillSignupWithLeadingAndtTrailingSpace() {
    cy.fixture('usertestdata').then((data) => {
      const { firstName, lastName, email, password, confirmPassword } = data.spaceInPasswords;
      cy.get(this.locators.firstNameField).type(firstName);
      cy.get(this.locators.lastNameField).type(lastName);
      cy.get(this.locators.emailField).type(email);
      cy.get(this.locators.passwordField).type(password);
      cy.get(this.locators.confirmPasswordField).type(confirmPassword);
    });
  }
  verifyErrorInPasswordAboutSpace() {
    cy.xpath(this.locators.passwordWithSpace_error).should('be.visible')
  }


}

export default SignupPage;
