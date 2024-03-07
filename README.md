# Inventory System App

Welcome to the Inventory System Apps documentation! This App allows you to manage categories, products, orders, order items, and users within your inventory system.
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
