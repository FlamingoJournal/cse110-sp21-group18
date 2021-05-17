## CI Pipeline: Phase 1 (5/17/2021)

For Phase 1, our pipeline currently uses ESLint and Prettier for our linters, as well as JSDoc for our
documentation. Because we are following the Airbnb style guide for Javascript, we have configured ESLint
to make checks in line with the style guide. The linters are both currently installed into the project 
and also have actions that check to see if the code pushed is up to standard with the style guide and 
rules we set up for linting. After linting checks are done, we have chosen to install JSDoc for documentation.
When pushed to main, we setup an action that will update the documentation onto Github Pages for easy access
for all team members.

For our in progress components, we currently have Travis CI being configured and tested to fit our project.
We will be using Travis CI for building and testing our code. In the future we are considering using Travis CI
for deployment.

For the future, we plan on looking into components to detect if we are missing important tests, such as 
Coverall, but are still considering our options. We are also looking into how we want to test our code at
this stage. As of right now, we will be using Travis CI for unit testing. In addition, we are also looking 
into either using Codacy or CodeClimate for code review, which would allow for better automation.

Below we have our current pipeline for Phase 1, which includes plans for Travis CI and Unit Testing.


![Phase 1 Pipeline](phase1.drawio.png)
