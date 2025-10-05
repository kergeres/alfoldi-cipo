<template>
  <div class="max-w-3xl mx-auto py-16 space-y-16 text-center text-gray-800 ">
  <div class="border border-gray-800  block !h-96 items-center justify-center">
      <h2 class="text-2xl font-semibold">Buttons</h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <Button class="button-default" label="Default" />
        <Button label="Outlined" variant="outlined" />
        <Button label="Text" variant="text" />
        <Button label="Raised" severity="secondary" raised />
        <Button label="Danger" severity="danger" />
      </div>
    </div>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Toggle Button</h2>
      <ToggleButton onLabel="On" offLabel="Off" />
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Radio Buttons</h2>
      <div class="flex gap-6 justify-center">
        <div class="flex items-center gap-2">
          <RadioButton inputId="ny" value="New York" />
          <label for="ny">New York</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="ldn" value="London" />
          <label for="ldn">London</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="tok" value="Tokyo" />
          <label for="tok">Tokyo</label>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Input Text</h2>
      <div class="flex flex-col gap-4 items-center">
        <InputText class="bg-white text-gray-800" placeholder="Simple input" />
        <InputText placeholder="With icon" class="p-input-icon-left">
          <i class="pi pi-user" />
        </InputText>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Card</h2>
      <Card>
        <template #title>PrimeVue Card</template>
        <template #subtitle>Minimal example</template>
        <p>
          This is a simple card. You can put any content here, even buttons:
        </p>
        <template #footer>
          <div class="flex gap-2 justify-center">
            <Button label="Accept" />
          </div>
        </template>
      </Card>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Checkbox & Switch</h2>
      <div class="flex flex-col gap-4 items-center">
        <div class="flex items-center gap-2">
          <Checkbox inputId="accept" binary />
          <label for="accept">Accept terms</label>
        </div>
        <div class="flex items-center gap-2">
          <InputSwitch />
          <span>Dark Mode</span>
        </div>
      </div>
    </section>
  <div class="max-w-3xl mx-auto py-20 px-6 text-center text-gray-800 space-y-12">

    <section class="space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">This is a Heading 1</h1>
      <h2 class="text-3xl font-semibold tracking-tight">This is a Heading 2</h2>
      <h3 class="text-2xl font-medium tracking-tight">This is a Heading 3</h3>
    </section>

    <section class="space-y-6">
      <p class="text-base leading-relaxed">
        This is a normal paragraph. You can <b>bold</b> text for emphasis,
        <i>italicize</i> for tone, or even <u>underline</u> something important.
      </p>

      <p class="text-base leading-relaxed">
        You can also <mark class="bg-yellow-200 px-1">highlight</mark> text,
        use <small class="text-sm text-gray-500">smaller annotations</small>,
        or include inline code like <code class="bg-gray-100 px-1 rounded text-sm">npm run dev</code>.
      </p>
    </section>
<section>
  <p class="" >
     is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</section>
    <section class="space-y-3">
      <blockquote class="italic text-lg text-gray-600 border-l-4 border-gray-300 pl-4 inline-block">
        "Elegance is when the inside is as beautiful as the outside."
      </blockquote>
      <p class="text-sm text-gray-500">— Coco Chanel</p>
    </section>

    <section class="space-y-4">
      <h3 class="text-2xl font-medium">List example</h3>
      <ul class="list-disc list-inside space-y-2 text-left mx-auto inline-block">
        <li>High-quality leather shoes</li>
        <li>Handcrafted in Hungary</li>
        <li>Available for nationwide delivery</li>
      </ul>
    </section>


  </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import ToggleButton from "primevue/togglebutton";
import RadioButton from "primevue/radiobutton";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import InputSwitch from "primevue/inputswitch";
</script>

<style scoped></style>
