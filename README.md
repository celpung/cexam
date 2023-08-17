# cexam

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

Welcome to the cexam repository! This project is designed to streamline the process of conducting and managing exams. It features a robust backend built with Go (Golang) and a dynamic frontend powered by Next.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The cexam application is a comprehensive solution for creating, organizing, and conducting exams. It provides an intuitive and user-friendly interface for both administrators and participants, making the exam-taking experience efficient and enjoyable.

## Features

- **User-Friendly Interface**: The frontend, developed using Next.js, ensures a smooth and engaging experience for all users, from administrators creating exams to participants taking them.

- **Efficient Backend**: Built with Go (Golang), the backend ensures high performance, security, and scalability, making it a reliable choice for handling exam-related operations.

- **Exam Creation**: Administrators can easily create new exams, define questions, set time limits, and establish grading criteria.

- **Real-Time Monitoring**: Real-time monitoring of exam progress and participant activity, providing administrators with insights into exam dynamics.

- **Participant Profiles**: Participants can create and access their profiles, review their exam history, and receive performance analytics.

- **Authentication and Security**: Secure user authentication and authorization mechanisms are implemented to safeguard sensitive exam data.

## Technologies

- Backend: Go (Golang)
- Frontend: Next.js

## Getting Started

To get started with cexam, follow these steps:

1. Clone this repository: `git clone https://github.com/celpung/cexam.git`
2. Install dependencies for the frontend: `cd web && npm install`
3. Install dependencies for the backend: `cd ../backend && go get -d ./...`
4. Run the backend server: `go run main.go` (or the appropriate command for your backend)
5. Run the frontend development server: `cd web && npm run dev`
6. Open your web browser and visit: `http://localhost:3000`

## Contributing

Contributions are welcome and encouraged! To contribute to cexam, follow these steps:

1. Fork this repository
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to your forked repository: `git push origin feature-new-feature`
5. Create a pull request detailing your changes

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.

---

Feel free to explore, contribute, and use cexam to simplify the exam management process. If you encounter any issues or have suggestions, please open an issue or submit a pull request. Happy examining!
