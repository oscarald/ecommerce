<template>
  <q-layout view="hhh lpR lFr">
    <q-header
      elevated
      class="bg-accent text-secondary flex justify-around"
      style="min-height: 100px"
    >
      <q-btn clickable to="/" style="background: rgba(255,255,255,0.55);">
          <q-avatar rounded size="100px" >
            <q-img :src="logo" style="max-width: 95%; max-height: 50px;" />
          </q-avatar>
      </q-btn>
      <q-tabs>
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/shop" label="Tienda" />
        <q-route-tab to="/contact" label="Contacto" />
        <q-route-tab to="/login" label="Login" v-if="!authStore.token"/>

        <q-btn-dropdown auto-close stretch flat label="cuenta" v-if="authStore.token">
          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-btn flat no-caps to="/shop" label="Cerrar Sesión" @click="authStore.logout"/>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-btn flat no-caps to="/checkout" label="Finalizar Compra" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-btn flat no-caps to="/order" label="Mis Pedidos" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <!-- <q-btn
          color="secondary"
          icon="eva-heart-outline"
          @click="toggleLeftDrawer"
        /> -->
        <q-btn
          class="q-ml-md"
          color="secondary"
          icon="eva-shopping-cart-outline"
          @click="indexStore.changeToogle()"
        >
          <q-badge
            v-if="shoppingCartStore.cart.length !== 0"
            color="red"
            floating
            >{{ shoppingCartStore.cart.length }}</q-badge
          >
        </q-btn>
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="indexStore.toogle"
      side="right"
      overlay
      bordered
      :width="450"
    >
      <!-- drawer content -->
      <ShoppingCart />
    </q-drawer>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-blue-grey-10 text-white">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import ShoppingCart from "src/components/ShoppingCart.vue";
import Footer from "src/components/Footer.vue"
import { useShoppingStore } from "src/stores/shopping-cart-store";
import { useAuthStore } from "src/stores/auth-store";
import { useIndexStore } from "src/stores/index-store";
import logo from "src/assets/logo-sii-pi-verde.svg";
const shoppingCartStore = useShoppingStore();
const authStore = useAuthStore()
const indexStore = useIndexStore()

export default {
  components: {
    ShoppingCart,
    Footer
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      ShoppingCart,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      shoppingCartStore,
      authStore,
      indexStore,
      Footer,
      logo
    };
  },
};
</script>
