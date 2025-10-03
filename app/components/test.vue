<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold text-blue-600 underline mb-4">test</h1>

    <div class="flex items-center gap-2">
      <InputText v-model="inputValue" placeholder="Írd ide az adatot" />
      <Button label="Küldés" @click="submitForm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref as dbRef, push } from "firebase/database";

const inputValue = ref("");

const { $database } = useNuxtApp();

const submitForm = () => {
  if (!inputValue.value) {
    alert("Írj be valamit!");
    return;
  }

  const entriesRef = dbRef($database, "entries");
  const entry = {
    value: inputValue.value,
    createdAt: new Date().toISOString(),
  };

  push(entriesRef, entry);

  console.log("Beküldött adat:", entry);
  inputValue.value = "";
};
</script>


<style scoped></style>
