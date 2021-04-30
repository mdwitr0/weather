<template>
  <div class="user-location">
    <div class="user-location__info">
      <h1 class="user-location__city">{{ cityName }}</h1>
      <SwitchTemperatureUnit />
    </div>
    <div class="user-location__buttons">
      <button class="user-location__search-city">Сменить город</button>
      <button class="user-location__search-location">
        <SvgIcon name="arrow" class="user-location__arrow-icon" />
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./icons/SvgIcon";
import SwitchTemperatureUnit from "./SwitchTemperatureUnit";
export default {
  name: "UserLocation",
  components: { SwitchTemperatureUnit, SvgIcon },
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
