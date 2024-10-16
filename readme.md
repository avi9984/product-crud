Here’s a simple `README.md` for a Product CRUD operation using your provided `Product` model schema.

---

# Product CRUD API

This is a basic Product CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB (Mongoose). The API allows users to perform operations such as creating a new product, retrieving product details, updating product information, and deleting products.

## Requirements

To run this project, you will need to have the following installed:

- **Node.js**: v14.x or later
- **MongoDB**: MongoDB server or MongoDB Atlas connection
- **npm**: v6.x or later

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/avi9984/product-crud.git
cd product-crud
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MongoDB

Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URL="mongodb+srv://Avi9984:JM6hnTiQIRViVdA3@cluster0.qfc4n.mongodb.net/product"
```

Replace `mongodb://localhost:27017/productDB` with your MongoDB connection string if you are using MongoDB Atlas.

### 4. Run the Application

```bash
npm start
```

The application should now be running at `http://localhost:5000`.

## Endpoints

### 1. **Create a Product**

**POST** `/api/products`

Create a new product by sending a request with the following JSON structure:

```json
{
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "image": "image-url"
}
```

**Response:**

- **201 Created**: Returns the created product.

### 2. **Get All Products**

**GET** `/api/products`

Retrieve a list of all products.

**Response:**

- **200 OK**: Returns an array of products.

### 3. **Get a Product by ID**

**GET** `/api/products/:id`

Retrieve a product by its unique ID.

**Response:**

- **200 OK**: Returns the product if found.
- **404 Not Found**: If no product is found with the provided ID.

### 4. **Update a Product**

**PUT** `/api/products/:id`

Update a product by sending the updated data in the request body.

```json
{
    "name": "Updated Name",
    "description": "Updated Description",
    "price": 89.99,
    "image": "updated-image-url"
}
```

**Response:**

- **200 OK**: Returns the updated product.
- **404 Not Found**: If no product is found with the provided ID.

### 5. **Delete a Product**

**DELETE** `/api/products/:id`

Delete a product by its unique ID.

**Response:**

- **200 OK**: Returns a success message after deletion.
- **404 Not Found**: If no product is found with the provided ID.

## Models

### Product Schema

```javascript
const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true },
}, { versionKey: false, timestamps: true });
```

Fields:

- **name**: The name of the product (String, required).
- **description**: A detailed description of the product (String, required).
- **price**: The price of the product (Number, required).
- **image**: The URL of the product image (String, required).

## Error Handling

- **400 Bad Request**: If any required fields are missing or invalid.
- **404 Not Found**: If the product does not exist.
- **500 Internal Server Error**: For server-side issues.


