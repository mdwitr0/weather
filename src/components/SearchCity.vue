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

<style lang="scss"></style>
