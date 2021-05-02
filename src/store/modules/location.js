export default {
  actions: {
    async getLocation({ commit }) {
      const res = await fetch("https://freegeoip.app/json/", {
        headers: {
          "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
        },
      });
      const userLocation = await res.json();
      commit("updateLocData", userLocation);
    },
  },
  mutations: {
    updateLocData(state, locData) {
      state.ip = locData.ip;
      state.city = locData.city;
    },
  },
  state: {
    ip: null,
    city: null,
  },
  getters: {
    locationData(state) {
      return state;
    },
  },
};
