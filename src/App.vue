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
import { mapGetters, mapActions } from "vuex";
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
  computed: mapGetters(["locationData"]),
  methods: mapActions(["getLocation"]),
  async mounted() {
    if (!this.locationData.city) await this.getLocation();
  },
};
</script>

<style lang="scss">
.forecast {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  box-sizing: border-box;
  padding: rem(75) 0 rem(122) 0;
  @media (max-width: 640px) {
    padding: rem(19) 0 rem(41) 0;
  }
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
    grid-template-columns: repeat(auto-fit, minmax(rem(150), 1fr));
    grid-column-gap: rem(55);
    grid-row-gap: rem(30);
    margin: 0 rem(25);
    @media (max-width: 932px) {
      grid-template-columns: repeat(2, minmax(rem(50), 1fr));
    }
    @media (max-width: 640px) {
      grid-column-gap: rem(11);
      grid-row-gap: rem(34);
    }
  }
  &__weather {
    margin-bottom: rem(47);
    @media (max-width: 640px) {
      margin-bottom: rem(30);
    }
  }
  &__user-location {
    margin-left: rem(24);
    @media (max-width: 1239px) {
      margin: 0 rem(24);
    }
    @media (max-width: 640px) {
      margin: 0 rem(30) 0 rem(18);
    }
  }
}
</style>
