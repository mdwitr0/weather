<template>
  <div class="switch-temperature-unit">
    <span class="switch-temperature-unit__degree-symbol">º</span>
    <div class="switch-temperature-unit__selection">
      <label
        v-for="(unit, idx) in units"
        :for="unit.value"
        :key="idx"
        class="switch-temperature-unit__unit"
        :class="{
          'switch-temperature-unit__unit_selected_yes':
            currentTempUnit === unit.value,
        }"
        :aria-label="unit.aria"
        >{{ unit.name }}
        <input
          :id="unit.value"
          @change="updateTempUnit(`${unit.value}`)"
          class="switch-temperature-unit__radio"
          :value="unit.value"
          name="unit"
          type="radio"
        />
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SwitchTemperatureUnit",
  data() {
    return {
      unitType: "celsius",
      units: [
        {
          name: "C",
          value: "celsius",
          aria: "По цельсию",
        },
        {
          name: "F",
          value: "fahrenheit",
          aria: "По фаренгейту",
        },
      ],
    };
  },
  computed: mapGetters(["currentTempUnit"]),
  methods: mapMutations(["updateTempUnit"]),
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
    cursor: pointer;
    &_selected_yes {
      background: color("light", 0.2);
    }
  }
  &__degree-symbol {
    line-height: rem(29);
  }
}
</style>
