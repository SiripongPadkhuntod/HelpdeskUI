
# Helpdesk


Helpdesk is a support ticket management application built using React, Vite, and Firebase. The application allows users to manage support tickets and provides various features for handling customer support tasks.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/download/) (v14.x or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/)

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id 
```
Replace the values with your actual Firebase configuration.

## Installation

1.  Clone the repository:
  
    `git clone https://github.com/SiripongPadkhuntod/Helpdesk.git`
    
    `cd Helpdesk` 
    
3.  Install dependencies:
    
    `npm install` or
    ` yarn install`
    

## Usage

1.  Start the development server:
    
    ```npm run dev ``` or
	  ```  yarn dev ```
    
2.  Open your browser and navigate to `http://localhost:5173` to see the application in action.
    

## Project Structure
```
Helpdesk/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   └── ticket/
│   ├── Pages/
│   ├── App.jsx
│   ├── Firebase.js
│   ├── main.jsx
│   └── vite.config.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
└── yarn.lock 
```

-   **src/components/**: Contains the React components.
-   **src/Pages/**: Contains the page components.
-   **src/Firebase.js**: Firebase configuration and initialization.
-   **src/main.jsx**: Entry point for the React application.
-   **vite.config.js**: Vite configuration file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

