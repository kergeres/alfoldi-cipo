<script setup lang="ts">
import Test from "./components/test.vue";
import Contact from "./pages/contact.vue";

</script>

<template>
  <div class="bg-gray-900 w-full h-full">
    <Test />
  </div>
</template>

<style lang="scss">
.button-default {
  background-color: var(--primary-brown-100);
  color: white;
  border: none;

  &:hover {
  background-color: var(--primary-brown-100)!important;
  color: white!important;
  opacity: 0.9;
  border: none!important;

  }
}
</style>
