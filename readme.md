![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | TS Basic Jest

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Implement basic unit tests by using jest
- Use typescript for your unit tests

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified into the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create Pull Request so your TAs can check up your work.

Sure! Below are the instructions for the challenge to develop the tests and the implementation of the user authentication system using Jest and TypeScript:

Challenge: User Authentication System

In this challenge, you'll create a user authentication system in TypeScript and write Jest tests to ensure its correctness.

## Iteration 1: Implementing the AuthService

1. Create a new TypeScript file named "AuthService.ts".

2. Define a class called `AuthService` with the following methods:
   - `register(username: string, password: string): Promise<boolean>`: This method should register a new user with the provided username and password. It should return a Promise that resolves to true if the registration is successful, or false if the username is already taken.
   - `login(username: string, password: string): Promise<boolean>`: This method should log in a user with the provided username and password. It should return a Promise that resolves to true if the login is successful, or false if the credentials are invalid.

3. To keep things simple, you can store the registered users in a private property (e.g., `registeredUsers`) within the `AuthService` class.

## Iteration 2: Writing Jest Test Cases

1. Create a new TypeScript file named "authService.test.ts".

2. Import the `AuthService` class into the test file.

3. Write Jest test cases to verify the correctness of the `AuthService` methods.

4. Test the following scenarios:
   - Successful registration and login with valid credentials.
   - Unsuccessful registration due to an already taken username.
   - Unsuccessful login due to incorrect credentials.

5. Test both positive and negative cases thoroughly, including edge cases.


## Iteration 3: Running the Tests

1. Run the Jest test suite and ensure that all test cases pass.

2. If any test cases fail, update your implementation in "AuthService.ts" to fix the issues and rerun the tests.

Remember to follow best practices while implementing the authentication system and writing tests. Good luck, and have fun with the challenge!

Happy coding! 💙
