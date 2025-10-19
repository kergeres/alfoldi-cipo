<template>
  <transition name="fade">
    <div
      v-if="product"
      class="fixed inset-0 bg-[var(--primary-brown-125)]/80 flex items-center justify-center z-50"
    >
      <div
        class="bg-white w-full max-w-3xl mx-4 md:mx-0 shadow-2xl relative overflow-hidden"
      >
        <button
          class="absolute cursor-pointer top-3 right-4 text-gray-600 hover:text-black"
          @click="$emit('close')"
        >
          ✕
        </button>
        <div class="flex flex-col md:flex-row">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full md:w-1/2 h-80 object-cover"
          />
          <div class="p-6 flex flex-col justify-between">
            <div>
              <h2
                class="!text-[var(--primary-brown-75)] text-2xl font-semibold mb-2"
              >
                {{ product.name }}
              </h2>
              <p class="text-lg text-gray-600 mb-4">{{ product.price }} Ft</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="size in product.sizes"
                  :key="size"
                  class="border border-gray-400 bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                >
                  {{ size }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);
</script>