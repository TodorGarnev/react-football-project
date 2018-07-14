# Football Forum
A simple football forum app build with React and Bootstrap for styling.


## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```

3. To run the app:

  ```shell
  npm start
  ```

4. Browse to [http://localhost:3000](http://localhost:3000) to see the app.

# Basic functionality

## Navigation
1. At the top is the navigation bar. It contains all the pages of the app. They vary based on the user's role.
2. Here is the log out  button which redirects to the sign up/login page where you can make another registration.
3. Just before the log out button is placed your username.

## Sign up/Login page
1. Here you can sign up if you don't have an account yet or if you have you can login.

## Home page
1. If you are a regular user you can write a comment here about the suggested football game. Also you can see the comments of the other users.
2. If you are an admin you have more privileges here. You can write a comment, you can delete each comment or all at once if they are not written in a good way, also you can change the suggested football game at the top or just change the current score.

## Profile page
1. All users, regardless of their role, have access here. You can find your username and email which you've used for sign in the app.

## Dashboard page
1. Only the admins have access to the page. If you are logged in as a regular user you will not see this page. Here is displayed each user who has been registered to the app. If you are an admin you can change username and email of all other users. Also you can give an admin privileges and delete each user.

## Rules page
1. This is a static  page with no dynamic content. It contains the forum's rules which each user should respect.
