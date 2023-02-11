<template>
  <q-layout view="hhh lpR lFr">
    <q-header elevated class="bg-accent text-secondary flex justify-around" style="min-height: 100px;">
      <q-item clickable to="/">
        <q-item-section avatar>
          <q-avatar size="75px">
            <img src="src/assets/logo-sii-pi-verde.svg"/>
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-tabs>
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/shop" label="Tienda" />
        <q-route-tab to="/contact" label="Contacto" />
        <q-route-tab to="/login" label="Login" />
        <q-btn  color="secondary" icon="eva-heart-outline" @click="toggleLeftDrawer" />
        <q-btn  class="q-ml-md" color="secondary" icon="eva-shopping-cart-outline" @click="toggleRightDrawer">
          <q-badge v-if="shoppingCartStore.cart.length !== 0" color="red" floating>{{ shoppingCartStore.cart.length }}</q-badge>
        </q-btn>
      </q-tabs>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered :width="450">
      <!-- drawer content -->
      <ShoppingCart/>
    </q-drawer>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import ShoppingCart from "src/components/ShoppingCart.vue";
import { useShoppingStore } from "src/stores/shopping-cart-store";
const shoppingCartStore = useShoppingStore()

export default {
  components: {
    ShoppingCart,
  },
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      ShoppingCart,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      shoppingCartStore
    };
  },
};
</script>
