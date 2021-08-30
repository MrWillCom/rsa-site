---
title: API
---

## Usage

To install RSA CLI to your Node.js project, run:

```sh
$ yarn add rsa-cli
```

or

```sh
$ npm install rsa-cli
```

And import to your project:

```js
const RSA_CLI = require('rsa-cli');
```

## Arguments

All of the command APIs accept processed arguments as an object:

```js
var args = {
    command: process.argv[2],
    keyName: process.argv[3],
    object: process.argv[4],
    params: argv,
    argv: process.argv,
}
```

When it is executed in command-line, `main.js` processes the received argv from terminal and execute the command functions with these processed arguments. So it also works as API.

Most of the command APIs uses `{ keyName, object, params }`, except `config` API, it only uses `{ argv }`

For example:

```js
// in terminal:
// $ rsa encrypt myKey 'Hello, World!' --quiet -p 1234

// processed args:
{
  command: 'encrypt',
  keyName: 'myKey',
  object: 'Hello, World!',
  // `--quiet -p 1234`:
  params: {
    quiet: true,
    password: '1234'
  },
  // original argv from `process.argv`:
  argv: [
    '.../node',
    '.../rsa-cli/src/main.js',
    'encrypt',
    'myKey',
    'Hello, World!',
    '--quiet'
  ]
}
```

Another example (command `config`):

```js
// in terminal:
// $ rsa config set lang en-US

// processed args:
{
  // even these args are not empty, command API will still ignore them:
  command: 'config',
  keyName: 'set',
  object: 'lang',
  // parts of command API may use `params`:
  params: { },
  // command API uses this:
  argv: [
    '.../node',
    '.../rsa-cli/src/main.js',
    'config',
    'set',
    'lang',
    'en-US'
  ]
}
```

## Declaration Files

All the command APIs have `d.ts` to declare the arguments and return values.
