<script setup>
import { ref, onMounted, watch } from "vue";
import NewProduct from "src/admin/components/NewProduct.vue"
import { useDashboardStore } from "src/stores/dashboard-store";

const saleStore = useDashboardStore();
onMounted(() => {
  saleStore.getProducts();
});
const rows = ref([]);
const show_dialog = ref(false)
const data = ref({})

watch(
  () => saleStore.products,
  () => {
    rows.value = saleStore.products.map((product) => {
      return {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.imgUrl,
        id: product._id,
      };
    });
  }
);
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre del Producto",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "description",
    align: "left",
    label: "Descripcion",
    field: "description",
    sortable: true,
  },
  { name: "price", label: "Precio", field: "price", align: "left",sortable: true, },
  { name: "image", label: "URL de la imagen", field: "image", align: "left", style: "max-width: 100px; overflow:hidden;"},
  { name: "id", label: "Id", field: "id", align: "left" },
  { name: "actions", label: "Acciones", field: "", align: "center" },
];

const editRow = (props) => {
  data.value.name = props.name
  data.value.description = props.description
  data.value.image = props.image
  data.value.price = props.price
  data.value.id = props.id
  show_dialog.value = true
};
const updateRow = () => {
  saleStore.updateProducts(data.value.id, data.value.name, data.value.description, data.value.price, data.value.image)
}

</script>

<template>
  <div class="q-ma-lg"><NewProduct/></div>
  <div class="q-pa-md">
    <q-table
      title="Productos"
      :rows="rows"
      :columns="columns"
      :loading="saleStore.loading"
      row-key="name"
      :visible-columns="['name', 'description', 'price', 'image', 'actions']"
      :rows-per-page-options="[10, 20, 30]"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">

          <div>

            <q-btn
              dense
              flat
              color="primary"
              @click="editRow(props.row)"
              label="Editar"
            ></q-btn>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="show_dialog">
      <q-card style="width: 600px; max-width: 60vw">
        <q-card-section>
          <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          <div class="text-h6">Editar Producto</div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Nombre del Producto</q-item-label>
                  <q-input dense outlined v-model="data.name" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Descripción</q-item-label>
                  <q-input dense outlined v-model="data.description" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Precio</q-item-label>
                  <q-input dense outlined v-model="data.price" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">URL de la imagen</q-item-label>
                  <q-input dense outlined v-model="data.image" />
                </q-item-section>
              </q-item>


            </q-list>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-card-actions>
            <q-btn
              flat
              label="Cancel"
              color="warning"
              dense
              v-close-popup
            ></q-btn>
            <q-btn
              flat
              label="OK"
              color="primary"
              dense
              v-close-popup
              @click="updateRow"
            ></q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
