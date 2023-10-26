# FullStackRep1# Express.js PostgreSQL API

This is a basic Express.js application that serves as an API for interacting with a PostgreSQL database. It provides endpoints for fetching data, deleting records, and updating records in the "test" table. The application also serves static files from a "public" directory.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- PostgreSQL
- Necessary Node.js packages (Express, pg, dotenv)

## Setup

1. Clone this repository or create a new Node.js project.
2. Install the required dependencies by running `npm install`.
3. Create a PostgreSQL database (e.g., "rep1") and adjust the database configuration in the code as needed.
4. Create a `.env` file and set your environment variables (e.g., database connection details).
5. Run the application using `npm start`.

## Usage

- The application listens on port 3002 by default. You can change the port by modifying the `port` variable in the code.
- The API provides the following routes:

  - `GET /api`: Fetches data from the "test" table.
  - `DELETE /api/test/:id`: Deletes a record from the "test" table based on the provided ID.
  - `PATCH /api/test/:id`: Updates a record in the "test" table based on the provided ID and request body.

Make sure to adapt the code and database configuration to your specific requirements.

## Environment Variables

You need to set environment variables in a `.env` file or in your hosting environment to configure the database connection. Sample `.env`
