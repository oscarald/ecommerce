<script setup>
import { useQuasar } from "quasar";
import { ref, defineProps } from "vue";
import { useShoppingStore } from "src/stores/shopping-cart-store";
const shoppingCartStore = useShoppingStore();
const $q = useQuasar();

const props = defineProps({
  prod: {
    type: Object,
  },
});

const stars = ref(5);
const showNotif = () => {
  $q.notify({
    message: "Producto añadido correctamente",
    color: "primary",
    timeout: 1500,
  });
};
</script>

<template>
  <q-card class="my-card">
    <q-img :src="props.prod.imgUrl" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h5 ellipsis text-bold text-center">
          <q-btn
            flat
            no-caps
            size="22px"
            :label="props.prod.name"
            style="font-weight: bold"
            :to='{ name: "single", params: {id: props.prod._id} }'
          />
        </div>
      </div>
      <div class="row justify-center">
        <q-rating v-model="props.prod.rate" :max="5" size="32px" disable />
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none flex justify-around">
      <div class="text-h6 text-bold">{{ props.prod.price }} Bs.</div>
      <q-btn
        color="primary"
        icon="eva-shopping-cart-outline"
        @click="shoppingCartStore.addShoppingCart(props.prod), showNotif()"
      />
    </q-card-section>
  </q-card>
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
