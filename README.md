# Advanced To-Do App

This is an advanced to-do application built with React, Redux, Material-UI, and integrated with localStorage for user authentication. The app allows users to log in, manage tasks, and log out. The tasks are displayed with input fields for adding and listing tasks.

## Features

- **User Authentication**: Users can log in with a username and password (hardcoded for simplicity).
- **Task Management**: Users can add, list, and manage tasks.
- **Logout**: Users can log out, and the authentication state will be cleared.
- **Responsive UI**: The application is fully responsive, built using Material-UI and styled with a mobile-first approach.
- **LocalStorage Integration**: Authentication state and user info are stored in localStorage for persistence across page reloads.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management, including authentication and task state.
- **Material-UI**: For UI components like buttons, text fields, and more.
- **localStorage**: To persist authentication state across sessions.

## Installation

Follow these steps to get the application up and running locally:

1. Clone the repository:

 
   git clone https://github.com/your-username/advanced-todo-app.git
   cd advanced-todo-app

npm install

npm start

Usage
Login: Enter the username and password (hardcoded as user and password) to log in.

Task Management: Once logged in, you can add and manage tasks. The tasks will be listed below the input field.

Logout: Click the logout button to log out and return to the login screen.

Project Structure
src/
├── components/
│   ├── TaskInput.js
│   └── TaskList.js
├── pages/
│   ├── Login.js
│   └── Logout.js
├── redux/
│   └── reducers/
│       ├── authSlice.js
│       ├── weatherSlice.js
│       └── taskSlice.js  <-- Added taskSlice.js
│   └── store.js  <-- No change here, just adding taskSlice to it
├── App.js
└── index.js



Contribution
Feel free to fork this project, create an issue, or submit a pull request if you'd like to contribute improvements or bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.




