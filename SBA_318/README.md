# Job Application API

This is a simple Node.js Express API for managing job applications. It allows users to submit, retrieve, update, and delete applications. The API also supports filtering applications by status and company.

## Project Structure

The project structure is organized as follows:

```
job-application-api/
│
├── data/
│   ├── applications.js
│   ├── companies.js
│   └── users.js
│
├── routes/
│   └── applications.js
|   └── companies.js
│
├── views/
│   └── applications.ejs
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

### `GET /form`

Fetches the job applications in a user-friendly format for display in a web page.

#### Response:

- `applications` (Array of Objects): List of all job applications with detailed information about the user and company.

Example response:

```json
{
  "applications": [
    {
      "id": 1,
      "user": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "company": {
        "name": "TechCorp",
        "industry": "Technology",
        "employees": 500,
        "webpage": "https://www.techcorp.com",
        "email": "contact@techcorp.com"
      },
      "position": "Software Engineer",
      "status": "pending"
    }
  ]
}
```

### `GET /`

Fetches the list of applications with optional filtering by status and company.

#### Query Parameters:

- `status` (string, optional): Filter applications by status (e.g., "pending", "accepted", "rejected").
- `company` (string, optional): Filter applications by company name.

#### Example request:

```http
GET /?status=pending&company=TechCorp
```

#### Example response:

```json
{
  "applications": [
    {
      "id": 1,
      "user": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "company": {
        "name": "TechCorp",
        "industry": "Technology",
        "employees": 500,
        "webpage": "https://www.techcorp.com",
        "email": "contact@techcorp.com"
      },
      "position": "Software Engineer",
      "status": "pending"
    }
  ]
}
```

### `POST /`

Adds a new job application to the system.

#### Request Body:

```json
{
  "companyId": 1,
  "position": "Software Engineer",
  "status": "pending"
}
```

#### Response:

- `id` (integer): The new application ID.
- `companyId` (integer): The ID of the company.
- `position` (string): The position applied for.
- `status` (string): The application status.

Example response:

```json
{
  "id": 2,
  "companyId": 1,
  "position": "Software Engineer",
  "status": "pending"
}
```

### `PATCH /:id`

Updates the status of an existing application.

#### Request Body:

```json
{
  "status": "accepted"
}
```

#### Response:

- `id` (integer): The ID of the updated application.
- `status` (string): The new status of the application.

Example response:

```json
{
  "id": 1,
  "status": "accepted"
}
```

### `DELETE /:id`

Deletes an application by its ID.

#### Response:

- `status` (string): Confirmation message.

Example response:

```json
{
  "message": "Application deleted successfully"
}
```

## Running the Project

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000`.
