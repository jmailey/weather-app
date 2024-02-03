<h1 align="center">
Weather APP
</h1>

<h4 align="center">An App that returns the five day forecast from OpenWeather API</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a target="__blank" rel="noopener" href="https://weather-app-three-eta-54.vercel.app/">Demo</a>

</p>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jmailey/weather-app.git

# Go into the repository
$ cd weather-app

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

# Build the app
$ yarn build

# Run tests
$ yarn test
```

## Future improvements

1. Possibly introduce react context or redux so we dont need to pass getters and setters into components. There is not much state needed as yet so I didn't feel like it needed a big state management system yet.

2. Use ReactQuery and take advantage of caching and fetching states so we don't have to keep rolling our own.
