# Next.js Better Auth Starter

This is a [Next.js](https://nextjs.org) project designed to help you get started with [Better Auth](https://better-auth.com/) quickly.

## Getting Started

Follow these steps to set up the project locally.

### 1. Installation

Install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

### 2. Environment Setup

Create a `.env` file in the root of your project by copying the example:

```bash
cp .env.example .env
```

The `.env` file should look like this:

```env
DATABASE_URL=postgres://pguser:pgpassword@localhost:5432/pgdb
BETTER_AUTH_SECRET=IJyYofBR1gHsK26tAHNRisA40kk7GjGY
BETTER_AUTH_URL=http://localhost:3000
```

-   **DATABASE_URL**: Connection string for your PostgreSQL database.
-   **BETTER_AUTH_SECRET**: Used for encryption and hashing. (The example value is for development only).
-   **BETTER_AUTH_URL**: The base URL of your application.

### 3. Database Setup

You can use Docker Compose to start a PostgreSQL database and pgAdmin.

```bash
docker-compose up -d
```

This will start:
-   **PostgreSQL** on port `5432` matching the default `DATABASE_URL`.
-   **pgAdmin** on port `8080` (email: `pgadmin@example.com`, password: `pgadminpassword`).

#### Schema Management

Once the database is running, push the schema to the database:

```bash
npm run db:push
```

Alternatively, if you prefer using migrations:

```bash
# Generate migration files
npm run db:generate

# Apply migrations
npm run db:migrate
```

To view and edit your data visually, you can use Drizzle Studio:

```bash
npm run db:studio
```

### 4. Running the App

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

-   [Better Auth Documentation](https://better-auth.com/docs)
-   [Next.js Documentation](https://nextjs.org/docs)
-   [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
