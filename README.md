# Inventory System App

Welcome to the Inventory System Apps documentation! This App allows you to manage categories, products, orders, order items, and users within your inventory system.

"Initially, I created this project as a backend in the form of a RESTful API, but for presentation purposes, I ended up converting it into server-side rendering using EJS. Thus, the project now exists in the form of server-side rendering, yet its API remains accessible for retrieving data when needed."

<br>
<b>Demo Web App</b>
<br>
https://inventory-system-p75j.onrender.com/
<br>
<br>
<b>API docs</b>
<br>
https://inventory-system-p75j.onrender.com/v1/api-docs

# Technology
- Backend: ExpressJS
- Frontend: EJS, HTML, CSS, Bootstrap
- Database: PostgreSQL + Prisma(ORM)
- Testing: Jest

# Database Diagram
<img width="824" alt="erd inventory system" src="https://github.com/ptrjs/inventory-system/assets/34370936/2b98cb07-e33c-410d-90a8-95f5307be205">

# API 
## Authentication

To access the endpoints, you need to authenticate using the following endpoints:

- `POST /auth/register`: Registers a new user.
- `POST /auth/login`: Logs in an existing user.

## Endpoints

### Category Endpoints

- `GET /category`: Retrieves a list of all categories.
- `POST /category`: Creates a new category.
- `GET /category/:categoryId`: Retrieves a category.
- `PATCH /category/:categoryId`: Updates an existing category.
- `DELETE /category/:categoryId`: Deletes a category.

### Product Endpoints

- `GET /product`: Retrieves a list of all products.
- `POST /product`: Creates a new product.
- `GET /product/:productId`: Retrieves a product.
- `PATCH /product/:productId`: Updates an existing product.
- `DELETE /product/:productId`: Deletes a product.

### Order Endpoints

- `GET /order`: Retrieves a list of all orders.
- `POST /order`: Creates a new order.
- `GET /order/:orderId`: Retrieves an order.
- `PATCH /order/:orderId`: Updates an existing order.
- `DELETE /order/:orderId`: Deletes an order.

### Order Item Endpoints

- `GET /order-item`: Retrieves a list of all order items.
- `POST /order-item`: Creates a new order item.
- `GET /order-item/:orderItemId`: Retrieves an order item.
- `PATCH /order-item/:orderItemId`: Updates an existing order item.
- `DELETE /order-item/:orderItemId`: Deletes an order item.

### User Endpoints

- `GET /user`: Retrieves user information.
- `POST /user`: Creates a new user.
- `GET /user/:userId`: Retrieves a user.
- `PATCH /user/:userId`: Updates user information.
- `DELETE /user/:userId`: Deletes a user.

## Response Status Codes

- `200 OK`: Successful request.
- `400 Bad Request`: Invalid data.
- `401 Unauthorized`: Authentication failed.
- `403 Forbidden`: Insufficient permissions.
- `404 Not Found`: Resource not found.

## Authentication and Authorization

This API requires authentication. Users with the role 'user' have access to CRUD operations for categories and products, while users with the role 'admin' have access to all CRUD operations.

## Installation

To install and run the API locally, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/ptrjs/inventory-system.git
    cd inventory-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following configuration:
    ```env
    PORT=port-number
    DATABASE_URL="your-db-url"
    JWT_SECRET="your-secret-key"
    JWT_ACCESS_EXPIRATION_MINUTES=expire-minute
    JWT_REFRESH_EXPIRATION_DAYS=expire-day
    ```

4. Run the API:
    ```bash
    npm run dev
    ```

Feel free to explore the API and manage your inventory efficiently!

# Screenshot
## Web App
![image](https://github.com/ptrjs/inventory-system/assets/34370936/f3fa159c-f87d-4d82-b6d0-160613c2295a)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/ab95196e-1e47-43c9-81d5-76aedefe12a1)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/3ccaab66-7387-48dd-a441-12c19cda9a7b)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/ba2130b4-ac27-4dd9-9a29-8b259b22eddd)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/3812b34f-e3c8-40b4-85fc-a630d264f450)
<br>
<br>
## API Docs
![image](https://github.com/ptrjs/inventory-system/assets/34370936/49ca6e71-7bcd-405d-a725-23e58e5aea9d)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/a08fb0dd-947f-439b-8757-4095ffb2fb4c)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/0184b606-f019-42d1-95b5-81b8958c8c23)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/2addb14d-1dd1-4a19-8df7-b0427b3152a7)
<br>
![image](https://github.com/ptrjs/inventory-system/assets/34370936/7e6c12a5-7c48-4d23-a04a-18b8260abe6f)
