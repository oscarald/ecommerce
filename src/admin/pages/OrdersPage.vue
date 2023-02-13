<script setup>
import { ref, onMounted, watch } from "vue";
import { useDashboardStore } from "src/stores/dashboard-store";

const saleStore = useDashboardStore();
onMounted(() => {
  saleStore.getSales();
});
const rows = ref([]);

const options = ['Pendiente', 'Pago Verificado', 'Entregado']
watch(
  () => saleStore.sales,
  () => {
    rows.value = saleStore.sales.map((sale) => {
      return {
        name: `${sale.customer.name} ${sale.customer.name}`,
        amount: sale.amount,
        products: sale.cart.map((p) =>
          JSON.stringify(`( ${p.quantity} - ${p.name}) `).replace(/['"]+/g, "")
        ),
        status: `${sale.status}`,
        service: "Delivery",
        id: sale._id,
      };
    });
  }
);
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre del Cliente",
    align: "left",
    field: "name",
  },
  {
    name: "amount",
    align: "center",
    label: "Importe (Bs.)",
    field: "amount",
    sortable: true,
  },
  { name: "products", label: "Productos", field: "products", align: "left" },
  { name: "service", label: "Entrega", field: "service", align: "left" },
  { name: "status", label: "Estado de la orden", field: "status" },
  { name: "id", label: "Id", field: "id", align: "left" },
  { name: "actions", label: "Status", field: "", align: "center" },
];

const editRow = (props) => {
  saleStore.updateSales(props.id,props.status);
};
</script>

<template>
  <div>Órdenes de Venta</div>
  <div class="q-pa-md">
    <q-table
      title="Órdenes de Venta"
      :rows="rows"
      :columns="columns"
      :loading="saleStore.loading"
      row-key="name"
      :visible-columns="['name', 'products', 'service', 'actions']"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">

          <div>
            <q-select v-model="props.row.status" :options="options" label="Estado del pedido" />
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
  </div>
</template>
