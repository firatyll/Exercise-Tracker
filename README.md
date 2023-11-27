# Exercise Tracker API

This project implements a simple Exercise Tracker API that allows users to create accounts, log exercises, and retrieve exercise logs.

## API Endpoints

### 1. Create a new user

**Endpoint:** `POST /api/users`

**Request:**
```plaintext
POST /api/users
Form Data:
- username: [string]
```
**Response:**
```json
{
  "username": "[string]",
  "_id": "[user_id]"
}
```
### 2. Get a list of all users
**Endpoint:** `GET /api/users`

**Response:**
```json
[
  {
    "username": "[string]",
    "_id": "[user_id]"
  },
  // ... other users
]
```
### 3. Log an exercise for a user
**Endpoint:** `POST /api/users/:_id/exercises`
**Request:**
```plaintext
POST /api/users/:_id/exercises
Form Data:
- description: [string]
- duration: [number]
- date: [optional, yyyy-mm-dd]
```
**Response:**
```json
{
  "_id": "[user_id]",
  "username": "[string]",
  "description": "[string]",
  "duration": "[number]",
  "date": "[yyyy-mm-dd]"
}
```
### 4. Get the full exercise log for a user
**Endpoint:** `GET /api/users/:_id/logs`

**OOptional Query Parameters:**

- from: [yyyy-mm-dd]
- to: [yyyy-mm-dd]
- limit: [integer]

**Response:**
```json
{
  "_id": "[user_id]",
  "username": "[string]",
  "count": "[number]",
  "log": [
    {
      "description": "[string]",
      "duration": "[number]",
      "date": "[yyyy-mm-dd]"
    },
    // ... other exercises
  ]
}
```
## Installation

1. Download the project files to your computer.
2. Navigate to the project directory in the terminal or command prompt.
3. Install the necessary dependencies using the `npm install` command.
4. Start the application with the `npm start` command.
5. Use the API by visiting `http://localhost:3000` in your browser.

## Dependencies

- [Express.js](https://expressjs.com/): A lightweight web framework used for building web applications and APIs.


