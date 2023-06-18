<template>

  <NavBar></NavBar>


<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-4 align-items-center">Lista de Marcas</h2>
    <button type="button" class="btn btn-success col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Cadastrar Marca</button>
    <button type="button" class="btn btn-primary col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar Marca</button>
    <button type="button" class="btn btn-danger col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar Marca</button>
  </div>
</div>

<div class="modal fade" id="adicionaMarca" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="{ 'd-block': abreAModal }">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Marca</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
              <label for="recipient-name" class=" row m-auto col-form-label">Marca:</label>
              <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="fechaModal()">Fechar</button>
        <button type="button" class="btn btn-success">Adicionar</button>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <table class="table">

  <thead>
    <tr>
      <th class="col-1" scope="col" >#</th>
      <th class="col-1" scope="col" >Nome da Marca</th>
    </tr>
  </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<style scoped>

.empurra_botao{
  margin-left: 1%;
  width: 10%;
}
</style>


<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import adicionaMarca from '@/components/adicionaMarca.vue';
//import axiosMarca from '@/client/marca.client';

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
