<script setup>
import { ref, onMounted, watch } from "vue";
import { useDashboardStore } from "src/stores/dashboard-store";

const dashboardStore = useDashboardStore();
onMounted(() => {
  dashboardStore.getUsers();
});
const rows = ref([]);

const data = ref({})

watch(
  () => dashboardStore.users,
  () => {
    rows.value = dashboardStore.users.map((user) => {
      return {
        name: user.name,
        email: user.email,
        isadmin: user.isadmin,
        id: user._id,
      };
    });
  }
);
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre de usuario",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "email",
    align: "left",
    label: "Correo electrónico",
    field: "email",
    sortable: true,
  },
  {
    name: "isadmin",
    align: "left",
    label: "¿El usuario es administrador?",
    field: "isadmin",
    sortable: true,
  },

];


</script>

<template>

  <div class="q-pa-md">
    <q-table
      title="Usuarios"
      :rows="rows"
      :columns="columns"
      :loading="dashboardStore.loading"
      row-key="name"

    >

    </q-table>


  </div>
</template>
