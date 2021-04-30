<template>
  <div class="current-weather">
    <div class="current-weather__result">
      <StateWeather :name="stateName" />
      <h2 class="current-weather__temperature">{{ temperature }}º</h2>
    </div>
    <p v-if="weatherAssessment" class="current-weather__assessment">
      {{ weatherAssessment }}
    </p>
  </div>
</template>

<script>
import StateWeather from "./icons/StateWeather";
export default {
  name: "CurrentWeather",
  components: { StateWeather },
  props: {
    stateName: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    weatherAssessment: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.current-weather {
  display: grid;
  justify-content: center;

  &__temperature {
    font-size: font-size(5);
    font-weight: weight(1);
  }
  &__assessment {
    font-size: font-size(1);
    text-align: center;
    line-height: rem(18);
  }
  &__result {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-column-gap: rem(14);
  }
}
</style>
