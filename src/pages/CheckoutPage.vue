<script setup>
import { ref } from "vue";
import { useShoppingStore } from "src/stores/shopping-cart-store";
import { useCheckoutStore } from "src/stores/checkout-store";
import { useAuthStore } from "src/stores/auth-store";
const shoppingCartStore = useShoppingStore();
const checkoutStore = useCheckoutStore()
const authStore = useAuthStore()

const step = ref(1);
const name = ref("");
const lastname = ref("");
const address = ref("");
const phone = ref("");
const city = ref("");
const payment = ref("");
const options = ["Santa Cruz", "Cochabamba", "La Paz"];
</script>

<template>
  <div class="q-pa-md flex flex-center">
    <div class="flex-center">
      <div
        class="text-h5 text-center text-bold"
        v-if="shoppingCartStore.cart.length == 0"
      >
        No hay productos en el Carrito.
      </div>
      <q-stepper v-model="step" ref="stepper" color="primary" animated v-else>
        <q-step
          :name="1"
          title="Datos de envio"
          icon="eva-home-outline"
          caption="Direccion"
          :done="step > 1"
        >
          <div class="flex flex-center">
            <q-input
              filled
              v-model="name"
              label="Nombre"
              style="width: 50%"
              class="q-pr-lg"
              :rules="[
                (val) => !!val || 'Este campo es obligatorio',
                (val) => val.length >= 3 || 'Este campo es obligatorio',
              ]"
              lazy-rules
            />
            <q-input
              filled
              v-model="lastname"
              label="Apellido"
              style="width: 50%"
              :rules="[
                (val) => !!val || 'Este campo es obligatorio',
                (val) => val.length >= 3 || 'Este campo es obligatorio',
              ]"
              lazy-rules
            />
          </div>
          <div class="flex flex-center q-pt-sm">
            <q-input
              filled
              v-model="phone"
              label="Teléfono"
              style="width: 50%"
              class="q-pr-lg"
              :rules="[
                (val) => !!val || 'Este campo es obligatorio',
                (val) => val.length >= 3 || 'Este campo es obligatorio',
              ]"
              lazy-rules
            />
            <q-select
              filled
              v-model="city"
              :options="options"
              label="Ciudad"
              style="width: 50%"
            />
          </div>
          <q-input
            filled
            v-model="address"
            label="Dirección"
            class="q-py-sm"
            :rules="[
              (val) => !!val || 'Este campo es obligatorio',
              (val) => val.length >= 3 || 'Este campo es obligatorio',
            ]"
            lazy-rules
          />
        </q-step>

        <q-step
          :name="2"
          title="Método de Pago"
          caption="Seleccione"
          icon="eva-credit-card-outline"
          :done="step > 2"
        >
          <q-list>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="payment" val="deposito" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Depósito Bancario</q-item-label>
                <q-item-label caption
                  >Debe realizar el déposito a la cuenta del banco Únion
                  1-2726987 y mandar el comprobante al Whatsapp
                  7148563</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="payment" val="card" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Tarjeta Crédito o Débito</q-item-label>
                <q-item-label caption
                  >Puede pagar con tarjeta de credito o debito
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar top>
                <q-radio v-model="payment" val="qrpay" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Pago con QR</q-item-label>
                <q-item-label>
                  <q-img
                    src="https://res.cloudinary.com/de8brtp2o/image/upload/v1676171468/siipi/pagoqr_ovnu2r.jpg"
                    spinner-color="white"
                    style="width: 300px"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-step>

        <q-step :name="3" title="Finalizar" icon="eva-paper-plane-outline">
          <div class="text-h6">
            Muchas gracias por confiar en nosotros luego de verificar el pago
            procederemos a enviar su pedido inmediatamene
          </div>
          <q-btn
            color="grey-3"
            text-color="secondary"
            unelevated
            icon-right="eva-paper-plane-outline"
            label="Finalizar compra"
            @click="checkoutStore.finishPayment({name, lastname, phone, city, address, payment}, shoppingCartStore.cart, shoppingCartStore.total, authStore.user.id)"
          />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              v-if="step < 3"
              :label="step === 3 ? 'Finalizar' : 'Continuar'"
              :disable="
                name.length <= 3 ||
                lastname.length <= 3 ||
                phone.length <= 3 ||
                address.length <= 3
              "
            />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Atras"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
