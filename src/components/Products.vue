<script setup>
import Product from "src/components/Product.vue";
import { useIndexStore } from "src/stores/index-store";
import { onMounted } from "vue";
const indexStore = useIndexStore();
onMounted(() => {
  indexStore.getIndexProducts();
});
//console.log(indexStore.products)
</script>

<template>

  <div
    v-for="prod in indexStore.products"
    :key="prod.id"
    class="col-12 col-sm-6 col-md-3 flex justify-center q-px-sm"
  >
    <Product :prod="prod" />
  </div>
</template>

<style></style>
