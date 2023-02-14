<script setup>
import Hero from "src/components/Hero.vue";
import Choose from "src/components/Choose.vue";
import Products from "src/components/Inproducts.vue";
import { useIndexStore } from "src/stores/index-store";
const indexStore = useIndexStore();
</script>

<template>
  <q-page class="bg-positive">
    <Hero />
    <Choose />
    <p class="text-center" v-if="indexStore.loading">
      <q-spinner-orbit color="primary" size="4em" />
    </p>
    <p class="text-center" v-if="!indexStore.loading && indexStore.products.length == 0">
      <div class="text-h6 text-bold">No hay productos</div>
    </p>
    <div style="max-width: 1250px; margin: 0 auto;" class="flex flex-center">
      <div class="row q-pt-md" style="grid-gap: 20px 0px;">
        <Products />
      </div>
    </div>
  </q-page>
</template>
