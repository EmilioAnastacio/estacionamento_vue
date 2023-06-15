<template>
  <nav class="navbar navbar-expand-lg bg-azul">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Estacionamento</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Movimentação</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Condutor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Veiculo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Marca</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Modelo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Configuração</a>
        </li>
      </ul>
      <router-link to="/marca"> <button type="button" class="btn">SAIR</button>  </router-link>
    </div>
  </div>
</nav>
</template>

<style lang="scss">

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