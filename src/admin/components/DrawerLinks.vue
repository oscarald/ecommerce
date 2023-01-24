<script setup>
import { ref } from "vue";

const pages = [{ name: "link", route: "/route1", icon: "123" }];
</script>

<template>
  <div>
    <q-item clickable v-ripple to="/admin">
      <q-item-section avatar>
        <q-icon name="eva-grid-outline" color="primary" size="1.5rem" />
      </q-item-section>

      <q-item-section class="text-body1 text-weight-bold text-primary">Dashboard</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="/admin/products">
      <q-item-section avatar>
        <q-icon name="eva-shopping-bag-outline" color="primary" size="1.5rem" />
      </q-item-section>

      <q-item-section class="text-body1 text-weight-bold text-primary">Productos</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="/admin/category">
      <q-item-section avatar>
        <q-icon name="eva-list-outline" color="primary" size="1.5rem" />
      </q-item-section>

      <q-item-section class="text-body1 text-weight-bold text-primary">Categorías</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="/admin/customers">
      <q-item-section avatar>
        <q-icon name="eva-people-outline" color="primary" size="1.5rem" />
      </q-item-section>

      <q-item-section class="text-body1 text-weight-bold text-primary">Clientes</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="/admin/orders">
      <q-item-section avatar>
        <q-icon name="eva-book-outline" color="primary" size="1.5rem" />
      </q-item-section>

      <q-item-section class="text-body1 text-weight-bold text-primary">Órdenes</q-item-section>
    </q-item>


  </div>
</template>
