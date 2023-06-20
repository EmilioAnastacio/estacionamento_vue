<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Modelos</h2>
    <router-link class="col col-md-1" to="/modeloCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
    </router-link> 
  </div>
</div>

<div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Nome do Modelo</th>
      <th scope="col" class="p-2">Marca</th>
      <th scope="col colspan-2" class="p-2">Estado</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Palio</td>
        <td>Fiat</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>


      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Chevrolet</td>
        <td>Andador</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td>PSG</td>
        <td>neymar</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
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
//import { MarcaClient } from '@/client/marca.client';
//import { Marca } from '@/model/marca';

import { onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'ModeloListaView',
  data() {
    return {
      abreAModal: false,
    };
  },
  components: {
    NavBar,
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
