# mop-app [![Build status for Mop App](https://img.shields.io/circleci/project/sholladay/mop-app/master.svg "Build Status")](https://circleci.com/gh/sholladay/mop-app "Builds")

> Lint and maintain many projects at once

This is the desktop app for [Mop](https://github.com/sholladay/mop-cli). It supports macOS, Linux and Windows, but only macOS has been tested.

**Warning**: This app is in early development and should be considered [alpha](https://en.wikipedia.org/wiki/Software_release_life_cycle#Stages_of_development) software.

## Contents

 - [Why?](#why)
 - [Install](#install)
 - [Usage](#usage)
 - [CLI](#cli)
 - [Team](#team)
 - [Dev](#dev)
 - [Contributing](#contributing)
 - [License](#license)

## Why?

 - Helps you be a more productive developer.
 - Point and click configuration.
 - Beautiful user interface.

## Install

```sh
git clone git@github.com:sholladay/mop-app.git
cd mop-app
npm install
```

## Usage

Get it into your program.

```js
const mopApp = require('mop-app');
```

## CLI

See [mop-cli](https://github.com/sholladay/mop-cli) to use this on the command line.

## Team

[![Seth Holladay](https://github.com/sholladay.png?size=100)](https://github.com/sholladay) | [![Stas Nedbailov](https://github.com/venikman.png?size=100)](https://github.com/venikman)
---|---
[Seth Holladay](https://seth-holladay.com) | [Stas Nedbailov](https://twitter.com/venik_man)

## Dev

### Run

```sh
npm start
```

### Build

```sh
npm run build
```

Builds the app for macOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

## Contributing

See our [contributing guidelines](https://github.com/sholladay/mop-app/blob/master/CONTRIBUTING.md "Guidelines for participating in this project") for more details.

1. [Fork it](https://github.com/sholladay/mop-app/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/mop-app/compare "Submit code to this project for review").

## License

[MPL-2.0](https://github.com/sholladay/mop-app/blob/master/LICENSE "License for mop-app") © [Seth Holladay](https://seth-holladay.com "Author of mop-app")

Go make something, dang it.
