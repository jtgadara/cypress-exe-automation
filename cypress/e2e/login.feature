Feature: Login functionality

  Background: 
    Given user visit magento website

  Scenario: Verify Login functionality with valid details
    When user click on signin in homePage
    And user enters valid credential
    And user clicks on Sign In after entering credentials
    Then user verify successful login

  Scenario: Verify Login functionality with invalid details
    When user click on signin in homePage
    And user enters invalid credential
    And user clicks on Sign In after entering credentials
    Then user verify error message for invalid login credential
