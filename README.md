# Lab 8 - Starter

Name: Kevin Wong

Partner(s): N/A

Check Your Understanding: 

1. I would choose whenever a Github action is pushed. The reasoning for this is that this ensures that all changes and updates are immediately and automatically tested, and any issues are identified and reported as soon as possible.
The reason for this choice is to help maintain code quality and catch issues early in the development process. Running tests manually before pushing code is reliant on the discipline of the developers and can lead to situations where tests are skipped or forgotten, or issues are only discovered after code has been merged. By running tests automatically on every push to GitHub, you ensure that tests are consistently run for every change, and it also allows for problems to be detected and fixed as soon as they're introduced, rather than being found later after other code may have been built on top of the problematic code.
2. No. End-to-end testing is typically used to validate the flow of an application from start to finish, not to test individual functions. 
3. In the case of the "message" feature, you could use a unit test to test individual functions or methods related to the feature, like checking if a function correctly prepares a message for sending or validates user input. But unit tests would not be the best choice to test the feature because it involves multiple components interacting (the UI where the message is entered, the backend where the message is processed, and the recipient's UI where the message is displayed).
4. For the "max message length" feature, a unit test would be a great choice. This is because it tests a specific, isolated functionality: whether the application correctly prevents the user from typing more than 80 characters. A unit test could easily simulate user input of varying lengths and verify that the application behaves as expected. For example, the unit test could pass a string of 79, 80, and 81 characters to the function responsible for enforcing the max length and check if it correctly handles these scenarios. The simplicity and isolation of this functionality makes it a perfect for a unit test.
