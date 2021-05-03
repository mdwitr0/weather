import { fetchForecast, getForecast } from "../../api";

export default {
  actions: {
    async getWeather({ commit }, searchValue) {
      const weatherData = fetchForecast(searchValue);
      commit("updateWeather", weatherData);
    },
  },
  mutations: {
    updateWeather: (state, weatherData) => {
      state.weather = { ...getForecast(weatherData) };
    },
    updateTempUnit: (state, selectedUnit) => {
      state.tempUnit = selectedUnit;
    },
  },
  state: {
    weather: {
      city: null,
      conditionIcon: null,
      condition: null,
      temperature: {
        celsius: 0,
        fahrenheit: 0,
      },
      additionalInfo: [],
    },
    tempUnit: "celsius",
  },
  getters: {
    currentWeather: (state) => state.weather,
    currentTempUnit: (state) => state.tempUnit,
  },
};
