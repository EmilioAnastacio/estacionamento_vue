<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <router-link class="col col-md-1" to="/movimentacao">
        <button type="button" class="btn btn-success">Voltar</button>
      </router-link>
      <h1 class="col-md-10 mt-2">Cadastrar Movimentação</h1>
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
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Entrada:</label>
            <input type="text" class="form-control" placeholder="Entrada" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Saida:</label>
            <input type="text" class="form-control" placeholder="Saida" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Hora:</label>
            <input type="text" class="form-control" placeholder="TempoHora" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Minuto:</label>
            <input type="text" class="form-control" placeholder="TempoMinuto" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Hora:</label>
            <input type="text" class="form-control" placeholder="Tempo Hora" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Minuto:</label>
            <input type="text" class="form-control" placeholder="Tempo Minuto" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Desconto:</label>
            <input type="text" class="form-control" placeholder="Tempo Desconto" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Valor Desconto:</label>
            <input type="text" class="form-control" placeholder="Valor Desconto" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Valor Multa:</label>
            <input type="text" class="form-control" placeholder="Valor Multa" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Valor Hora Total:</label>
            <input type="text" class="form-control" placeholder="Valor Hora Total" id="recipient-name">
        </div>
    </div>

    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Valor Hora Multa:</label>
            <input type="text" class="form-control" placeholder="Valor Hora Multa" id="recipient-name">
        </div>
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Tempo Multa:</label>
            <input type="text" class="form-control" placeholder="Tempo Multa" id="recipient-name">
        </div>
    </div>
    <div class="row align-items-center">
        <div class="nome col col-md-6">
            <label for="recipient-name" class=" row m-auto col-form-label">Valor Total:</label>
            <input type="text" class="form-control" placeholder="Valor Total" id="recipient-name">
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
  
  
  });
  
  </script>
  