# Backend API Setup with Node.js, Express, and MongoDB

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Basic Authentication](#basic-authentication)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

## Overview
This is a simple Node.js backend API setup using Express, MongoDB, and MVC architecture. It includes CRUD operations for a user resource with basic authentication and validation.

## Features
- MVC Architecture
- CRUD operations for users
- Basic Authentication
- Input validation with Joi
- MongoDB for data storage
- Environment variable configuration
- Unit tests with Jest

## Prerequisites
- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/backend-api.git
    cd backend-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and configure it as described in the [Environment Variables](#environment-variables) section.

## Running the Application

1. Ensure MongoDB is running. You can start MongoDB with the following command:
    ```bash
    mongod
    ```

2. Start the application:
    ```bash
    npm start
    ```

The server should now be running on the specified port (default is 3000).

## Environment Variables
Create a `.env` file in the root of the project and add the following variables:

