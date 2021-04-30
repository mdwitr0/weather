<template>
  <div v-if="value" class="additional-information">
    <p v-if="name" class="additional-information__name">{{ name }}</p>
    <p class="additional-information__info">
      <span class="additional-information__value">{{ value }}</span>
      {{ valueType }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AdditionalInformation",
  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
      type: Number,
      required: true,
    },
    valueType: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss"></style>
