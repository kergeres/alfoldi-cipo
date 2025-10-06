<template>
  <div class="w-full max-w-6xl md:h-screen mx-auto">
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
          class="md:w-80 border border-gray-300 cursor-pointer"
          @click="openProduct(slotProps.data)"
        />
      </template>
    </Carousel>
    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "primevue/carousel";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";
import { useProducts } from "@/composables/useProducts";

const { products } = useProducts(8);

const responsiveOptions = ref([
  { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
  { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
  { breakpoint: "768px", numVisible: 1, numScroll: 1 },
]);

// modal vezérlés
const selectedProduct = ref<any | null>(null);
function openProduct(product: any) {
  selectedProduct.value = product;
}
</script>

<style scoped></style>
