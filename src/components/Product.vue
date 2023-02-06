<script setup>
import { ref,defineProps } from 'vue';

const props = defineProps({
    prod:{
        type: Object
    }
})

const stars = ref(5)
</script>

<template>

  <q-card class="my-card">
      <q-img :src="props.prod.imgUrl" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h5 ellipsis text-bold text-center">
            {{ props.prod.name }}
          </div>
        </div>
        <div class=" row justify-center">
          <q-rating v-model="props.prod.rate" :max="5" size="32px" />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none flex justify-around ">
        <div class="text-h6 text-bold">
          {{ props.prod.price }} Bs.
        </div>
        <q-btn color="primary" icon="eva-shopping-cart-outline" />

      </q-card-section>

    </q-card>
</template>



<style scoped>
.my-card{
  width: 100%;
  max-width: 300px;
}

</style>
