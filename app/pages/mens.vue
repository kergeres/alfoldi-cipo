<template>
  <div>
    <section>
      <h1 class="text-center md:hidden pb-0 pt-8">Férfi cipők</h1>

      <div
        class="relative md:h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="@/assets/images/alfoldi_logo.jpg"
          alt="Alföldi logó"
          class="filter grayscale invisible md:visible absolute opacity-5 mx-auto mt-14 my-auto inset-0 w-7/10 h-auto object-contain"
        />
        <div
          class="relative max-w-3xl mx-auto -mt-8 md:mt-8 flex flex-col justify-center py-20 px-6 text-center text-gray-800 space-y-12"
        >
          <p class="pb-8">
            Cipőink a Flexi és rámán varrott technológiával készülnek, melyek
            hajlékony, mégis tartós szerkezetet adnak. Kényelmes viselet,
            időtálló forma és valódi kézműves minőség minden párban.
          </p>
        </div>
      </div>

      <h1 class="pl-12 pb-0 pt-8 hidden md:block text-start">Férfi cipők</h1>
    </section>

    <div
      class="flex flex-wrap gap-6 p-6 md:hidden bg-[var(--primary-brown-0)] justify-center"
    >
      <ProductCard
        v-for="product in visibleProducts"
        :key="product.sku"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :sku="product.sku"
        :sizes="product.sizes"
        class="w-60 cursor-pointer"
        @click="openProduct(product)"
      />
    </div>

    <div
      class="hidden md:flex md:flex-wrap md:gap-6 md:p-6 md:pb-32 bg-[var(--primary-brown-0)] md:justify-center"
    >
      <ProductCard
        v-for="product in products"
        :key="product.sku"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :sku="product.sku"
        :sizes="product.sizes"
        class="w-60 cursor-pointer"
        @click="openProduct(product)"
      />
    </div>

    <div
      v-if="visibleProducts.length < products.length"
      class="text-center py-6 md:hidden bg-[var(--primary-brown-0)]"
    >
      <button class="bg-black text-white py-2 px-4 rounded" @click="loadMore">
        Összes megjelenítése
      </button>
    </div>

    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useProducts } from "@/composables/useProducts";
import ProductCard from "~/components/ProductCard.vue";
import ProductModal from "~/components/ProductModal.vue";

const { products } = useProducts(24);

const visibleCount = ref(5);
const visibleProducts = computed(() =>
  products.value.slice(0, visibleCount.value)
);
function loadMore() {
  visibleCount.value = products.value.length;
}

const selectedProduct = ref<any | null>(null);
function openProduct(product: any) {
  selectedProduct.value = product;
}
</script>
