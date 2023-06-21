<template>

  <nav class="navbar navbar-expand-lg bg-body-navCor mb-3 navCor">
  <div class="container-fluid">
    <img src="../assets/sas-ma-product-f-18-avionics-teaser-2500x1700-removebg-preview.png" alt="" style="height: 40px; width: auto;">
    <!-- <i class="bi-airplane-engines-fill" style="font-size: 25px; color: rgb(187, 187, 187); margin-right: 1%;"></i> -->
    <a class="navbar-brand" href="/">FlyCar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/movimentacao">Movimentação</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/condutor">Condutor</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/veiculo">Veiculo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/marca">Marca</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/modelo">Modelo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/configuracao">Configuração</router-link>
        </li>
      </ul>

      <button type="button" class="btn btn-danger">Fechar</button>

    </div>
  </div>
</nav>
</template>

<style lang="scss">

.navCor{
  background-color: rgb(224, 224, 224);
}

.bg-azul{
  background-color: rgb(250, 100, 255);
}
  li{
    margin-left: 5%;
  }
</style>



<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  props: {
    msg: String,
  },
});
</script>