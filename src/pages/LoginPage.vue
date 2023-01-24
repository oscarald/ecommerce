<script setup>
import { ref } from "vue";
import logo from "src/assets/logo-sii-pi-verde.svg";
const email = ref("");
const password = ref("");
</script>

<template>
  <q-page
    class="window-height window-width row justify-center items-center bg-positive"
  >
    <div class="column q-pa-lg">
      <div class="flex column">


        <q-card square class="shadow-24" style="width: 400px; height: 600px">
          <q-card-section class="bg-accent text-white text-center">
            <div>
          <img :src="logo" style="max-height: 75px" />
          <p class="text-h4 text-bold">Ingresa a tu cuenta</p>
          <div><span te>¿Todavía no estas registrado?</span> Registrate</div>
        </div>

          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
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
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="primary"
              class="full-width text-white"
              label="Ingresa"
            />
          </q-card-actions>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md flex justify-center items-center">
              <span>Ingresa con tu cuenta de Google</span>
              <q-btn round color="secondary">
                <q-icon name="eva-google-outline" size="2rem" />
              </q-btn>

            </div>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">¿Olvidaste tu contraseña?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style></style>
