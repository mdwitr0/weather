<template>
  <div class="user-location">
    <div class="user-location__info">
      <h1 class="user-location__city">{{ cityName }}</h1>
      <SwitchTemperatureUnit class="user-location__switch-tem" />
    </div>
    <div class="user-location__buttons">
      <button @click="switchSearchField" class="user-location__search-city">Сменить город</button>
      <button class="user-location__search-location">
        <SvgIcon name="arrow" class="user-location__arrow-icon" />
        Мое местоположение
      </button>
    </div>
    <SearchCity v-show="searchVisible" class="user-location__search"/>
  </div>
</template>

<script>
import SvgIcon from "./icons/SvgIcon";
import SwitchTemperatureUnit from "./SwitchTemperatureUnit";
import SearchCity from "./SearchCity";
export default {
  name: "UserLocation",
  components: { SearchCity, SwitchTemperatureUnit, SvgIcon },
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchVisible: false
    }
  },
  methods: {
    switchSearchField() {
      this.searchVisible = !this.searchVisible
    }
  }
};
</script>

<style lang="scss">
.user-location {
  position: relative;
  display: grid;
  grid-row-gap: rem(9);
  margin-left: rem(24);
  &__city {
    font-size: font-size(3);
    font-weight: weight(1);
  }
  &__arrow-icon {
    $size: 20;
    width: rem($size);
    height: rem($size);
    fill: color("light", 0.6);
    transform: rotate(11deg);
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr min-content;
    align-items: flex-start;
  }
  &__search-city,
  &__search-location {
    font-size: font-size(0);
    color: color("light", 0.6);
    &:hover {
      color: color();
      & .user-location__arrow-icon {
        fill: color("light");
      }
    }
  }
  &__search-location {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-column-gap: rem(11);
  }
  &__search {
    position: absolute;
    top: 0;
  }
  &__buttons {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: rem(25);
  }
  &__switch-tem {
    margin-top: rem(6);
  }
}
</style>
