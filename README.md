# HeyDay
A Simple GraphQL API that tracks employees expenditures on vouchers per month

## Installation
Clone the repository by running 
  ```sh
  $ git clone git@github.com:QUDUSKUNLE/HeyDay.git
  ```
Create environment variables file `.env` and copy `env.sample` keys and set their corresponding values
  ```sh
  $ cp env.sample .env
  ```

Install dependencies.
```sh
$ npm install
```

Start Heyday app.
```sh
$ npm start
```

Heyday app should be running on the specifiied `PORT` in `.env`.
```sh
$ Heyday application is running on port `http://[::1]:{PORT}`
```

Access to GraphQL playground and available endpoints via the schema tab on the right side of GrpahQL playground.
```sh
$ localhost:{PORT}/graphql
```

Improvements:
  1. Having issues populating Order and Voucher Tables, I'm still looking to fix that.
  2. 

  
