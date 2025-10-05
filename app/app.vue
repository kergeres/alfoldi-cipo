<script setup lang="ts">
import Test from "./components/test.vue";
import Contact from "./pages/contact.vue";
import productCard from "./components/productCard.vue";
import mens from "./pages/mens.vue";
import DesktopHeader from "./components/DesktopHeader.vue";
import MoblieHeader from "./components/MoblieHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div>
    <DesktopHeader class="invisible md:visible" />
    <MoblieHeader class="md:hidden" />
    <div class="bg-white w-full h-full">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.button-default {
  background-color: var(--primary-brown-100);
  color: white;
  border: none;

  &:hover {
    background-color: var(--primary-brown-100) !important;
    color: white !important;
    opacity: 0.9;
    border: none !important;
  }
}
</style>
