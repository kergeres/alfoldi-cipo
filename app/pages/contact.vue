<template>
  <section class="w-full md:px-32 md:py-32">
    <div
      class="block md:flex justify-around w-full flex-wrap content-center"
    >
      <div
        class="text-center xl:text-start my-12 w-full xl:my-0 md:max-w-sm space-y-1 leading-tight text-gray-800 [>p]:p-3" 
      >
        <p>Budapest, 1111 XY, Példa u. 7.</p>
        <p>061‑765-4321/ 0670‑123-4567</p>
        <p>emailcim@mail.hu</p>

        <p>Hétfő-Péntek: 10:00 - 17:30</p>
        <p>Szombat: 10:00 - 13:00</p>

        <h2 class="text-xl mt-8">Rendelési információ</h2>
        <p>
          Termékeink postai utánvéttel rendelhetők. Kérjük, hívjon minket vagy
          írjon e-mailt.
        </p>
      </div>

      <GoogleMap class="w-full h-96 md:w-64 md:h-64" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
