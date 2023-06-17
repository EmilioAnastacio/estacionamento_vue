<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Estacionamento</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
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

  #NAVBAR{
    background-color: aqua;
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