<template>
  <div class="switch-temperature-unit">
    <span class="switch-temperature-unit__degree-symbol">º</span>
    <div class="switch-temperature-unit__selection">
      <label
        for="celsius"
        class="switch-temperature-unit__unit switch-temperature-unit__unit_type_celsius"
        aria-label="По цельсию"
        >C</label
      >
      <label
        for="fahrenheit"
        class="switch-temperature-unit__unit switch-temperature-unit__unit_type_fahrenheit"
        aria-label="По фаренгейту"
        >F</label
      >
      <input id="celsius" name="unit" type="radio" />
      <input id="fahrenheit" name="unit" type="radio" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchTemperatureUnit",
};
</script>

<style lang="scss"></style>
