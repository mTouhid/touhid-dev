[![pages-build-deployment](https://github.com/mTouhid/touhid-dev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/mTouhid/touhid-dev/actions/workflows/pages/pages-build-deployment)

# :tada: Site for Touhid-Dev :tada:  

![License badge](https://img.shields.io/github/license/mTouhid/touhid-dev?style=for-the-badge)
![Issues count badge](https://img.shields.io/github/issues/mTouhid/touhid-dev?style=for-the-badge)  

## An easy-to-use react template  

- React Single-Page-Application template without create-react-app
- Configured with Webpack, Babel, ESLint, Sass, PostCSS and emotion

## Installation

```shell
# clone this repository
$ git clone https://github.com/mTouhid/touhid-dev

# go into template directory
$ cd touhid-dev

# install dependencies
$ npm install
```

## Commands

### Run dev server

```shell
$ npm start
```

Run dev server on [http://localhost:8080](http://localhost:8080)

### Build

```shell
$ npm run build
```

Creating a Production Build. The build artifacts will be stored in the `dist/` directory.

### Deploy github pages

```json
# edit package.json
{
  ...
  "hompage": "https://{github username}/github.io/{repository name}",
}
```

```shell
$ npm run deploy
```

Deploy to github pages
