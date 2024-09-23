# Store API

This project is a Store API built using Node.js and MongoDB. It provides an API to manage and query products in a store, with features like sorting, filtering, pagination, and selecting specific fields. The API supports various query parameters to return customized results based on product attributes like name, featured status, ratings, and more.

## Table of Contents

- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
  - [API Endpoints](#API Endpoints)
  - [Query Parameters](#Query Parameters)
- [Examples](#Examples)
- [Contributing](#Contributing)
- [License](#License)

## Features

- **Get all products**: Retrieve all products in the store.
- **Query+based product retrieval**: Get products by name, featured, ratings, company, etc.
- **Sorting**: Sort products by any field (e.g., price, name, etc.).
- **Field selection**: Specify which fields to return in the response.
- **Pagination**: Paginate results using page and limit.
- **Numeric filters**: Filter products based on numerical comparisons (e.g., price>50).

## Technologies

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling API routes.
- **MongoDB**: NoSQL database for storing products.
- **Mongoose**: ODM for MongoDB to manage schema and queries.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/puremike/store-api.git
    cd store-api
   ```

2. Install dependencies:
   `npm install`

3. Set up environment variables:
   - Create a .env file in the root directory and add the following:
   ```
    MONGODB_URI=<your-mongo-db-connection-string>
    PORT=5500
   ```
4. Start the server:
   `npm start`
   The API will be available at http://localhost:5500

## Environmental Variables:

    Make sure to configure the following environment variables:
    - MONGODB_URI=The MongoDB connection string
    - PORT: The port on which the API will run ( default is 5500)

## Usage:

### API Endpoints

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| GET    | /api/v1/                | Index Route         |
| GET    | /api/v1/products        | Get all products    |
| GET    | /api/v1/products/static | Get static products |

## Query Parameters

You can pass the following query parameters to filter, sort, select, and paginate products:

- _name_: Filter products by name (case-insensitive).
- _featured_: Filter products by featured status (boolean: true or false).
- _ratings_: Filter products by ratings.
- _company:_ Filter products by company.
- _sort_: Sort products by fields (comma-separated).
- _select_: Select specific fields to return (comma-separated).
- _skip_: Skip a certain number of products.
- _limit_: Limit the number of products returned.
- _page_: Specify the page number for pagination.
- _numericfilters_: Filter products based on numeric conditions (e.g., price>50,rating<=4).

## Examples

- **Get all products**:

`GET /api/v1/products`

- **Get featured products**:
  `GET /api/v1/products?featured=true`

- **Sort products by price and name**:

`GET /api/v1/products?sort=price,name`

- **Select specific fields (name and price)**:
  `GET /api/v1/products?select=name,price`

- **Paginate and limit results**:

`GET /api/v1/products?page=2&limit=10`

- **Filter products by price and rating using numeric filters**:

`GET /api/v1/products?numericFilters=price>50,rating>=4`
