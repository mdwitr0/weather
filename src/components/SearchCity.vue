<template>
  <form @submit="setCity" class="search-city">
    <input
      id="search-city"
      type="text"
      name="city"
      class="search-city__field"
      placeholder="Название города"
      aria-label="Название города"
      aria-placeholder="Название города"
    />
    <button type="submit" class="search-city__button">ОК</button>
  </form>
</template>

<script>
export default {
  name: "SearchCity",
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    setCity() {},
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
    @media (max-width: rem(640)) {
      font-size: font-size(-1);
      padding: rem(18);
    }
    &:hover {
      color: color("nice");
    }
  }
}
</style>
