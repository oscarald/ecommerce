<script setup>
import { ref, onMounted } from "vue";
import Product from "src/components/Product.vue";
import { useShopStore } from "src/stores/shop-store";

const shopStore = useShopStore();
const price = ref({ min: 10, max: 100 });
const search = ref("");

const onRequest = (page) => {
  //console.log(page)
  switch (shopStore.filter) {
    case "all":
      shopStore.getProducts(page);
      break;
    case "cat":
      shopStore.filterByCategory(page);
      break;
    case "rate":
      shopStore.filterByRate(page);
      break;
    case "priceAsc":
      shopStore.filterByPrice(page, "asc");
      break;
    case "priceDesc":
      shopStore.filterByPrice(page, "desc");
      break;
    case "date":
      shopStore.filterByDate(page);
      break;
    case "between":
      shopStore.filterBetweenPrice(page, price.value.min, price.value.max);
      break;
    case "search":
      shopStore.searchProduct(page, search.value);
      break;
  }
};

const cleanFilter = () => {
  shopStore.changeFilter("all");
  shopStore.getProducts();
};

const filterByCategory = (id) => {
  shopStore.saveCategory(id);

  shopStore.changeFilter("cat");
  shopStore.filterByCategory();
};

const orderByRate = () => {
  shopStore.changeFilter("rate");
  shopStore.filterByRate();
};

const orderByPrice = (price) => {
  if (price == "asc") {
    shopStore.changeFilter("priceAsc");
    shopStore.filterByPrice(1, price);
  } else {
    shopStore.changeFilter("priceDesc");
    shopStore.filterByPrice(1, price);
  }
};

const orderByDate = () => {
  shopStore.changeFilter("date");
  shopStore.filterByDate();
};

const BetweenPrice = (min, max) => {
  shopStore.changeFilter("between");
  shopStore.filterBetweenPrice(1, min, max);
};

const filterBySearch = (search) => {
  shopStore.changeFilter("search");
  shopStore.searchProduct(1, search);
};

onMounted(() => {
  shopStore.getProducts();
  shopStore.getCategories();
});
</script>

<template>
  <div class="row q-px-xl">
    <div class="col-12 col-sm-3 justify-center">
      <div class="bg-blue-grey-1 q-pa-md q-mt-md" style="width: 18rem">
        <p class="text-h6">SELECCIONE EL PRECIO</p>

        <div style="max-width: 10em" class="">
          <q-range v-model="price" :min="1" :max="100" label />
          <div class="text-subtitle1 text-bold">
            Precio: {{ price.min }} - {{ price.max }} Bs.
          </div>
          <q-btn
            color="primary"
            label="Filtrar"
            @click="BetweenPrice(price.min, price.max)"
          />
        </div>
      </div>
      <div class="bg-blue-grey-1 q-py-md q-px-md q-mt-md" style="width: 18rem">
        <p class="text-h6">CATEGORÍAS</p>

        <div class="column items-start">
          <q-btn
            flat
            color="accent"
            label="Todas las Categorías"
            icon="eva-chevron-right-outline"
            @click="cleanFilter"
          />
        </div>

        <div
          class="column items-start"
          v-for="cat in shopStore.categories"
          :key="cat._id"
        >
          <q-btn
            flat
            color="accent"
            :label="cat.name"
            icon="eva-chevron-right-outline"
            @click="filterByCategory(cat._id, shopStore.actualPage)"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm">
      <div class="row justify-center sm:justify-end">
        <div style="max-width: 20rem" class="q-mt-md bg-blue-grey-1 q-px-md">
          <q-input v-model="search" label="Buscar Producto">
            <template v-slot:after>
              <q-btn
                round
                flat
                icon="eva-search-outline"
                @click="filterBySearch(search)"
              />
            </template>
          </q-input>
        </div>
        <div>
          <div class="row q-mt-md">
            <div class="text-h6 q-pl-xl">Ordenar por:</div>
            <q-btn-dropdown color="primary" label="Ordenar">
              <q-list>
                <q-item clickable v-close-popup @click="orderByRate">
                  <q-item-section>
                    <q-item-label>Ordenar por puntuación</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="orderByPrice('asc')">
                  <q-item-section>
                    <q-item-label
                      >Ordenar por precio: Menor a mayor</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="orderByPrice('desc')">
                  <q-item-section>
                    <q-item-label
                      >Ordenar por precio: Mayor a menor</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="orderByDate">
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
        <div style="width: 100%;">
          <p class="flex flex-center" v-if="shopStore.loading">
          <q-spinner-orbit color="primary" size="4em" />
        </p>
        </div>

        <div
          v-if="!shopStore.loading && shopStore.products.length == 0"
          class="col-12 flex justify-center"
        >
          <p class="text-h3">No hay Productos</p>
        </div>
        <div
          v-for="prod in shopStore.products"
          :key="prod.id"
          class="col-12 col-sm-6 col-md-4 q-pa-lg flex justify-center"
        >
          <Product :prod="prod" />
        </div>

        <div
          class="q-pa-lg flex flex-center col-12"
          v-if="shopStore.products.length > 0"
        >
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
