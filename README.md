# inchallah

> A function that wraps the provided function with retry logic.

[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

## Installation

```
$ npm install inchallah
```

## Usage

```js
const inshallah = require("inchallah");

const fn = () => {
  // Function to be retried
};

const options = {
  retries: 5, // Number of retries (default: 10)
};

inshallah(deps, fn, options)
  .then((result) => {
    // Handle the result on success
  })
  .catch((error) => {
    // Handle the error on failure or exceeding the maximum number of retries
  });
```

## API

### inshallah(deps, fn, options) ⇒ `Promise`

Wraps the provided function with retry logic.

**Returns**: `Promise` - A promise that resolves with the result of the function or rejects with an error.

| Parameter | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| deps      | `Object` | Object containing dependencies (e.g., logger)            |
| fn        | `Function` | The function to be retried                               |
| options   | `Object` | Retry options                                           |
| options.retries | `number` | Number of retries (default: 10)                          |

**Example**

```js
const inshallah = require("inchallah");

const fn = () => {
  // Function to be retried
};

const options = {
  retries: 5, // Number of retries (default: 10)
};

inshallah(deps, fn, options)
  .then((result) => {
    // Handle the result on success
  })
  .catch((error) => {
    // Handle the error on failure or exceeding the maximum number of retries
  });
```

## License

MIT © [muceres](https://forgetheweb.eu)

