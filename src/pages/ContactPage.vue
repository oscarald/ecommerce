<script setup>
import logo from "src/assets/logo-sii-pi-verde.svg";
import { ref } from "vue";
import { useQuasar } from "quasar";

const name = ref();
const email = ref();
const message = ref();
const $q = useQuasar();

const send = () => {
  $q.notify({
    message: `Muchas gracias por enviar el mensaje ${name.value}`,
    color: "secondary",
  });
};
</script>

<template>
  <q-page class="bg-positive q-py-lg q-px-xs">
    <div class="flex flex-center">
      <q-card class="my-card" style="max-width: 64rem">
        <q-card-section horizontal>
          <q-img
            class="col"
            src="https://res.cloudinary.com/de8brtp2o/image/upload/v1676319430/siipi/245382486_2497284740403403_8333160186189034704_n_hsngaj.png"
          >
            <div
              class="absolute-full text-h3 text-center flex flex-center"
              style="font-family: 'Caveat'"
            >
              En SiiPi comer saludable es Delicioso !
            </div>
          </q-img>

          <q-card-section>
            <div class="q-mt-md">
              <q-card square class="shadow-24" style="width: 400px">
                <q-card-section class="bg-accent text-white text-center">
                  <div>
                    <img :src="logo" style="max-height: 75px" />
                    <p class="text-h5 text-bold">Contáctate con Nosotros</p>
                  </div>
                </q-card-section>
                <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="send">
                  <q-card-section>
                    <q-input
                      square
                      clearable
                      v-model="name"
                      type="text"
                      label="Nombre"
                      :rules="[(val) => !!val || 'Este campo es obligatorio']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                    <q-input
                      square
                      clearable
                      v-model="email"
                      type="email"
                      label="Correo Electrónico"
                      :rules="[(val) => !!val || 'Este campo es obligatorio']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="email" />
                      </template>
                    </q-input>

                    <q-input
                      v-model="message"
                      type="textarea"
                      label="Mensaje"
                      :rules="[(val) => !!val || 'Este campo es obligatorio']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="chat" />
                      </template>
                    </q-input>
                  </q-card-section>
                  <q-card-actions class="q-px-lg">
                    <q-btn
                      unelevated
                      type="submit"
                      size="lg"
                      color="primary"
                      class="full-width text-white"
                      label="Enviar Mensaje"
                    />
                  </q-card-actions>
                </q-form>
              </q-card>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
.my-card {
  width: 100%;
}
</style>
