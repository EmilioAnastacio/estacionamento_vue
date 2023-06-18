<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Condutores</h2>
    <button type="button" class="btn btn-success col col-md-1" data-bs-toggle="modal" data-bs-target="#adicionaCondutor" id="open_modal" @click="abreModal()">Cadastrar</button>
    <!-- <button type="button" class="btn btn-primary col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar Marca</button>
    <button type="button" class="btn btn-danger col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar Marca</button> -->
  </div>
</div>

<div class="modal fade" id="adicionaCondutor" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="{ 'd-block': abreAModal }">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Condutor</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="fechaModal()"></button>
      </div>
      <div class="modal-body">

        <form class="row g-3">

          <div class="col-md-9">
            <label for="inicioVali" class="form-label row ms-1">Nome:</label>
            <input type="text" class="form-control" id="inicioVali" aria-describedby="inicioEXPinput" required>
          </div>

          <div class="col-md-6">
            <label for="fimVali" class="form-label row ms-1">Cpf:</label>
            <input type="text" class="form-control" id="fimVali"  required>
          </div>

          <div class="col-md-6">
            <label for="tempoDescVali" class="form-label row ms-1">Telefone</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">#</span>
              <input type="text" class="form-control" id="tempoDescVali"  required>
            </div>
            
          </div>

          <div class="col-md-4 offset-md-2">
            <label for="vagasMotoVali" class="form-label">Tempo Pago</label>
            <input type="text" class="form-control" id="vagasMotoVali"  required>
          </div>


          <div class="col-md-4">
            <label for="vagasCarroVali" class="form-label">Tempo Desconto</label>
            <input type="text" class="form-control" id="vagasCarroVali"  required>
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
      <th scope="col" class="p-2">Nome</th>
      <th scope="col" class="p-1">Cpf</th>
      <th scope="col" class="p-1">Telefone</th>
      <th scope="col" class="p-1">Tempo Pago</th>
      <th scope="col" class="p-1">Tempo Desconto</th>
      <th scope="col colspan-2" class="p-2">Estado</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Emilio Anastacio de paula correa</td>
        <td>123.123.123-12</td>
        <td>45991112399</td>
        <td>25:00:00</td>
        <td>02:00:00</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Emilio Anastacio de paula correa</td>
        <td>123.123.123-12</td>
        <td>45991112399</td>
        <td>25:00:00</td>
        <td>02:00:00</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">1</th>
        <td>Emilio Anastacio de paula correa</td>
        <td>123.123.123-12</td>
        <td>45991112399</td>
        <td>25:00:00</td>
        <td>02:00:00</td>
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
  name: 'ConfiguracaoListaView',
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
