<template>

    <NavBar></NavBar>
  
<div class="container col-md-8 corTabela"> 

  <div class="row align-items-center"> 
    <h1 class="col mt-2">Cadastrar Configuracao</h1>
  </div>

    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Inicio Expediente:</label>
            <input type="text" class="form-control" placeholder="Inicio Expediente" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Fim Expediente:</label>
            <input type="text" class="form-control" placeholder="Fim Expediente" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Desconto:</label>
            <input type="text" class="form-control" placeholder="Tempo Desconto" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Gerar Desconto:</label>
            <input type="text" class="form-control" placeholder="Gerar Desconto" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Necessario Desconto:</label>
            <input type="text" class="form-control" placeholder="Necessario Desconto" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Vagas Moto:</label>
            <input type="text" class="form-control" placeholder="Vagas Moto" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Vagas Carro:</label>
            <input type="text" class="form-control" placeholder="Vagas Carro" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Vagas Vã:</label>
            <input type="text" class="form-control" placeholder="Vagas Va" id="recipient-name">
        </div>
    </div>


    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/configuracao">
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
  