<script setup>
import almuerzo from "src/assets/images/icons/almuerzo.png";
import bebidas from "src/assets/images/icons/bebidas calientes.png";
import cafe from "src/assets/images/icons/cafe-organico.png";
import embotellados from "src/assets/images/icons/embotellados.png";
import jugos from "src/assets/images/icons/jugos.png";
import masitas from "src/assets/images/icons/masitas.png";
import mates from "src/assets/images/icons/mates-embolsados.png";
import miel from "src/assets/images/icons/miel.png";
import souvenir from "src/assets/images/icons/souvenir.png";
import te from "src/assets/images/icons/te-embolsado.png";
</script>

<template>
  <p class="text-h4 text-center">
    <span class="text-bold">Escoge</span> tus productos
  </p>
  <div class="row justify-center">
    <div class="col-3">
      <div class="flex column items-center" >

        <q-img
          :src="almuerzo"
          width="50px"
          class="bg-primary "
          />

        <div class="text-h6" >Almuerzo</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="bebidas"
          width="50px"
          />
        <div class="text-h6">Bebidas Calientes</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="cafe"
          width="50px"
          />
        <div class="text-h6">Café Órganico</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="embotellados"
          width="50px"
          />
        <div class="text-h6">Embotellados</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="jugos"
          width="50px"
          />
        <div class="text-h6">Jugos</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="masitas"
          width="50px"
          />
        <div class="text-h6">Masitas</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="mates"
          width="50px"
          />
        <div class="text-h6">Mates Embolsados</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="miel"
          width="50px"
          />
        <div class="text-h6">Miel</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="souvenir"
          width="50px"
          />
        <div class="text-h6">Souvernirs</div>
      </div>
    </div>
    <div class="col-3">
      <div class="flex column items-center">
        <q-img
          :src="te"
          width="50px"
          />
        <div class="text-h6">Mates a granel</div>
      </div>
    </div>
  </div>
</template>

<style></style>
