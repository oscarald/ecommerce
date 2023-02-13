<script setup>
import { ref } from "vue";
import { useDashboardStore } from "src/stores/dashboard-store";

const dashboardStore = useDashboardStore();

const show_dialog = ref(false);
const data = ref({});
const image = ref(null);
const imageUrl = ref("");
const updateFile = () => {
  imageUrl.value = URL.createObjectURL(image.value[0]);
}

</script>

<template>
  <div>
    <q-btn
      color="primary"
      text-color="white"
      label="Nueva Categoria"
      @click="show_dialog = !show_dialog"
    />
  </div>
  <q-dialog v-model="show_dialog">
    <q-card style="width: 600px; max-width: 60vw">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="text-h6">Nuevo Producto</div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Nombre de la categoría</q-item-label>
                <q-input dense outlined v-model="data.name" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">URL de la imagen</q-item-label>
                <q-input dense outlined v-model="data.image" />
                <div>
                  <q-img
                    :src="data.image"
                    spinner-color="white"
                    style="height: 140px; max-width: 150px"
                  />
                </div>
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
            @click="dashboardStore.newCategory(data.name, data.image)"
          ></q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
