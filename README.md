Bi-Cycle Store B4A2V4
Description
Bi-Cycle Store B4A2V4 is a full-stack Express application developed with TypeScript, integrated with MongoDB and Mongoose to manage a bicycle store's inventory and order system. It allows users to manage products (bicycles), handle orders, and track revenue from all orders placed.

Features
Product Management
Create a Bicycle: Add a new bicycle to the store's inventory with details like name, brand, price, type, description, quantity, and stock status.
Get All Bicycles: Retrieve a list of all bicycles in the store with search capabilities based on name, brand, or type.
Get Specific Bicycle: View detailed information for a specific bicycle using its unique ID.
Update a Bicycle: Modify the details of an existing bicycle, such as price and quantity.
Delete a Bicycle: Remove a bicycle from the store's inventory.
Order Management
Place an Order: Customers can place an order for a bicycle, specifying quantity and email. The system will update the stock accordingly.
Calculate Revenue: The total revenue generated from all orders can be calculated using MongoDB's aggregation pipeline.
Error Handling
Proper error messages are provided for common issues, such as validation errors, insufficient stock, and invalid inputs.
Installation
Follow these steps to set up the project locally:

Prerequisites
Node.js (v14.0 or above)
MongoDB (running locally or remotely, e.g., MongoDB Atlas)
TypeScript (installed globally or in the project)
npm or yarn package manager
Steps to Install
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/bicycle-store.git
cd bicycle-store
Install dependencies:

Run the following command to install all required packages:

bash
Copy code
npm install
Set up MongoDB:

If you are using MongoDB locally, ensure MongoDB is running on the default port (mongodb://localhost:27017).
If you are using MongoDB Atlas, update the MONGO_URI in the .env file with your MongoDB Atlas connection string.
Create .env file:

Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your-mongo-connection-string
PORT=5000
Run the server:

Start the development server using:

bash
Copy code
npm run dev
The application should now be running on http://localhost:5000.

API Endpoints
Below are the available API endpoints:

1. Create a Bicycle
Endpoint: POST /api/products
Request Body:
json
Copy code
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}
Response:
json
Copy code
{
  "message": "Bicycle created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true
  }
}
2. Get All Bicycles
Endpoint: GET /api/products
Query: ?searchTerm=<search term>
Response:
json
Copy code
{
  "message": "Bicycles retrieved successfully",
  "status": true,
  "data": [ /* Array of bicycles */ ]
}
3. Get a Specific Bicycle
Endpoint: GET /api/products/:productId
Response:
json
Copy code
{
  "message": "Bicycle retrieved successfully",
  "status": true,
  "data": { /* Bicycle details */ }
}
4. Update a Bicycle
Endpoint: PUT /api/products/:productId
Request Body:
json
Copy code
{
  "price": 350,
  "quantity": 15
}
Response:
json
Copy code
{
  "message": "Bicycle updated successfully",
  "status": true,
  "data": { /* Updated bicycle details */ }
}
5. Delete a Bicycle
Endpoint: DELETE /api/products/:productId
Response:
json
Copy code
{
  "message": "Bicycle deleted successfully",
  "status": true
}
6. Order a Bicycle
Endpoint: POST /api/orders
Request Body:
json
Copy code
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 600
}
Response:
json
Copy code
{
  "message": "Order created successfully",
  "status": true,
  "data": { /* Order details */ }
}
7. Calculate Revenue from Orders
Endpoint: GET /api/orders/revenue
Response:
json
Copy code
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 1200
  }
}
Error Handling
The API follows a structured error format for consistency and easier debugging:

Validation Errors: Detailed error messages for fields like price, email, and stock.
Not Found: Returns a 404 error when a resource is not found.
Internal Server Error: Catches unexpected errors and returns a generic error message with a stack trace.
Contribution
Contributions are welcome! Feel free to fork the repository, make improvements, and submit pull requests.
