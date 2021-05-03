<template>
  <div class="user-location">
    <div class="user-location__info">
      <h1 class="user-location__city">{{ cityName }}</h1>
      <SwitchTemperatureUnit class="user-location__switch-temp" />
    </div>
    <div class="user-location__buttons">
      <button
        @click="switchSearchForm(!visibilitySearchForm)"
        class="user-location__search-city"
      >
        Сменить город
      </button>
      <button
        @click="updateUserLocation"
        class="user-location__search-location"
      >
        <SvgIcon name="arrow" class="user-location__arrow-icon" />
        Мое местоположение
      </button>
    </div>
    <SearchCity
      class="user-location__search"
      :class="{ 'user-location__search_visible_true': visibilitySearchForm }"
    />
  </div>
</template>

<script>
import SvgIcon from "./icons/SvgIcon";
import SwitchTemperatureUnit from "./SwitchTemperatureUnit";
import SearchCity from "./SearchCity";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "UserLocation",
  components: { SearchCity, SwitchTemperatureUnit, SvgIcon },
  props: {
    cityName: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      searchVisible: false,
    };
  },
  computed: mapGetters([
    "locationData",
    "visibilitySearchForm",
    "visibilitySearchForm",
  ]),
  methods: {
    ...mapActions(["getLocation", "getWeather"]),
    ...mapMutations(["switchSearchForm"]),
    async updateUserLocation() {
      await this.getLocation();
      await this.getWeather(this.locationData.city);
    },
  },
  mounted() {
    this.switchSearchForm();
  },
};
</script>

<style lang="scss">
.user-location {
  position: relative;
  display: grid;
  grid-row-gap: rem(9);
  @media (max-width: 640px) {
    grid-row-gap: rem(16);
  }
  &__city {
    font-size: font-size(3);
    font-weight: weight(1);
    @media (max-width: 640px) {
      font-size: font-size(2, true);
    }
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
    @media (max-width: 640px) {
      font-size: font-size(-1);
    }
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
    @media (max-width: 640px) {
      grid-column-gap: rem(6);
    }
  }
  &__search {
    position: absolute;
    top: 0;
    opacity: 0;
    visibility: hidden;
    &_visible_true {
      visibility: visible;
      opacity: 1;
    }
    @media (max-width: 640px) {
      top: rem(7);
      left: rem(2);
    }
  }
  &__buttons {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: rem(25);
  }
  &__switch-temp {
    margin-top: rem(6);
    @media (max-width: rem(640)) {
      margin-right: rem(14);
    }
  }
}
</style>
