<template>
    <NavBar></NavBar>
  
  <div class="container">
    <div class="row align-items-center">
      <h2 class="col">Lista de Marcas</h2>
      <button type="button" class="btn btn-success col">Cadastrar Marca</button>
    </div>
  
  </div>
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col" class="p-2">#</th>
        <th scope="col" class="p-2">Nome da Marca</th>
  
      </tr>
    </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Fiat</td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  <style scoped>
  
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'VeiculoListaView',
  components: {
    NavBar,
  },
});
  </script>