import { WeatherApiResponse } from "../api/responseTypes";

export const mockWeatherAPIResponse: WeatherApiResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1706929200,
      main: {
        temp: 282.14,
        feels_like: 279.06,
        temp_min: 280.4,
        temp_max: 282.14,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 85,
        temp_kf: 1.74,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 6.15,
        deg: 262,
        gust: 13,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-03 03:00:00",
    },
    {
      dt: 1706940000,
      main: {
        temp: 281.35,
        feels_like: 277.99,
        temp_min: 280.52,
        temp_max: 281.35,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 83,
        temp_kf: 0.83,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 6.34,
        deg: 254,
        gust: 13.33,
      },
      visibility: 10000,
      pop: 0.09,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-03 06:00:00",
    },
    {
      dt: 1706950800,
      main: {
        temp: 280.22,
        feels_like: 276.67,
        temp_min: 280.22,
        temp_max: 280.22,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1016,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 6,
        deg: 262,
        gust: 13.29,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-03 09:00:00",
    },
    {
      dt: 1706961600,
      main: {
        temp: 281.02,
        feels_like: 277.39,
        temp_min: 281.02,
        temp_max: 281.02,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 6.89,
        deg: 260,
        gust: 14.39,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-03 12:00:00",
    },
    {
      dt: 1706972400,
      main: {
        temp: 280.62,
        feels_like: 277,
        temp_min: 280.62,
        temp_max: 280.62,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 6.51,
        deg: 257,
        gust: 14.39,
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-03 15:00:00",
    },
    {
      dt: 1706983200,
      main: {
        temp: 279.71,
        feels_like: 275.87,
        temp_min: 279.71,
        temp_max: 279.71,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 6.42,
        deg: 258,
        gust: 14.24,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-03 18:00:00",
    },
    {
      dt: 1706994000,
      main: {
        temp: 279.58,
        feels_like: 275.6,
        temp_min: 279.58,
        temp_max: 279.58,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1015,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 6.71,
        deg: 257,
        gust: 14.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-03 21:00:00",
    },
    {
      dt: 1707004800,
      main: {
        temp: 279.85,
        feels_like: 275.74,
        temp_min: 279.85,
        temp_max: 279.85,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 7.34,
        deg: 254,
        gust: 15.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-04 00:00:00",
    },
    {
      dt: 1707015600,
      main: {
        temp: 279.91,
        feels_like: 275.7,
        temp_min: 279.91,
        temp_max: 279.91,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.69,
        deg: 248,
        gust: 15.53,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-04 03:00:00",
    },
    {
      dt: 1707026400,
      main: {
        temp: 280.5,
        feels_like: 276.32,
        temp_min: 280.5,
        temp_max: 280.5,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.2,
        deg: 253,
        gust: 15.83,
      },
      visibility: 10000,
      pop: 0.27,
      rain: {
        "3h": 0.21,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-04 06:00:00",
    },
    {
      dt: 1707037200,
      main: {
        temp: 279.82,
        feels_like: 275.88,
        temp_min: 279.82,
        temp_max: 279.82,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.79,
        deg: 246,
        gust: 13.06,
      },
      visibility: 8964,
      pop: 0.98,
      rain: {
        "3h": 1.51,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-04 09:00:00",
    },
    {
      dt: 1707048000,
      main: {
        temp: 280.77,
        feels_like: 277.55,
        temp_min: 280.77,
        temp_max: 280.77,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.52,
        deg: 241,
        gust: 18.11,
      },
      visibility: 4178,
      pop: 0.96,
      rain: {
        "3h": 4.38,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-04 12:00:00",
    },
    {
      dt: 1707058800,
      main: {
        temp: 282.86,
        feels_like: 279.53,
        temp_min: 282.86,
        temp_max: 282.86,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.68,
        deg: 263,
        gust: 19.07,
      },
      visibility: 10000,
      pop: 0.71,
      rain: {
        "3h": 1.23,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-04 15:00:00",
    },
    {
      dt: 1707069600,
      main: {
        temp: 281.19,
        feels_like: 278.3,
        temp_min: 281.19,
        temp_max: 281.19,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.97,
        deg: 263,
        gust: 13.91,
      },
      visibility: 10000,
      pop: 0.81,
      rain: {
        "3h": 0.56,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-04 18:00:00",
    },
    {
      dt: 1707080400,
      main: {
        temp: 281.32,
        feels_like: 278.89,
        temp_min: 281.32,
        temp_max: 281.32,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.03,
        deg: 256,
        gust: 12.48,
      },
      visibility: 10000,
      pop: 0.45,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-04 21:00:00",
    },
    {
      dt: 1707091200,
      main: {
        temp: 282.17,
        feels_like: 279.2,
        temp_min: 282.17,
        temp_max: 282.17,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.86,
        deg: 249,
        gust: 14.38,
      },
      visibility: 10000,
      pop: 0.41,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-05 00:00:00",
    },
    {
      dt: 1707102000,
      main: {
        temp: 282.98,
        feels_like: 279.85,
        temp_min: 282.98,
        temp_max: 282.98,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.07,
        deg: 245,
        gust: 16.76,
      },
      visibility: 10000,
      pop: 0.23,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-05 03:00:00",
    },
    {
      dt: 1707112800,
      main: {
        temp: 282.51,
        feels_like: 279.17,
        temp_min: 282.51,
        temp_max: 282.51,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1007,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.32,
        deg: 238,
        gust: 18.03,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-05 06:00:00",
    },
    {
      dt: 1707123600,
      main: {
        temp: 282.55,
        feels_like: 279,
        temp_min: 282.55,
        temp_max: 282.55,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.16,
        deg: 237,
        gust: 18.3,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-05 09:00:00",
    },
    {
      dt: 1707134400,
      main: {
        temp: 282.97,
        feels_like: 279.33,
        temp_min: 282.97,
        temp_max: 282.97,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.05,
        deg: 242,
        gust: 18.88,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-05 12:00:00",
    },
    {
      dt: 1707145200,
      main: {
        temp: 282.92,
        feels_like: 279.35,
        temp_min: 282.92,
        temp_max: 282.92,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.68,
        deg: 245,
        gust: 18.54,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-05 15:00:00",
    },
    {
      dt: 1707156000,
      main: {
        temp: 282.85,
        feels_like: 279.18,
        temp_min: 282.85,
        temp_max: 282.85,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1001,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.01,
        deg: 242,
        gust: 18.25,
      },
      visibility: 10000,
      pop: 0.21,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-05 18:00:00",
    },
    {
      dt: 1707166800,
      main: {
        temp: 282.72,
        feels_like: 279.06,
        temp_min: 282.72,
        temp_max: 282.72,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 999,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.81,
        deg: 241,
        gust: 17.98,
      },
      visibility: 10000,
      pop: 0.29,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-05 21:00:00",
    },
    {
      dt: 1707177600,
      main: {
        temp: 282.13,
        feels_like: 278.32,
        temp_min: 282.13,
        temp_max: 282.13,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 997,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.67,
        deg: 231,
        gust: 18.53,
      },
      visibility: 8285,
      pop: 0.83,
      rain: {
        "3h": 2.85,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-06 00:00:00",
    },
    {
      dt: 1707188400,
      main: {
        temp: 282.3,
        feels_like: 278.57,
        temp_min: 282.3,
        temp_max: 282.3,
        pressure: 998,
        sea_level: 998,
        grnd_level: 995,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.59,
        deg: 229,
        gust: 18.98,
      },
      visibility: 7976,
      pop: 1,
      rain: {
        "3h": 4.38,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-06 03:00:00",
    },
    {
      dt: 1707199200,
      main: {
        temp: 282.77,
        feels_like: 279.66,
        temp_min: 282.77,
        temp_max: 282.77,
        pressure: 996,
        sea_level: 996,
        grnd_level: 993,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.8,
        deg: 236,
        gust: 15.6,
      },
      visibility: 3303,
      pop: 1,
      rain: {
        "3h": 6.6,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-06 06:00:00",
    },
    {
      dt: 1707210000,
      main: {
        temp: 281.98,
        feels_like: 280,
        temp_min: 281.98,
        temp_max: 281.98,
        pressure: 997,
        sea_level: 997,
        grnd_level: 993,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.44,
        deg: 262,
        gust: 9.2,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 5.26,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-06 09:00:00",
    },
    {
      dt: 1707220800,
      main: {
        temp: 280.65,
        feels_like: 277.94,
        temp_min: 280.65,
        temp_max: 280.65,
        pressure: 997,
        sea_level: 997,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.28,
        deg: 254,
        gust: 10.21,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.72,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-06 12:00:00",
    },
    {
      dt: 1707231600,
      main: {
        temp: 280.25,
        feels_like: 277.39,
        temp_min: 280.25,
        temp_max: 280.25,
        pressure: 995,
        sea_level: 995,
        grnd_level: 992,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.39,
        deg: 276,
        gust: 9.03,
      },
      visibility: 10000,
      pop: 0.51,
      rain: {
        "3h": 0.44,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-06 15:00:00",
    },
    {
      dt: 1707242400,
      main: {
        temp: 277.62,
        feels_like: 275.04,
        temp_min: 277.62,
        temp_max: 277.62,
        pressure: 997,
        sea_level: 997,
        grnd_level: 994,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.97,
        deg: 274,
        gust: 8.62,
      },
      visibility: 10000,
      pop: 0.43,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-06 18:00:00",
    },
    {
      dt: 1707253200,
      main: {
        temp: 277.56,
        feels_like: 274.26,
        temp_min: 277.56,
        temp_max: 277.56,
        pressure: 998,
        sea_level: 998,
        grnd_level: 994,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.04,
        deg: 262,
        gust: 10.67,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-06 21:00:00",
    },
    {
      dt: 1707264000,
      main: {
        temp: 277.11,
        feels_like: 273.33,
        temp_min: 277.11,
        temp_max: 277.11,
        pressure: 997,
        sea_level: 997,
        grnd_level: 994,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 4.72,
        deg: 273,
        gust: 11.73,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-07 00:00:00",
    },
    {
      dt: 1707274800,
      main: {
        temp: 276.02,
        feels_like: 271.91,
        temp_min: 276.02,
        temp_max: 276.02,
        pressure: 998,
        sea_level: 998,
        grnd_level: 994,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 4.83,
        deg: 268,
        gust: 10.7,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-07 03:00:00",
    },
    {
      dt: 1707285600,
      main: {
        temp: 274.54,
        feels_like: 272.1,
        temp_min: 274.54,
        temp_max: 274.54,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 997,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 2.19,
        deg: 296,
        gust: 4.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-07 06:00:00",
    },
    {
      dt: 1707296400,
      main: {
        temp: 274.3,
        feels_like: 271.74,
        temp_min: 274.3,
        temp_max: 274.3,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1001,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.26,
        deg: 308,
        gust: 7.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-07 09:00:00",
    },
    {
      dt: 1707307200,
      main: {
        temp: 276.89,
        feels_like: 274.12,
        temp_min: 276.89,
        temp_max: 276.89,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1003,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 3.03,
        deg: 311,
        gust: 5.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-07 12:00:00",
    },
    {
      dt: 1707318000,
      main: {
        temp: 276.84,
        feels_like: 274.81,
        temp_min: 276.84,
        temp_max: 276.84,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1002,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 2.17,
        deg: 309,
        gust: 3.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-07 15:00:00",
    },
    {
      dt: 1707328800,
      main: {
        temp: 273.97,
        feels_like: 273.97,
        temp_min: 273.97,
        temp_max: 273.97,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1002,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 0.77,
        deg: 327,
        gust: 0.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-07 18:00:00",
    },
    {
      dt: 1707339600,
      main: {
        temp: 274.09,
        feels_like: 274.09,
        temp_min: 274.09,
        temp_max: 274.09,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.05,
        deg: 100,
        gust: 1.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-07 21:00:00",
    },
    {
      dt: 1707350400,
      main: {
        temp: 274.21,
        feels_like: 271.82,
        temp_min: 274.21,
        temp_max: 274.21,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 999,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.09,
        deg: 52,
        gust: 4.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-08 00:00:00",
    },
  ],
  city: {
    id: 3333231,
    name: "Glasgow City",
    coord: {
      lat: 55.861,
      lon: -4.2489,
    },
    country: "GB",
    population: 0,
    timezone: 0,
    sunrise: 1706947727,
    sunset: 1706979158,
  },
};
