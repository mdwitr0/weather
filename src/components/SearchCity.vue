<template>
  <form @submit.prevent="setCity" class="search-city">
    <input
      id="search-city"
      type="text"
      name="city"
      v-model="cityName"
      class="search-city__field"
      placeholder="Название города"
      aria-label="Название города"
      aria-placeholder="Название города"
    />
    <span class="search-city__message">{{ errorMessage }}</span>
    <button type="submit" class="search-city__button">ОК</button>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "SearchCity",
  data() {
    return {
      cityName: "",
      message: "",
    };
  },
  computed: {
    ...mapGetters(["locationData"]),
    errorMessage() {
      if (this.cityName.length > 0 && this.cityName.length <= 3) {
        return "Название города слишком короткое"
      } else if (this.cityName.length > 0 && !/^[A-zА-я]+(?:[- `][A-zА-я]+)*/i.test(this.cityName)) {
        return "Это какой-то не правильный город"
      } else {
        return ""
      }
    }
  },
  methods: {
    ...mapMutations(["updateCity", "switchSearchForm"]),
    ...mapActions(["getWeather"]),
    async setCity() {
      if (this.cityName.length > 0 && !this.errorMessage.length) {
        this.updateCity(this.cityName);
        await this.getWeather(this.locationData.city);
        this.switchSearchForm();
      }
    },
  },
};
</script>

<style lang="scss">
.search-city {
  $padding-size: 31;
  background: color();
  box-shadow: shadow("black");
  width: min-content;
  display: grid;
  grid-template-columns: 1fr min-content;
  border-radius: border-radius(0);
  @media (max-width: 640px) {
    border-radius: border-radius(-1);
  }
  &__field {
    color: color("black");
    font-size: font-size(2);
    padding: rem($padding-size);
    font-weight: weight(1);
    box-sizing: border-box;
    width: rem(471);
    @media (max-width: 640px) {
      font-size: font-size(-1);
      padding: rem(18);
      width: rem(276);
    }
    &::placeholder {
      color: color("black", 0.5);
    }
  }
  &__button {
    color: color("primary");
    font-size: font-size(2);
    padding: rem($padding-size);
    @media (max-width: 640px) {
      font-size: font-size(-1);
      padding: rem(18);
    }
    &:hover {
      color: color("nice");
    }
  }
  &__message {
    position: absolute;
    color: color("warning");
    font-size: font-size(-1);
    bottom: rem(2);
    left: 0;
    padding-left: rem($padding-size);
    @media (max-width: 640px) {
      font-size: font-size(-2);
      padding-left: rem(18);
    }
  }
}
</style>
