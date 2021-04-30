<template>
  <div id="app" class="forecast">
    <header class="forecast__header">
      <div class="forecast__container">
        <UserLocation class="forecast__user-location" :city-name="cityName" />
      </div>
    </header>
    <main class="forecast__main">
      <div class="forecast__container">
          <CurrentWeather
              class="forecast__weather"
              :state-name="stateName"
              :weather-assessment="weatherAssessment"
              :temperature="temperature"
          />
      </div>
    </main>
    <footer class="forecast__footer">
      <div class="forecast__container">
        <div class="forecast__additional-list">
          <AdditionalInformation
              class="forecast__additional"
              v-for="(info, idx) in additionalInfo"
              :key="idx"
              :name="info.name"
              :value="info.value"
              :value-type="info.valueType"
          />
        </div>
      </div>
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
          valueType: " м/c, западный",
        },
        {
          name: "Давление",
          value: 752,
          valueType: " мм рт. ст.",
        },
        {
          name: "Влажность",
          value: 60,
          valueType: "%",
        },
        {
          name: "Вероятность дождя",
          value: 10,
          valueType: "%",
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
