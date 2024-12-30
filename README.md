# InternsheepMERN

This project consists of two main services: **Auth Service** and **User Service**, designed for managing user authentication and profile details in a MERN-based internship platform.

---

## **Auth Service API Documentation**

### **Base URL**
```
https://api.internsheep.in/auth
```

### **Endpoints**

#### **1. Register a User**

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

#### **2. Login a User**

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

#### **3. Access Protected Route**

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

## **User Service API Documentation**

### **Base URL**
```
https://api.internsheep.in/user
```

### **Endpoints**

#### **1. Create or Update Profile**

- **URL**: `/profile`
- **Method**: `POST`
- **Description**: Creates or updates a user's profile, including optional profile picture upload.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```
- **Request Body**:
  - Form Data:
    - Fields:
      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "dob": "1990-01-01",
        "gender": "Male",
        "contactNumber": "1234567890",
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip": "10001",
          "country": "USA"
        }
      }
      ```
    - File:
      - Key: `file` (Optional)
      - Value: Upload profile picture.
- **Response**:
  - **Success** (200):
    ```json
    {
      "message": "Profile saved successfully",
      "profile": {
        // Profile object
      }
    }
    ```

---

#### **2. Get Profile**

- **URL**: `/profile`
- **Method**: `GET`
- **Description**: Retrieves the current user's profile.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```
- **Response**:
  ```json
  {
    // Profile object
  }
  ```

---

#### **3. Get Profile by ID**

- **URL**: `/profile/:id`
- **Method**: `GET`
- **Description**: Retrieves a profile by its ID.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```

---

#### **4. Add Education**

- **URL**: `/profile/education`
- **Method**: `POST`
- **Description**: Adds education entries to the user's profile.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```
- **Request Body**:
  ```json
  [
    {
      "degree": "B.Tech",
      "institution": "Stanford University",
      "startYear": 2015,
      "endYear": 2019,
      "grade": "4.0 GPA"
    },
    {
      "degree": "M.S.",
      "institution": "MIT",
      "startYear": 2020,
      "endYear": 2022,
      "grade": "3.8 GPA"
    }
  ]
  ```

---

#### **5. Add Work Experience**

- **URL**: `/profile/work`
- **Method**: `POST`
- **Description**: Adds work experience entries to the user's profile.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```

---

#### **6. Upload Resume**

- **URL**: `/profile/upload-resume`
- **Method**: `POST`
- **Description**: Uploads a user's resume.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your-jwt-token>"
  }
  ```
- **Request Body**:
  - Multipart Form Data:
    - Key: `file`
    - Value: Select a file to upload as the resume.

---

## **Environment Variables**

### **Auth Service**

| Variable       | Description                            | Example                                |
|-----------------|----------------------------------------|----------------------------------------|
| `PORT`         | The port on which the service runs     | `5000`                                 |
| `MONGO_URI`    | MongoDB connection string              | `mongodb://mongo:27017/intsheep`       |
| `JWT_SECRET`   | Secret key for signing JWT tokens      | `someshittyjwttokenisbeingused`        |
| `REDIS_HOST`   | Redis server hostname                  | `redis`                                |
| `REDIS_PORT`   | Redis server port                      | `6379`                                 |
| `KAFKA_BROKERS`| Kafka broker connection string         | `kafka:9092`                           |

---

### **User Service**

| Variable              | Description                            | Example                                |
|------------------------|----------------------------------------|----------------------------------------|
| `PORT`                | The port on which the service runs     | `5001`                                 |
| `MONGO_URI`           | MongoDB connection string              | `mongodb://mongo:27017/intsheep`       |
| `JWT_SECRET`          | Secret key for signing JWT tokens      | `someshittyjwttokenisbeingused`        |
| `REDIS_HOST`          | Redis server hostname                  | `redis`                                |
| `REDIS_PORT`          | Redis server port                      | `6379`                                 |
| `AWS_REGION`          | AWS region for S3 bucket               | `us-east-1`                            |
| `AWS_ACCESS_KEY_ID`   | AWS access key for S3                  | `your-access-key-id`                   |
| `AWS_SECRET_ACCESS_KEY`| AWS secret access key for S3          | `your-secret-access-key`               |
| `AWS_S3_BUCKET_NAME`  | AWS S3 bucket name                     | `your-s3-bucket-name`                  |

---

## **Setup Instructions**

### **1. Starting the Services**

Run the services using Docker Compose:
```bash
docker compose up --build -d
```