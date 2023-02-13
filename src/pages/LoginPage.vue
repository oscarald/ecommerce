<script setup>
import { ref, watch } from "vue";
import logo from "src/assets/logo-sii-pi-verde.svg";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "src/stores/auth-store";
const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const $q = useQuasar();
const email = ref("admin@admin.com");
const password = ref("123456");
const err = ref("");
const clean = () => {
  err.value = "";
};
watch(() =>authStore.err, ()=>{
  if(authStore.err){
    errorNotify(authStore.err)
  }
})
watch(() =>authStore.token, ()=>{
  if(authStore.token){
    welcome(authStore.user.name);
    if(authStore.isAdmin){
      console.log("here")
      router.push({
      path: "/admin/",
    });
    } else{
      router.push({
        path: "/shop",
      });
    }
  }
})

const welcome = (name) => {
  $q.notify({
    message: `Bienvenido ${name}`,
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
      <div class="flex column">
        <q-card square class="shadow-24" style="width: 400px">
          <q-card-section class="bg-accent text-white text-center">
            <div>
              <img :src="logo" style="max-height: 75px" />
              <p class="text-h4 text-bold">Ingresa a tu cuenta</p>
              <div class="text-h6">
                <span>¿Todavía no estas registrado?</span>
                <q-btn
                  size="1.25rem"
                  padding="xs"
                  no-caps
                  flat
                  class="text-bold"
                  to="/register"
                  label="Regístrate"
                />
              </div>
            </div>
          </q-card-section>
          <q-form class="q-px-sm q-pt-xl" @submit="authStore.login(email,password)">
            <q-card-section>
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                label="Correo Electrónico"
                @keyup="clean"
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
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn
                unelevated
                type="submit"
                size="lg"
                color="primary"
                class="full-width text-white"
                label="Ingresa"
              />
            </q-card-actions>
          </q-form>
          <q-card-section v-if="err" class="text-center q-pa-sm">
            <p class="text-red text-bold text-h6">{{ err }}</p>
          </q-card-section>

          <q-card-section>
            <div
              class="text-center q-pa-md q-gutter-md flex justify-center items-center"
            >
              <span>Ingresa con tu cuenta de Google</span>
              <q-btn round color="secondary">
                <q-icon name="eva-google-outline" size="2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <q-btn
              size="1rem"
              padding="xs"
              no-caps
              flat
              text-color="grey-7"
              class="text-bold"
              to="/forgot"
              label="¿Olvidaste tu contraseña?"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style></style>
