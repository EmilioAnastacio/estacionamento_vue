<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Veiculos</h2>
    <router-link class="col col-md-1" to="/veiculoCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
    </router-link> 
  </div>
</div>


<div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Placa</th>
      <th scope="col" class="p-1">Modelo</th>
      <th scope="col" class="p-1">Marca</th>
      <th scope="col" class="p-1">Tipo</th>
      <th scope="col" class="p-1">Cor</th>
      <th scope="col" class="p-1">Ano</th>
      <th scope="col colspan-2" class="p-2">Estado</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>AVH-7824</td>
        <td>Palio</td>
        <td>Fiat</td>
        <td>Carro</td>
        <td>Branco</td>
        <td>2010</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>AVH-7824</td>
        <td>Palio</td>
        <td>Fiat</td>
        <td>Carro</td>
        <td>Branco</td>
        <td>2010</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">1</th>
        <td>AVH-7824</td>
        <td>Palio</td>
        <td>Fiat</td>
        <td>Carro</td>
        <td>Branco</td>
        <td>2010</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
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
  name: 'VeiculoListaView',
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
