<template>
  <div  class="shadow border border-black"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

declare global {
  interface Window {
    initMap: () => void
  }
}

const config = useRuntimeConfig();
const map = ref<HTMLElement | null>(null);

// onMounted(async () => {
//   const script = document.createElement("script");
//   script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&callback=initMap`;
//   script.async = true;
//   document.head.appendChild(script);

//   window.initMap = () => {
//     new google.maps.Map(map.value!, {
//       center: { lat: 47.615, lng: 19.203 },
//       zoom: 14,
//       mapId: "DEMO_MAP_ID",
//     });
//   };
// });
</script>

<style scoped>
/* ha kell fix méret */
</style>
