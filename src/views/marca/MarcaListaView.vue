<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Marcas</h2>
      <router-link class="col col-md-1" to="/marcaCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
      </router-link>  
    <!-- <button type="button" class="btn btn-primary col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar Marca</button>
    <button type="button" class="btn btn-danger col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar Marca</button> -->
  </div>
</div>

<div class="container">
  <table class="table">
  <thead>
    <tr>

      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Nome da Marca</th>
      <th scope="col colspan-2" class="p-2">Estado</th>

    </tr>
  </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Deletar</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">2</th>
        <td>Chevrolet</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td>PSG</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
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
import adicionaMarca from '@/components/adicionaMarca.vue';
//import { MarcaClient } from '@/client/marca.client';
//import { Marca } from '@/model/marca';

import { onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'MarcaListaView',
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
  }

});



</script>
