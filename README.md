# Game Scores API

This project is a RESTful API for a mobile game that allows players to submit their high scores and view the leaderboard.

## Installation

Make sure you have Node.js and npm installed on your computer. Then, follow these steps to run the project:

1. Clone this repository to your local computer.
2. Open a terminal and navigate to the project directory.
3. Run the command `yarn install` to install all dependencies.
4. Create a `.env` file based on the `.env.example` template and configure environment variables according to your environment.
5. Run the command `yarn start` to start the local server.

## How to Use

Once the server is running, you can use the API by using an API testing tool like Postman or making HTTP requests from your client applications.

Here are some available endpoints:

- `POST /scores`: Submit a new high score for a player.
- `GET /leaderboard`: Get the top 10 scores, ranked by score.

Make sure to check the available API documentation in this project for more information on using each endpoint.

## Contribution

If you would like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch for the feature or fix you want to make (`git checkout -b feature/newFeature`).
3. Make the necessary changes.
4. Commit your changes (`git commit -am 'Adding a new feature'`).
5. Push to your branch (`git push origin feature/newFeature`).
6. Create a pull request.
