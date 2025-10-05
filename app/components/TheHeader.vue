<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-between pl-6 pr-18 py-2 bg-white shadow-sm z-50">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="@/assets/images/alfoldi_logo.jpg" alt="Logo" class="h-16 w-auto" />
    </div>

    <!-- Menü -->
    <nav class="flex items-center gap-8 text-gray-800 font-medium">
      <NuxtLink
        to="/"
        class="relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-brown-75)] after:transition-all after:duration-500 hover:after:w-full"
      >
        Főoldal
      </NuxtLink>

      <!-- Termékek dropdown click-re -->
     <div class="relative group">
  <button
    class="relative cursor-pointer after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-brown-75)] after:transition-all after:duration-500 group-hover:after:w-full"
    @click="toggleDropdown"
  >
    Termékek
  </button>

  <div
    v-if="dropdownOpen"
    class="absolute top-full left-0 mt-2 min-w-[150px] bg-white shadow-md rounded-md transition-all duration-200 z-50"
  >
    <NuxtLink
      to="/products/ferfi"
      class="block px-4 py-2 text-gray-800 hover:bg-gray-50"
      @click="closeDropdown"
    >
      Férfi cipők
    </NuxtLink>
    <NuxtLink
      to="/products/noi"
      class="block px-4 py-2 text-gray-800 hover:bg-gray-50"
      @click="closeDropdown"
    >
      Női cipők
    </NuxtLink>
  </div>
</div>


      <NuxtLink
        to="/rolunk"
        class="relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-brown-75)] after:transition-all after:duration-500 hover:after:w-full"
      >
        Rólunk
      </NuxtLink>

      <NuxtLink
        to="/kontakt"
        class="relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-brown-75)] after:transition-all after:duration-500 hover:after:w-full"
      >
        Kontakt
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dropdownOpen = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function closeDropdown() {
  dropdownOpen.value = false
}
</script>
