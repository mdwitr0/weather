<template>
  <div class="user-location">
    <h1 class="user-location__city">{{ cityName }}</h1>
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
export default {
  name: "UserLocation",
  components: { SvgIcon },
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
