# seez-demo
This is a demo project for Seez by Albert Ahimbisibwe

## How to run the project

- Clone the repo to your local either using 
ssh 
`git clone git@github.com:AKAlbert/seez-demo.git `
 or 
 
 Https
 `https://github.com/AKAlbert/seez-demo.git`

- run npm install to install the required dependencies

- run the command npm run test to start the e2e testing

## Page Object Model using Cypress
Page Object Model, also known as POM, is a design pattern where we create an object repository for storing all web elements.In Page Object Model, consider each web page of an application as a class file. Each class file will contain only corresponding web page elements. Using these elements, we can perform operations on the application under test.

#### Why Page Object model?
It is useful in reducing code duplication and improves test case maintenance.
Helps with reusing code
It eases readability and reliability of scripts:

The folder structure is as follows-:
- **Actions:** This is where all the page actions and functions for performing the different actions are stored. Here I also included another file that will handle the different selectors for all the page elements specifically for that page. 
- **Configs:** This is where all the configurations are saved and this would also cater for different users' configurations in the future. 
- **e2e:** This is the folder where all the test spec files are stored. This could also be broken down into more folders of the different specs of the different features. 
- **fixtures:** This is where all the fixture files will bve stored for the diffrent sets of test data to be used or generated.
- **support:** This is for extra configs to be used


## Tools used.
- Visual Studio code

## Dependencies used in the framework
- Cypress
- node
- npm

## Programming language used
- typescript


## To test Project locally,
- Clone repository
- Have node and npm installed.
- Install the node modules by going to the terminal and run command npm install -g node-modules
- install cypress by going to the terminal and run command npm install cypress --save-dev
- To run tests in one spec file with the Graphical User Interface open, navigate to the terminal and run npm run test. 
- To run test in headless mode (without opening browser on GUI), navigate to the terminal and run npm run headless.