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

<style lang="scss"></style>
