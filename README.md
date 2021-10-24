# NWL_ROCKETSEAT
### This project was developed at the RocketSeat NLW event.
The backend receives messages from users authenticated with JWT or GitHub oauth, messages appear in real time on the frontend for everyone connected using Socket.io.

## Backend
* NodeJS
* TypeScript
* JWT
* GitHub oauth
* RestAPI
* Prisma ORM
* SQlite DB for test
* Socket.io

## Frontend
* Vite Template
* TypeScript
* ReactJS
* Axios
* Sass

# To run it, look steps bellow

* To running the backend, configure your .env file with environment variables:
  * `JWT_SECRET = generet an secret key for your JWT tokens, I'm  use an md5 hash.` 
  * `GITHUB_CLIENT_ID = your github client id`
  * `GITHUB_CLIENT_SECRET = your secret key` 
  * Tutoial how to get this <a href="https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app">link</a> 
*  `$ yarn` or `$ npm install` command for install all dependencies. After, run the script `yarn prisma migrate dev`
* Now run `$ yarn dev`, the backend are running in your local host at port 4000.

* Run the frontend: `$ yarn` to install dependencies, now `$ yarn dev`, look it running in local host port 3000.
