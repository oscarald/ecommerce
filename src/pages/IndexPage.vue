<script setup>
import Hero from "src/components/Hero.vue";
import Choose from "src/components/Choose.vue";
import Products from "src/components/Products.vue";
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
    <div class="row q-pt-md">
      <Products />
    </div>
  </q-page>
</template>
