Feature: Test signup flow

  Background:
    Given user visit magento website

Scenario: User Signup successfully
    When user click on create account 
    And user enters all valid details and click on create an Account
    Then user is able to see Thank you message
    And user logout from application

Scenario: Verify User getting requried field error
    When user click on create account 
    And user click on create an Account in form
    Then user is able to see required field error for required field
    

Scenario: Verify User getting invalid email address error
    When user click on create account 
    And user enters details with invalid email address
    And user click on create an Account in form
    Then user is able to see invalid email address error

Scenario: Verify when user does not enter matching password
    When user click on create account 
    And user enters details with not matching password
    And user click on create an Account in form
    Then user is able to see password not matching error

Scenario: Verify when user enter password less than minimum length
    When user click on create account 
    And user enters password less than minimum length
    Then user is able to see minimum length error in password

Scenario: Verify when user enter only classes password (uppercase and lowercase)
    When user click on create account 
    And user enters password without digits
    Then user is able to see error that password should have 3 classes
   
Scenario: Verify when user enters special character in First name and lastname
    When user click on create account 
    And user enters invalid firstnamd and lastname
    And user click on create an Account in form
    Then user is able to see invalid firstname and lastname error
   
Scenario: Verify signup with already registered email
    When user click on create account 
    And user enters already registered email and other valid details
    And user click on create an Account in form
    Then user is able to see already registered email error

  Scenario: Verify signup with leading and trailing spaces in password
    When user click on create account 
    And user enters password with leading and trailing space and other valid details
    And user click on create an Account in form
    Then user is able to see error related to space in password