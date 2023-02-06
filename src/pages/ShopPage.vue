<script setup>
import { ref, onMounted } from "vue";
import Product from "src/components/Product.vue";
import { useShopStore } from "src/stores/shop-store";

const shopStore = useShopStore();
const price = ref({ min: 10, max: 100 });
const search = ref("");

const onRequest = (page) => {
  //console.log(page)
  shopStore.getProducts(page);
};

const filterByCategory = (name) => {
  console.log(name)
}

onMounted(() => {
  shopStore.getProducts();
  shopStore.getCategories();
});
</script>

<template>
  <div class="row q-px-xl">
    <div class="col-3">
      <div class="bg-blue-grey-1 q-pa-xl q-mt-md" style="width: 20rem">
        <p class="text-h6">SELECCIONE EL PRECIO</p>

        <div style="max-width: 10em" class="">
          <q-range v-model="price" :min="10" :max="150" label />
          <div class="text-subtitle1 text-bold">
            Precio: {{ price.min }} - {{ price.max }} Bs.
          </div>
          <q-btn color="primary" label="Filtrar" />
        </div>
      </div>
      <div class="bg-blue-grey-1 q-pa-xl q-mt-md" style="width: 20rem">
        <p class="text-h6">CATEGORÍAS</p>
        <div class="column items-start" v-for="cat in shopStore.categories" :key="cat._id">
          <q-btn
            flat
            color="accent"
            :label="cat.name"
            icon="eva-chevron-right-outline"
            @click="filterByCategory(cat.name)"
          />

        </div>
      </div>
    </div>
    <div class="col">
      <div class="row justify-end md:justify-center">
        <div style="max-width: 20rem" class="q-mt-md bg-blue-grey-1 q-px-md">
          <q-input v-model="search" label="Buscar Producto">
            <template v-slot:after>
              <q-btn round flat icon="eva-search-outline" />
            </template>
          </q-input>
        </div>
        <div>
          <div class="row q-mt-md">
            <div class="text-h6 q-pl-xl">Ordenar por:</div>
            <q-btn-dropdown color="primary" label="Ordenar">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Ordenar por puntuación</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label
                      >Ordenar por precio: Menor a mayor</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label
                      >Ordenar por precio: Mayor a menor</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Ordenar por últimos productos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
      <div class="row">

        <div
          v-for="prod in shopStore.products"
          :key="prod.id"
          class="col-12 col-sm-6 col-md-4 q-pa-lg flex justify-center"
        >
          <Product :prod="prod" />
        </div>
        <div class="q-pa-lg flex flex-center col-12">
          <q-pagination
            v-model="shopStore.actualPage"
            :max="shopStore.totalPages"
            direction-links
            size="20px"
            @click="onRequest(shopStore.actualPage)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
