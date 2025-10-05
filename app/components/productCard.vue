<template>
  <div
    class="w-60 aspect-[4/5] bg-white rounded-xs overflow-hidden shadow-md flex flex-col cursor-pointer transition-all hover:shadow-lg"
  >
    <div class="relative h-[65%]">
      <img :src="image" :alt="name" class="w-full h-full object-cover" />
    </div>

    <div class="flex flex-col justify-between p-4 h-[45%]">
      <div>
        <p class="font-bold text-gray-900 text-base mt-1">{{ price.toLocaleString() }} Ft</p>
        <p class="text-xs text-gray-500 mt-0.5">#{{ sku }}</p>
      </div>

      <div class="mt-2">
        <p class="text-xs text-gray-600 font-medium mb-1">Méretek:</p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="size in sizes"
            :key="size"
            class="px-2 py-0.5 bg-gray-200 text-gray-800 rounded-md text-xs font-medium"
          >
            {{ size }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  image: string
  price: number
  sku: string
  sizes: number[]
}>()
</script>
