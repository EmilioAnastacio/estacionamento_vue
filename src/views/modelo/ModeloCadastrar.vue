<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <router-link class="col col-md-1" to="/modelo">
        <button type="button" class="btn btn-success">Voltar</button>
      </router-link>
      <h1 class="col-md-10 mt-2">Cadastrar Modelo</h1>
    </div>

    <div class="row align-items-center">

    <div class="nome col col-md-6">
      <label for="recipient-name" class=" row m-auto col-form-label">Modelo:</label>
      <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name">
    </div>
    <div class="nome col col-md-6">
      <label for="recipient-name" class=" row m-auto col-form-label">Modelo:</label>
      <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name">
    </div>

    </div>


    <div class="col">
      <button type="submit" class="btn btn-success mt-2 mb-2"> Cadastrar</button>
    </div>
  </div>
  
  </template>
  
  
  <style scoped>
  
  .corTabela{
    background-color: #ffffff;
    border-radius: 10px;
  }
  
  </style>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
  import adicionaMarca from '@/components/adicionaMarca.vue';
  //import { MarcaClient } from '@/client/marca.client';
  //import { Marca } from '@/model/marca';
  
  import { onMounted, reactive, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'ModeloCadastrar',
    data() {
      return {
        abreAModal: false,
      };
    },
    components: {
      NavBar,
      adicionaMarca,
    },
  
  
  });
  
  </script>
  