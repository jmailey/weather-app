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

## Key Features

1. The application can return a weather forecast for a given location for the next five days.

2. Users can search for a location

3. If multiple locations are found a location selector will show and allow them to select.

4. Once a location is selected the user will get the forecast for the next five days.

## Future improvements

1. Introduce react context, redux or any other state management design so we do not need to pass getters, setters or other props into components.

2. The intended behavior is for the LocationSelector is for it not to show if only one location is returned from the geoCoderAPI and for the weatherAPI to be called without more user interaction. This still need to be implemented

3. Use ReactQuery and take advantage of caching and fetching states so we don't have to keep rolling our own.

4. Write some more tests.

5. Further look into the https://openweathermap.org/ API, possible better solution for date conversions etc.
