# React Boilerplate

A minimal and solid React JS application skeleton.

## Start small, add only what you need.

This starter kit aims to give you a good starting point for your projects. If you're looking for a (really) minimal ES6 React JS starter, this is probably for you.

## How to add Css dependencies

Currently we have not included any automatic tool to integrate css into the index.html file.
**Please, add the required css such as bootstrap or other css to the src/styles folder**.
Suggestions are welcome!!

## Setup

To start

1. clone the latest tag `git clone --branch 1.4.1 git@github.com:unicredit/react-boilerplate.git <your project name>`
2. execute the command `cp .env.example .env`

## Usage

__Clone this repository:__

__Install the dependencies:__

`npm install`

__Test:__

`npm test`

__Development mode with live-reload:__

`npm start`

__When you are done, create a production ready version of the JS bundle:__

`npm run build`

## Tools used:

__Styles__
- [node-sass](https://github.com/sass/node-sass): it enables SASS for your styles

__JSX/ES6 transpilation__
- [Babel](https://github.com/babel/babel)

__JS Minification__
- [Minifyify](https://github.com/ben-ng/minifyify): it compress your files while storing a `.map` which references your source code.

__Modules__
- [Browserify](http://browserify.org/):

__Dev server/livereload__
- [Browser Sync](http://www.browsersync.io/):

__Code linting__
- [Eslint](http://eslint.org/):

__Bootstrap__
- [React-Bootstrap](https://react-bootstrap.github.io/)

__CSS__
- [css-modulesify](https://github.com/css-modules/css-modulesify): [css-modules](http://glenmaddern.com/articles/css-modules) allows you to define and import custom and safe css class for your components.

__AUTOPREFIXER__
- [autoprefixer](https://github.com/postcss/autoprefixer): it parses CSS and adds vendor prefixes to rules

__ENV_LOADER__
- [localenvify](https://github.com/vvo/localenvify): loads configurations from env files
