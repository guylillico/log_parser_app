# Log Parser App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Basic responsive UI
- File upload field, restricted to `.log` file types
- Metrics displayed in a grid
  - Number of unique IP addresses
  - Top 3 most visited URLs
  - Top 3 most active IP addresses
- Additional tables for displaying IP addresses & URLs sorted by no. of requests
- Unit tests included
- Sample log files provided in the `/data` directory

## Instructions for installing & running the application

Requirements:

1. [Node version 16](https://nodejs.org/en/download/) or higher
2. yarn >= 1.22 installed (`npm install -g yarn`)

Clone this repository, cd to the project directory and run `yarn` to install dependencies

Once in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

## Notes

- Assumes log file entries are in a valid format
- IP address regex matching may need some improvement
- The requirement to show 'Top 3' metrics is a little ambiguous for edge cases where the number of distinct count values are <= 3, such as in the test data log file
- Same base URL assumed for all response paths/URLs
- Hash map solution used to reference the distinct IPs and URLs along with their count values
