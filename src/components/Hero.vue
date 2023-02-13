<script setup>
import ima from "src/assets/images/portada.png"
import Button from "src/components/Button.vue"

</script>

<template>
  <div>
    <q-img :src="ima" style="max-height: 600px;">
          <div class="absolute-full flex items-center justify-around backcolor">
            <div class="flex column">
              <div class="text-h2 " style="font-family: 'Caveat';">Bienvenidos a SIIPI</div>
              <div class="text-h4  q-my-xl" style="font-family: 'Caveat';">Comer saludable es Delicioso !</div>
              <Button/>

            </div>
            <div></div>
          </div>
    </q-img>
  </div>
</template>



<style scoped >
.backcolor{
  background: rgba(3, 49, 21, 0.5);
}
</style>
