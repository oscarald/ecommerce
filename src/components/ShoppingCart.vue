<script setup>
import { useShoppingStore } from "src/stores/shopping-cart-store";
import { useIndexStore } from "src/stores/index-store";
const shoppingCartStore = useShoppingStore()
const indexStore = useIndexStore()

</script>

<template>
  <div class="row">
    <div class="text-h5 text-center q-py-md text-bold col-10">Carrito de compras</div>
    <div class="col flex flex-center">
      <q-btn flat round color="primary" icon="eva-close-outline" size="md" @click="indexStore.changeToogle()"/>
    </div>
  </div>

  <q-separator />
  <div style="height: 80%; overflow-x: hidden; overflow-y: scroll">
    <div class="text-h5 text-center text-bold" v-if="shoppingCartStore.cart.length == 0">No hay productos en el Carrito.</div>
    <div class="row q-ma-md" v-for="product in shoppingCartStore.cart" v-else>
      <div class="col-3 flex flex-center">
        <q-img
          :src="product.imgUrl"
        />
      </div>
      <div class="col-6 q-mx-xs q-pl-xs">
        <div><q-btn no-caps :label="product.name" flat /></div>
        <div>
          <div class="q-py-sm text-center">
            <span class="q-pr-sm text-subtitle1">Cantidad</span>
            <q-btn
              icon="eva-arrow-ios-upward-outline"
              size="md"
              padding="none"
              @click="shoppingCartStore.incrementQuantity(product)"
            />
            <span class="q-px-sm text-subtitle1 text-weight-medium">{{ product.quantity }}</span>
            <q-btn
              icon="eva-arrow-ios-downward-outline"
              size="md"
              padding="none"
              :disable="product.quantity == 1"
              @click="shoppingCartStore.decrementQuantity(product)"
            />
          </div>

          <q-btn
            padding="5px 10px"
            icon="eva-trash-2-outline"
            label="Quitar producto"
            no-caps
            outline
            @click="shoppingCartStore.deleteProduct(product)"
          />
        </div>
      </div>
      <div class="col flex flex-center text-subtitle1 text-weight-medium">
        {{ product.price*product.quantity }} Bs.
      </div>

    </div>
  </div>
  <q-separator />
  <div class="flex items-end q-pa-md column">
    <div class="text-h4">Total {{ shoppingCartStore.total }} Bs.</div>
    <div>
      <q-btn
        icon-right="eva-shopping-bag-outline"
        size="md"
        color="primary"
        label="Ir a Pagar"
        to="/checkout"
      />
    </div>
  </div>
</template>

<style></style>
