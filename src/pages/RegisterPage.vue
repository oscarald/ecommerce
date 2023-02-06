<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import logo from "src/assets/logo-sii-pi-verde.svg";

const $q = useQuasar();
const name = ref("");
const email = ref("");
const password = ref("");

const register = async() => {
  try {
    const user = await api.post("users", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log(user.data);
    welcome();
  } catch (error) {
    console.log(error.response?.data?.error);
    errorNotify(error.response?.data?.error);
  }
}

const welcome = () => {
  $q.notify({
    message: "Bienvenido",
    color: "secondary",
  });
};
const errorNotify = (err) => {
  $q.notify({
    message: err,
    color: "red",
  });
};
</script>

<template>
  <q-page
    class="window-height window-width row justify-center items-center bg-positive"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 400px">
          <q-card-section class="bg-accent text-white text-center">
            <div>
              <img :src="logo" style="max-height: 75px" />
              <p class="text-h5 text-bold">Ingresa tus datos</p>
            </div>
          </q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="register">
            <q-card-section>
              <q-input
                square
                clearable
                v-model="name"
                type="text"
                label="Nombre"
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
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                square
                clearable
                v-model="password"
                type="password"
                label="Contraseña"
                :rules="[
                  (val) =>
                    val.length >= 6 ||
                    'La contraseña debe tener al menos 6 caracteres',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
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
                label="Registrar"
              />
            </q-card-actions>
          </q-form>
          <q-card-section class="text-center q-pa-sm">
            <q-btn
              size="1rem"
              padding="xs"
              no-caps
              flat
              text-color="grey-7"
              class="text-bold"
              to="/login"
              label="Volver al login"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
