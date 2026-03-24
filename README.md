# Subscription Management API

A robust and secure backend API for managing recurring subscriptions with automated email reminders. This project leverages modern technologies to provide a high-performance experience, focusing on automation, security, and scalability.


## Core Features

- **Automated Workflows**: Uses Upstash Workflows to schedule and manage subscription renewal reminders (7, 5, 2, and 1 days before renewal).
- **Email Notifications**: Professional, card-based email templates sent via Nodemailer (Gmail).
- **Security & Rate Limiting**: Integrated with Arcjet for shield protection, bot detection, and token bucket rate limiting.
- **Authentication**: JWT-based user authentication and authorization.
- **Database**: Mongoose-based data modeling for Users and Subscriptions with automatic renewal date calculation.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Workflow / Scheduling**: Upstash Workflow (QStash)
- **Email Service**: Nodemailer (SMTP/Gmail)
- **Security**: Arcjet
- **Utilities**: Day.js for date manipulation, Bcrypt.js for password hashing

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A MongoDB Atlas account or a local MongoDB instance.
- A Gmail account with an App Password (if using Gmail for Nodemailer).
- An Upstash account (for QStash/Workflows) or a local emulator.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

Create a `.env.development.local` file in the root directory and configure the following variables:

```ini
PORT = 5500
SERVER_URL = http://localhost:5500
DB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
JWT_EXPIRES_IN = 5D
ARCJET_KEY = your_arcjet_api_key
QSTASH_URL = http://127.0.0.1:8080 # Or live Upstash URL
QSTASH_TOKEN = your_qstash_token
EMAIL_PASSWORD = your_16_char_app_password
```

### Running the Project

1. Start the development server using nodemon:

   ```bash
   npm run dev
   ```

2. (Optional) If testing workflows locally, ensure your QStash emulator is running at the configured URL.

## API Endpoints Overview

- **Auth**:
  - `POST /api/v1/auth/sign-up` - Register a new user
  - `POST /api/v1/auth/sign-in` - Authenticate and get a JWT token
- **Subscriptions**:
  - `POST /api/v1/subscriptions` - Create a new subscription (triggers workflow)
  - `GET /api/v1/subscriptions/:id` - Get details of a specific subscription
- **Workflows**:
  - `POST /api/v1/workflows/subscription/reminder` - Internal endpoint handled by Upstash

## Testing

For detailed instructions on how to test individual components like Nodemailer and Upstash, please refer to the internal documentation or run the following command if available:

```bash
node test-nodemailer.js
```

Almost all things running perfectly.Any error occur will be fixed in the future.

## Contributing

Contributions are welcome. Please ensure that all new code follows the existing patterns and passes any linting rules.

## License

This project is for learning purpose and for personal use.

