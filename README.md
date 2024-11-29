README.md

# cypress-exe-incubyte

## Overview
This is a sample framework which is designed to test signup functionality of https://magento.softwaretestingboard.com/ demo site

## What's Inside 
- cypress/e2e/*.feature --> Feature File written in Gherkin Syntax
- cypress/e2e/[featurename]/*.js --> step definition file
- cypress/e2e/pom/.js --> page object class for pages like signup and login
- cypress/e2e/fixtures --> testdata
- cypress/e2e/reports --> report generated once user run the test through command line using `npm run test:headless`

## Usage
- Clone this repo into your local then run command `npm i` to install all dependencies.
- run `npm run test:headless` to run all tests in headless mode
- navigate to cypress/e2e/reports - it contains the report generated 

## TestCases
- refer Incubyte - Testcases.xlsx