<template>
  <div id="app" class="forecast">
    <header class="forecast__city">
      <UserLocation city-name="Омск" />
    </header>
    <main class="forecast__weather">
      <CurrentWeather
        state-name="sun"
        weather-assessment="Преимущественно солнечно"
        :temperature="19"
      />
    </main>
    <footer class="forecast__additional">
      <AdditionalInformation
        v-for="(info, idx) in additionalInfo"
        :key="idx"
        :name="info.name"
        :value="info.value"
        :value-type="info.typeValue"
      />
    </footer>
  </div>
</template>

<script>
import UserLocation from "./components/UserLocation";
import CurrentWeather from "./components/CurrentWeather";
import AdditionalInformation from "./components/AdditionalInformation";
export default {
  name: "App",
  components: { AdditionalInformation, CurrentWeather, UserLocation },
  data() {
    return {
      cityName: "Омск",
      stateName: "sun",
      weatherAssessment: "Преимущественно солнечно",
      temperature: 19,
      additionalInfo: [
        {
          name: "Ветер",
          value: 5,
          typeValue: "м/c, западный",
        },
        {
          name: "Давление",
          value: 752,
          typeValue: "мм рт. ст.",
        },
        {
          name: "Влажность",
          value: 60,
          typeValue: "%",
        },
        {
          name: "Вероятность дождя",
          value: 10,
          typeValue: "%",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.forecast {
  height: 100vh;
  width: 100vw;
  background: color("nice");
}
</style>
