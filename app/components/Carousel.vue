<template>
  <div class="w-full max-w-6xl h-screen mx-auto">
    <Carousel
      :value="products"
      :num-visible="4"
      :num-scroll="1"
      circular
      :autoplay-interval="2500"
      :show-indicators="false"
      show-navigators
      class="p-4"
      :responsive-options="responsiveOptions"
    >
      <template #item="slotProps">
        <ProductCard
          :name="slotProps.data.name"
          :image="slotProps.data.image"
          :price="slotProps.data.price"
          :sku="slotProps.data.sku"
          :sizes="slotProps.data.sizes"
          class="w-80 border border-gray-300"
        />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "primevue/carousel";
import ProductCard from "../components/productCard.vue";

const imagePool = [
  "https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1733410027841-09dc77bd1832?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1563433836985-8ce7df0842ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1563434049350-09568e40b8b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758542988664-49951c5b1999?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
];

const products = ref(
  Array.from({ length: 8 }, (_, i) => ({
    name: `Cipő ${i + 1}`,
    image: imagePool[Math.floor(Math.random() * imagePool.length)],
    price: 36990 + i * 1500,
    sku: `SKU-${1000 + i}`,
    sizes: [39, 40, 41, 42, 43],
  }))
);


const responsiveOptions = ref([
  { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
  { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
  { breakpoint: "768px", numVisible: 1, numScroll: 1 },
]);
</script>
<style scoped>

</style>
