<script setup>
import { ref, onMounted } from "vue";
import { useIndexStore } from "src/stores/index-store";

import almuerzo from "src/assets/images/icons/almuerzo.png";
import bebidas from "src/assets/images/icons/bebidas calientes.png";
import cafe from "src/assets/images/icons/cafe-organico.png";
import embotellados from "src/assets/images/icons/embotellados.png";
import jugos from "src/assets/images/icons/jugos.png";
import masitas from "src/assets/images/icons/masitas.png";
import mates from "src/assets/images/icons/mates-embolsados.png";
import miel from "src/assets/images/icons/miel.png";
import souvenir from "src/assets/images/icons/souvenir.png";
import te from "src/assets/images/icons/te-embolsado.png";

const indexStore = useIndexStore();
onMounted(() => {
  indexStore.getIndexCategories();
});
</script>

<template>
  <p class="text-h4 text-center q-pt-sm">
    <span class="text-bold">Últimos</span> tus productos
  </p>
  <p class="text-center" v-if="indexStore.loadingcat">
    <q-spinner-orbit color="primary" size="4em" />
  </p>
  <div class="row justify-center">
    <div class="col-3" v-for="cat in indexStore.categories" :key="cat.name">
      <div class="flex column items-center">
        <q-btn flat rounded :class="indexStore.namecat == cat.name ? 'bg-primary' : null" @click="indexStore.getIndexProducts(cat._id, cat.name)">
          <q-avatar rounded >
            <q-img :src="cat.imgUrl" width="50px" />
          </q-avatar>
        </q-btn>

        <div class="text-h6">{{ cat.name }}</div>
      </div>
    </div>
  </div>
</template>

<style></style>
