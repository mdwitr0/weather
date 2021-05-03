const API_KEY = "83081e37f98d974000e4baf49623ea61";

const wordLib = {
  windDirections: {
    N: "Северный",
    NNE: "Северо-северо-восточный",
    NE: "Северо-восточный",
    ENE: "Восточно-северо-восточный",
    E: "Восточный",
    ESE: "Восточно-юго-восточный",
    SE: "Юго-восточный",
    SSE: "Юго-юго-восточный",
    S: "Южный",
    SW: "Юго-западный",
    SSW: "Юго-юго-западный",
    WSW: "Западно-юго-западный",
    W: "Западный",
    WNW: "Западно-северо-западный",
    NW: "Северо-западный",
    NNW: "Северо-северо-западный",
  },
  conditionCode: {
    1000: "sun",
    1003: "partly-cloudy",
    1006: "partly-cloudy",
    1009: "cloud",
    1030: "cloud",
    1063: "cloud",
    1066: "cloud",
    1069: "cloud",
    1072: "cloud",
    1087: "storm",
    1114: "rain",
    1117: "rain",
    1135: "cloud",
    1147: "rain",
    1150: "rain",
    1153: "rain",
    1168: "rain",
    1171: "rain",
    1180: "rain",
    1183: "rain",
    1186: "rain",
    1189: "rain",
    1192: "rain",
    1195: "rain",
    1198: "rain",
    1201: "rain",
    1204: "rain",
    1207: "rain",
    1210: "rain",
    1213: "rain",
    1216: "rain",
    1219: "rain",
    1222: "rain",
    1225: "rain",
    1237: "rain",
    1240: "rain",
    1243: "rain",
    1246: "rain",
    1249: "rain",
    1252: "rain",
    1255: "rain",
    1258: "rain",
    1261: "rain",
    1264: "rain",
    1273: "rain",
    1276: "storm",
    1279: "rain",
    1282: "rain",
  },
};

export const fetchLocation = async () => {
  const res = await fetch("https://freegeoip.app/json/", {
    headers: {
      "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
    },
  });
  return (await res.json()) ?? {};
};

export const fetchForecast = async (searchValue) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&lang=ru`
  );
  return (await res.json()) ?? {};
};

export const getForecast = (weatherData) => {
  const result = {
    additionalInfo: [],
  };

  const pushAdditional = (name, value, valueType) => {
    result.additionalInfo.push({
      name,
      value,
      valueType,
    });
  };
  const currentData = weatherData.current;

  result.condition = currentData.condition.text;
  result.temperature = {
    celsius: currentData.temp_c,
    fahrenheit: currentData.temp_f,
  };
  result.conditionIcon = wordLib.conditionCode[currentData.condition.code];

  pushAdditional(
    "Ветер",
    (currentData.wind_kph / 3.6).toFixed(1),
    ` м/c, ${wordLib.windDirections[currentData.wind_dir]}`
  );
  pushAdditional(
    "Давление",
    (currentData.pressure_mb * 0.75).toFixed(0),
    " мм рт. ст."
  );
  pushAdditional("Влажность", currentData.humidity, "%");
  pushAdditional(
    "Вероятность дождя",
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    "%"
  );

  return result;
};
