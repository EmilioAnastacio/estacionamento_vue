<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Movimentação</h1>
    </div>

    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Veiculo:</label>
            <input type="text" class="form-control" placeholder="Veiculo" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Condutor:</label>
            <input type="text" class="form-control" placeholder="Condutor" id="recipient-name">
        </div>
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/movimentacao">
        <button type="button" class="btn btn-success">Voltar</button>
    </router-link>
    <button type="submit" class="btn btn-success mt-2 mb-2"> Cadastrar</button>
    <!-- <button type="submit" class="btn btn-success mt-2 mb-2" @click="onClickCadastrar()"> Cadastrar</button> -->
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
    name: 'MarcaCadastrar',
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
  