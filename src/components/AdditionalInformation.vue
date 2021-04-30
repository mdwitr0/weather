<template>
  <div v-if="value" class="additional-information">
    <span v-if="name" class="additional-information__name">{{ name }}</span>
    <span class="additional-information__value">{{ value }}</span>
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
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
