import { fetchForecast, getForecast } from "../../api";

export default {
  actions: {
    getWeather: async ({ commit }, searchValue) => {
      const weatherData = fetchForecast(searchValue);
      commit("updateWeather", weatherData);
    },
  },
  mutations: {
    updateWeather: async (state, weatherData) => {
      state.weather = { ...getForecast(await weatherData) };
    },
    updateTempUnit: (state, selectedUnit) => {
      state.tempUnit = selectedUnit;
    },
    switchSearchForm: (state, value) => {
      state.visibilitySearchForm = value ?? false;
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
    visibilitySearchForm: false,
  },
  getters: {
    currentWeather: (state) => state.weather,
    currentTempUnit: (state) => state.tempUnit,
    visibilitySearchForm: (state) => state.visibilitySearchForm,
  },
};
