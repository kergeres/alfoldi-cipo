<template>
  <div
    ref="map"
    class="shadow border border-gray-300 h-[300px] w-full overflow-hidden"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const config = useRuntimeConfig();
const map = ref<HTMLElement | null>(null);

onMounted(() => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);

  window.initMap = () => {
    const center = { lat: 47.491, lng: 19.059 }; // Vámház körút környéke

    const mapInstance = new google.maps.Map(map.value!, {
      center,
      zoom: 13, // 🔍 kisebb zoom = távolabbról mutatja
      mapId: "DEMO_MAP_ID",
      disableDefaultUI: true,
      clickableIcons: false,
    });

    new google.maps.Marker({
      position: center,
      map: mapInstance,
      title: "Vámház körút, Budapest",
    });
  };
});
</script>
