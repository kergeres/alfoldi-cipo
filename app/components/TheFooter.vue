<template>
  <footer>
    <div class="bg-[var(--primary-brown-100)] px-6 py-8 md:py-14 flex flex-col items-center text-white">
      <img src="@/assets/images/alfoldi_logo_white.png" alt="Logo" class="h-32 md:h-42 w-auto mb-4 filter grayscale" />
      <p class="text-sm text-white text-center max-w-md">
        Ez most még csak egy példa szöveg, de frappáns lesz, az biztos. Ez most még tényleg csak egy példa szöveg, de frappáns lesz, az biztos.
      </p>
    </div>

    <div class="bg-[var(--primary-brown-75)] py-4 flex justify-center">
      <Button icon="pi pi-facebook" class="p-button-rounded p-button-text text-white text-xl" />
      <Button icon="pi pi-envelope" class="p-button-rounded p-button-text text-white text-xl" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
