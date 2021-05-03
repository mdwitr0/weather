import { fetchLocation } from "../../api";

export default {
  actions: {
    getLocation: async ({ commit }) => {
      const userLocation = await fetchLocation();
      commit("updateLocData", userLocation);
    },
  },
  mutations: {
    updateLocData: (state, locData) => {
      state.ip = locData.ip;
      state.city = locData.city;
    },
    updateCity: (state, city) => {
      state.city = city;
    },
  },
  state: {
    ip: null,
    city: null,
  },
  getters: {
    locationData: (state) => {
      return state;
    },
  },
};
