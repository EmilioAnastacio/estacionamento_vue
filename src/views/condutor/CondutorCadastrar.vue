<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <router-link class="col col-md-1" to="/condutor">
        <button type="button" class="btn btn-success">Voltar</button>
      </router-link>
      <h1 class="col-md-10 mt-2">Cadastrar Condutor</h1>
    </div>

    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Nome:</label>
            <input type="text" class="form-control" placeholder="Nome do condutor" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Cpf:</label>
            <input type="text" class="form-control" placeholder="Cpf" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Telefone:</label>
            <input type="text" class="form-control" placeholder="Telefone" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Pago:</label>
            <input type="text" class="form-control" placeholder="Tempo Pago" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Desconto:</label>
            <input type="text" class="form-control" placeholder="Tempo Desconto" id="recipient-name">
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
  
    methods:{
  
      abreModal(){
        this.abreAModal = true;
      },
      fechaModal(){
        this.abreAModal = false;
      },
      adicionarMarca(){
  
      },
      editarMarca(){
  
      },
      deletarMarca(){
  
      }
    }
  
  });
  
  </script>
  