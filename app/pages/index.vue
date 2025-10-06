<template>
  <div class="py-8 md:py-32">
    <h1 class="md:mt-6 text-center">Cipőinkről</h1>

    <Carousel />

    <section class="max-w-3xl mx-auto">
      <h1 class="mt-16 md:mt-0">1980 óta</h1>

      <div class="flex flex-col md:flex-row items-start gap-6">
        <div class="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Lorem kép"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Szöveg -->
        <div class="w-full md:w-2/3 text-gray-800 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <br />
      <p>
        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt obou in
        culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam. Sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import Carousel from "~/components/Carousel.vue";
</script>
