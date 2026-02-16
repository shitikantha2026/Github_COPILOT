# React and Spring Boot Authentication Application

This project is a full-stack application that utilizes React for the frontend and Spring Boot for the backend. It provides user registration, sign-in functionality, and a dashboard that displays a welcome message upon successful authentication.

## Project Structure

```
react-springboot-auth-app
├── frontend
│   ├── package.json          # Configuration for npm
│   ├── tsconfig.json         # TypeScript configuration
│   ├── public
│   │   └── index.html        # Main HTML file
│   └── src
│       ├── index.tsx         # Entry point of the React application
│       ├── App.tsx           # Main App component with routing
│       ├── pages
│       │   ├── Register.tsx   # Registration form component
│       │   ├── SignIn.tsx     # Sign-in form component
│       │   └── Dashboard.tsx   # Dashboard component with welcome message
│       ├── components
│       │   └── AuthForm.tsx    # Authentication form component
│       ├── services
│       │   └── api.ts          # API calls to the backend
│       ├── hooks
│       │   └── useAuth.ts      # Custom hook for authentication
│       └── types
│           └── index.ts        # TypeScript interfaces
├── backend
│   ├── pom.xml                # Maven configuration
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── com
│       │   │       └── example
│       │   │           └── auth
│       │   │               ├── AuthApplication.java
│       │   │               ├── controller
│       │   │               │   └── AuthController.java
│       │   │               ├── service
│       │   │               │   └── AuthService.java
│       │   │               ├── model
│       │   │               │   └── User.java
│       │   │               ├── repository
│       │   │               │   └── UserRepository.java
│       │   │               └── config
│       │   │                   └── SecurityConfig.java
│       │   └── resources
│       │       └── application.properties
│       └── test
│           └── java
│               └── com
│                   └── example
│                       └── auth
│                           └── AuthApplicationTests.java
├── .gitignore                 # Files to ignore in version control
└── README.md                  # Project documentation
```

## Features

- User Registration: New users can create an account.
- User Sign-In: Existing users can log in to their accounts.
- Dashboard: A welcome message is displayed after successful sign-in.

## Getting Started

### Prerequisites

- Node.js and npm for the frontend
- Java and Maven for the backend

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and build the project:
   ```
   cd backend
   mvn clean install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   mvn spring-boot:run
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running, and you can access it in your web browser at `http://localhost:3000`.

## License

This project is licensed under the MIT License.