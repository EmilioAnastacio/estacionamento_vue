<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Veiculos</h2>
    <button type="button" class="btn btn-success col col-md-1" data-bs-toggle="modal" data-bs-target="#adicionaVeiculo" id="open_modal" @click="abreModal()">Cadastrar</button>
    <!-- <button type="button" class="btn btn-primary col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar Marca</button>
    <button type="button" class="btn btn-danger col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar Marca</button> -->
  </div>
</div>

<div class="modal fade" id="adicionaVeiculo" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="{ 'd-block': abreAModal }">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Veiculo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="fechaModal()"></button>
      </div>
      <div class="modal-body">

        <form class="row g-3">

          <div class="col-md-4">
            <label for="placaVali" class="form-label">Placa</label>
            <div class="input-group">
              <span class="input-group-text" id="placaInput">#</span>
              <input type="text" class="form-control" id="placaVali" aria-describedby="placaInput" required>
            </div>
          </div>

          <div class="col-md-4">
            <label for="marcaVali" class="form-label">Marca</label>
            <input type="text" class="form-control" id="marcaVali"  required>
          </div>

          <div class="col-md-4">
            <label for="modeloVali" class="form-label">Modelo</label>
            <input type="text" class="form-control" id="modeloVali"  required>
          </div>

          <div class="col-md-4">
            <label for="corVali" class="form-label">Cor</label>
            <select class="form-select" id="corVali" required>
              <option selected disabled value="">Selecione...</option>
              <option value="1">Branco</option>
              <option value="2">Preto</option>
              <option value="3">Prata</option>
              <option value="1">Azul</option>
              <option value="2">Vermelho</option>
              <option value="3">Amarelo</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="tipoVali" class="form-label">Tipo</label>
            <select class="form-select" id="tipoVali" required>
              <option selected disabled value="">Selecione...</option>
              <option value="1">Moto</option>
              <option value="2">Carro</option>
              <option value="3">Vã</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="anoVali" class="form-label">Ano</label>
            <input type="date" class="form-control" id="anoVali"  required>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">Cadastrar</button>
          </div>

        </form>
      </div>
    </div>
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
