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
      <h1 class="pl-12 pb-0 pt-8 text-start">Nói cipők</h1>
    </section>
    <div
      class="flex flex-wrap gap-6 p-6 md:pb-32 bg-[var(--primary-brown-0)] justify-center"
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
const imagePool = [
  "https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1733410027841-09dc77bd1832?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1563433836985-8ce7df0842ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1563434049350-09568e40b8b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758542988664-49951c5b1999?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const products = Array.from({ length: 24 }, (_, i) => {
  const randomImage = imagePool[getRandomInt(0, imagePool.length - 1)];
  const price = getRandomInt(19990, 34990); // véletlenszerű ár HUF-ban
  const sizes = Array.from({ length: getRandomInt(3, 6) }, () =>
    getRandomInt(39, 45)
  ); // 39-45 méretek
  const sku = `MDL${i + 1}${getRandomInt(10, 99)}`;
  return {
    name: `Cipő ${i + 1}`,
    image: randomImage,
    price,
    sku,
    sizes,
  };
});
</script>
