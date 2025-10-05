<template>
  <div>
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="@/assets/images/alfoldi_logo.jpg"
        alt="Alföldi logó"
        class="filter grayscale absolute opacity-5 inset-0 w-full h-full object-contain"
      >

      <div
        class="relative max-w-3xl mx-auto mt-8 flex flex-col justify-center py-20 px-6 text-center text-gray-800 space-y-12"
      >
        <p class="pb-8">
          Cipőink a Flexi és rámán varrott technológiával készülnek, melyek
          hajlékony, mégis tartós szerkezetet adnak. Kényelmes viselet, időtálló
          forma és valódi kézműves minőség minden párban.
        </p>
      </div>
    </section>
    <div
      class="flex flex-wrap gap-6 p-6 bg-[var(--primary-brown-0)] justify-center"
    >
      <ProductCard
        v-for="product in products"
        :key="product.sku"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :sku="product.sku"
        :sizes="product.sizes"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    name: "Barna bőr cipő",
    image:
      "https://images.unsplash.com/photo-1641893843833-a006778dc00b?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 24990,
    sku: "A12345",
    sizes: [40, 41, 42, 43, 44],
  },
  {
    name: "Fekete sneaker",
    image:
      "https://images.unsplash.com/photo-1641893843833-a006778dc00b?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 19990,
    sku: "B67890",
    sizes: [39, 40, 41, 42],
  },
  {
    name: "Téli bakancs",
    image:
      "https://images.unsplash.com/photo-1641893843833-a006778dc00b?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 28990,
    sku: "C54321",
    sizes: [41, 42, 43, 44, 45],
  },
  {
    name: "Fehér sportcipő",
    image:
      "https://images.unsplash.com/photo-1641893843833-a006778dc00b?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 21990,
    sku: "D98765",
    sizes: [40, 41, 42, 43],
  },
];
</script>
