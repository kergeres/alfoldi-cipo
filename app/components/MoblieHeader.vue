<template>
  <header
    class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 md:hidden"
  >
    <!-- Hamburger (mindig látszik) -->
    <button
      :class="menuOpen ? 'right-0' : 'left-0'"
      class="transition-transform duration-300 fixed w-7 h-5 p-1 top-0 m-6 flex flex-col justify-between items-center focus:outline-none z-50"
      @click="toggleMenu"
    >
    
      <span
        class="block h-0.5 w-full bg-[var(--primary-brown-75)] transition-transform duration-300"
        :class="{ 'rotate-45 translate-y-0.5': menuOpen }"
      />
      <span
        class="block h-0.5 w-full bg-[var(--primary-brown-75)] transition-opacity duration-300"
        :class="{ 'opacity-0': menuOpen }"
      />
      <span
        class="block h-0.5 w-full bg-[var(--primary-brown-75)] transition-transform duration-300"
        :class="{ '-rotate-45 -translate-y-2': menuOpen }"
      />
    </button>

    <!-- Logo -->
  </header>

  <!-- Overlay -->
  <div
    v-if="menuOpen"
    class="fixed inset-0 backdrop-blur-[2px] bg-opacity-40 z-40 md:hidden"
    @click="closeMenu"
  ></div>

  <!-- Slide-in menu -->
  <transition name="slide" class="md:hidden">
    <div
      v-if="menuOpen"
      class="h-full fixed z-50 shadow-lg top-0 left-0 w-64 bg-white"
    >
      <nav class="w-full flex flex-col pt-16 px-4 gap-4">
        <NuxtLink to="/" class="text-gray-800 font-medium" @click="closeMenu"
          >Főoldal</NuxtLink
        >
        <div>
          <button
            class="w-full text-left text-gray-800 font-medium"
            @click="toggleDropdown"
          >
            Termékek
          </button>
          <div v-if="dropdownOpen" class="flex flex-col pl-4 mt-1 gap-1">
            <NuxtLink
              to="/mens"
              class="text-gray-700 hover:text-gray-900"
              @click="closeMenu"
              >Férfi cipők</NuxtLink
            >
            <NuxtLink
              to="/womens"
              class="text-gray-700 hover:text-gray-900"
              @click="closeMenu"
              >Női cipők</NuxtLink
            >
          </div>
        </div>
        <NuxtLink
          to="/about"
          class="text-gray-800 font-medium"
          @click="closeMenu"
          >Rólunk</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-gray-800 font-medium"
          @click="closeMenu"
          >Kontakt</NuxtLink
        >
      </nav>
      <img
        src="@/assets/images/alfoldi_logo.jpg"
        alt="Logo"
        class="h-32 w-auto absolute bottom-8 left-1/2 -translate-x-1/2"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menuOpen = ref(false);
const dropdownOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (!menuOpen.value) dropdownOpen.value = false;
}
function closeMenu() {
  menuOpen.value = false;
  dropdownOpen.value = false;
}
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 0.5s ease;
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-active {
  transition: transform 0.5s ease;
}
</style>
