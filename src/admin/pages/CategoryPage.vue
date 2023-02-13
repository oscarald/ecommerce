<script setup>
import { ref, onMounted, watch } from "vue";
import NewCategory from "src/admin/components/NewCategory.vue"
import { useDashboardStore } from "src/stores/dashboard-store";

const dashboardStore = useDashboardStore();
onMounted(() => {
  dashboardStore.getCategories();
});
const rows = ref([]);

const data = ref({})

watch(
  () => dashboardStore.categories,
  () => {
    rows.value = dashboardStore.categories.map((category) => {
      return {
        name: category.name,
        image: category.imgUrl,
        id: category._id,
      };
    });
  }
);
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre de la categoría",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "image",
    align: "left",
    label: "URL de la imagen",
    field: "image",
    sortable: true,
  },

];


</script>

<template>
  <div class="q-ma-lg"><NewCategory/></div>
  <div class="q-pa-md">
    <q-table
      title="Categorias"
      :rows="rows"
      :columns="columns"
      :loading="dashboardStore.loading"
      row-key="name"

    >

    </q-table>


  </div>
</template>
