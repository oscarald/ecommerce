<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";
import { useIndexStore } from "src/stores/index-store";
import { useShoppingStore } from "src/stores/shopping-cart-store";
const route = useRoute();
const $q = useQuasar();
const shoppingCartStore = useShoppingStore();
const indexStore = useIndexStore();
const id = route.params.id;
console.log(id);
onMounted(() => {
  indexStore.getSingleProduct(id);
  console.log(indexStore.singleProduct);
});
const showNotif = () => {
  $q.notify({
    message: "Producto añadido correctamente",
    color: "primary",
    timeout: 1500,
  });
};
</script>

<template>
  <q-page
    class="window-height window-width row justify-center items-center bg-positive"
  >
    <div>
      <p class="text-center" v-if="indexStore.loading">
      <q-spinner-orbit color="primary" size="4em" />
    </p>
      <q-card class="my-card" v-else>
        <q-card-section horizontal>
          <q-img :src="indexStore.singleProduct.imgUrl" style="width: 300px" />

          <q-card-section>
            <div class="no-wrap items-center">
              <div class="text-h6 ellipsis">
                {{ indexStore.singleProduct.name }}
              </div>
              <div
                class="text-accent text-subtitle2 bg-secondary flex flex-center q-pa-sm"
                style="display: inline-flex; border-radius: 10%"
              >
                <q-icon name="category" class="q-mr-sm" />
                <span class="text-bold">{{
                  indexStore.singleProduct.name
                }}</span>
              </div>
              <div class="text-subtitle1 text-bold">
                {{ indexStore.singleProduct.price }} Bs.
              </div>
              <div class="text-caption text-grey">
                {{ indexStore.singleProduct.description }}
              </div>
            </div>

            <q-rating
              v-model="indexStore.singleProduct.rate"
              :max="5"
              size="32px"
              disable
            />
            <q-btn
              color="primary"
              icon="eva-shopping-cart-outline"
              @click="
                shoppingCartStore.addShoppingCart(indexStore.singleProduct), showNotif()
              "
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped></style>
