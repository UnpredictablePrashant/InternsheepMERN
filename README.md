# InternsheepMERN


Here is the **API documentation** for your **Auth Service** in **Markdown format**:

---

# Auth Service API Documentation

## Base URL
```
https://api.internsheep.in/auth
```

## Endpoints

### **1. Register a User**

- **URL**: `/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "email": "testuser@example.com",
    "password": "securepassword",
    "role": "student"
  }
  ```
- **Response**:
  - **Success** (201):
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **Error** (500 - User Already Exists):
    ```json
    {
      "error": "User already exists"
    }
    ```

---

### **2. Login a User**

- **URL**: `/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "testuser@example.com",
    "password": "securepassword"
  }
  ```
- **Response**:
  - **Success** (200):
    ```json
    {
      "token": "jwt-token-string"
    }
    ```
  - **Error** (404 - User Not Found):
    ```json
    {
      "error": "User not found"
    }
    ```
  - **Error** (401 - Invalid Credentials):
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

---

### **3. Access Protected Route**

- **URL**: `/protected`
- **Method**: `GET`
- **Description**: Access a protected route that requires a valid JWT token.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```
- **Response**:
  - **Success** (200):
    ```json
    {
      "message": "Access to protected route granted",
      "user": {
        "id": "userId",
        "role": "student",
        "iat": 1672256175,
        "exp": 1672259775
      }
    }
    ```
  - **Error** (401 - Missing Authorization Header):
    ```json
    {
      "error": "Authorization header is missing"
    }
    ```
  - **Error** (403 - Invalid Token):
    ```json
    {
      "error": "Invalid or expired token"
    }
    ```

---

## Environment Variables

| Variable       | Description                            | Example                                |
|-----------------|----------------------------------------|----------------------------------------|
| `PORT`         | The port on which the service runs     | `5000`                                 |
| `MONGO_URI`    | MongoDB connection string              | `mongodb://mongo:27017/intsheep`       |
| `JWT_SECRET`   | Secret key for signing JWT tokens      | `someshittyjwttokenisbeingused`        |
| `REDIS_HOST`   | Redis server hostname                  | `redis`                                |
| `REDIS_PORT`   | Redis server port                      | `6379`                                 |
| `KAFKA_BROKERS`| Kafka broker connection string         | `kafka:9092`                           |

---

## Setup Instructions

### **1. Starting the Service**
Run the service using Docker Compose:
```bash
docker compose up --build -d
```

### **2. Testing the Endpoints**

Use tools like **Postman** or **cURL** to test the endpoints.

#### Example: Register a User
```bash
curl -X POST http://localhost/auth/register \
-H "Content-Type: application/json" \
-d '{
  "email": "testuser@example.com",
  "password": "securepassword",
  "role": "student"
}'
```

#### Example: Login
```bash
curl -X POST http://localhost/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "testuser@example.com",
  "password": "securepassword"
}'
```

---

## Error Codes

| Status Code | Description                        |
|-------------|------------------------------------|
| `200`       | Success                            |
| `201`       | Created                            |
| `401`       | Unauthorized - Missing or invalid token |
| `403`       | Forbidden - Access denied          |
| `404`       | Not Found - User or resource not found |
| `500`       | Internal Server Error              |
