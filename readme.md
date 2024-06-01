# SanFran Mobile Food Facility Permit Proxy - A coding assessment

## Overview

This project is a simple proxy server that fetches data from the San Francisco Mobile Food Facility Permit API and returns it in a more user-friendly format. The API is available at https://data.sfgov.org/resource/rqzj-sfat.json.

## Reasoning

The API at https://data.sfgov.org/resource/rqzj-sfat.json uses a single string query parameter to filter the data. This is not user-friendly, as it requires the user to know the exact query string to use. This project provides a more user-friendly interface by allowing the user to filter the data using query parameters in the URL.

## Usage

## Installation

To install the project, clone the repository and run `npm install` to install the dependencies.

- Running locally

To run the project locally, run `npm run dev`. The server will start on port 3000 by default.

## Tech Stack

- Node.js
- Express.js
- Axios
- Nodemon (for development)
