# Nest.js CQS Pattern Crud demo with role based auth

TODO (what can and will be improved one day :D): 
- add types for function returns ie. Promise<T>
- add refresh token
- implement otp code sending vie sns/twilio
- implement sentry for error logs
- implement ci/cd for deploy
- write e2e tests
- implement better logger
- check business logic for deleting users (make them anonymous after delete  -> GDPR)
- get rid off any type in some places in code
- remove unused packages from package.json and lock version
- write docs for functions
- write description for queries/mutations
- add pagination response when listing users (next page etc.)
- implement brute force protection for logging
- implement ip logs for user

## Installation

```bash
# Install packages
npm install

npx prisma generate
```

## Local database

```bash
# Setup local postgres
docker run --name task -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11.16

#create .env file with your local database credentials

# Run migration
npx prisma migrate dev

# Run db seed
npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
