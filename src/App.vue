<template>
  <div id="app" class="forecast">
    <header class="forecast__header">
      <div class="forecast__container">
        <UserLocation class="forecast__user-location" :city-name="cityName" />
      </div>
    </header>
    <main class="forecast__main">
      <div class="forecast__container forecast__container_size_large">
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
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  box-sizing: border-box;
  padding: rem(75) 0 rem(122) 0;
  height: 100vh;
  width: 100vw;
  background: color("nice");

  &__container {
    margin: 0 auto;
    max-width: rem(1215);
    &_size_large {
      display: grid;
      align-items: center;
      height: 100%;
    }
  }
  &__additional-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: rem(55);
    margin: 0 rem(25);
  }
  &__weather {
    margin-bottom: rem(54);
  }
}
</style>
