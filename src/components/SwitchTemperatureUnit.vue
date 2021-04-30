<template>
  <div class="switch-temperature-unit">
    <span class="switch-temperature-unit__degree-symbol">º</span>
    <div class="switch-temperature-unit__selection">
      <label
        for="celsius"
        class="switch-temperature-unit__unit"
        :class="{
          'switch-temperature-unit__unit_selected_yes': unitType === 'celsius',
        }"
        aria-label="По цельсию"
        >C</label
      >
      <input
        id="celsius"
        v-model="unitType"
        class="switch-temperature-unit__radio"
        value="celsius"
        name="unit"
        type="radio"
      />
      <label
        for="fahrenheit"
        class="switch-temperature-unit__unit"
        :class="{
          'switch-temperature-unit__unit_selected_yes':
            unitType === 'fahrenheit',
        }"
        aria-label="По фаренгейту"
        >F</label
      >
      <input
        id="fahrenheit"
        v-model="unitType"
        class="switch-temperature-unit__radio"
        value="fahrenheit"
        name="unit"
        type="radio"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchTemperatureUnit",
  data() {
    return {
      unitType: "celsius",
    };
  },
};
</script>

<style lang="scss">
.switch-temperature-unit {
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-column-gap: rem(10);
  &__selection {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    box-sizing: border-box;
    border-radius: border-radius(0);
    border: border();
    overflow: hidden;
  }
  &__radio {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  &__unit {
    padding: rem(2) rem(13);
    &_selected_yes {
      background: color("light", 0.2);
    }
  }
  &__degree-symbol {
    line-height: rem(29);
  }
}
</style>
