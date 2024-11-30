class LoginPage {

    locators = {
        signInLink: "//a[@href='#contentarea']//parent::div//a[normalize-space()='Sign In']",
        emailField: '//*[@class="login-container"]//*[@id="email"]',
        passwordField: '//*[@class="login-container"]//*[@id="pass"]',
        signInButton: '//*[@class="login-container"]//*[@id="send2"]',
        incorrectSignIn_error: "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)'][contains(normalize-space(),'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')]",
    };

    clickOnSignInInHomePage() {
        cy.xpath(this.locators.signInLink).click();
    }

    loginWithValidCredential() {
        cy.fixture('usertestdata').then((data) => {
            const { email, password } = data.validUser;
            cy.xpath(this.locators.emailField).type(email);
            cy.xpath(this.locators.passwordField).type(password);
        });
    }

    clickOnSignInAfterEnteringCredentials() {
        cy.xpath(this.locators.signInButton).click();
    }

    verifyLogin() {
        cy.xpath(this.locators.signInLink).should('not.exist');
    }
    loginWithInvalidCredential() {
        cy.fixture('usertestdata').then((data) => {
            const { email, password } = data.invalidUser;
            cy.xpath(this.locators.emailField).type(email);
            cy.xpath(this.locators.passwordField).type(password);
        });
    }
    verifyErrorMessageInLogin() {
        cy.xpath(this.locators.verifyErrorMessageInLogin).should('not.exist');
    }
}

export default LoginPage;
