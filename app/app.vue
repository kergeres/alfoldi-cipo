<script setup lang="ts">
import Test from "./components/test.vue";
import Contact from "./pages/contact.vue";
import productCard from "./components/productCard.vue";
import mens from "./pages/mens.vue";

</script>

<template>
  <div class="bg-white w-full h-full">
    <mens />
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
