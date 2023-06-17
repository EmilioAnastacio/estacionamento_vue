<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Configuração</h2>
    <button type="button" class="btn btn-success col col-md-1" data-bs-toggle="modal" data-bs-target="#adicionaConfiguracao" id="open_modal" @click="abreModal()">Cadastrar</button>
    <!-- <button type="button" class="btn btn-primary col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar Marca</button>
    <button type="button" class="btn btn-danger col-md-2 empurra_botao" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar Marca</button> -->
  </div>
</div>

<div class="modal fade" id="adicionaConfiguracao" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="{ 'd-block': abreAModal }">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Configuração</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="fechaModal()"></button>
      </div>
      <div class="modal-body">

        <form class="row g-3">

          <div class="col-md-4">
            <label for="inicioVali" class="form-label">Inicio do Expediente</label>
            <input type="time" class="form-control" id="inicioVali" aria-describedby="inicioEXPinput" required>
          </div>

          <div class="col-md-4">
            <label for="fimVali" class="form-label">Fim do Expediente</label>
            <input type="time" class="form-control" id="fimVali"  required>
          </div>

          <div class="col-md-4">
            <label for="tempoDescVali" class="form-label">Tempo Desconto</label>
            <input type="text" class="form-control" id="tempoDescVali"  required>
          </div>

          <div class="col-md-4">
            <label for="vagasMotoVali" class="form-label">Vagas Moto</label>
            <input type="text" class="form-control" id="vagasMotoVali"  required>
          </div>


          <div class="col-md-4">
            <label for="vagasCarroVali" class="form-label">Vagas Carro</label>
            <input type="text" class="form-control" id="vagasCarroVali"  required>
          </div>

          <div class="col-md-4 ">
            <label for="vagasVaVali" class="form-label">Vagas Vã</label>
            <input type="text" class="form-control" id="vagasVaVali"  required>
          </div>

          <div class="col-md-4 offset-md-4">
            <label for="descontoGerarVali" class="form-label">Gerar Desconto</label>
            <select class="form-select" id="descontoGerarVali" required>
              <option selected disabled value="">Selecione...</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
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
      <th scope="col" class="p-2">inicioExpediente</th>
      <th scope="col" class="p-1">fimExpediente</th>
      <th scope="col" class="p-1">tempoDesconto</th>
      <th scope="col" class="p-1">gerarDesconto</th>
      <th scope="col" class="p-1">necessarioDesconto</th>
      <th scope="col" class="p-1">vagasMoto</th>
      <th scope="col" class="p-1">vagasMoto</th>
      <th scope="col" class="p-1">vagasMoto</th>
      <th scope="col colspan-2" class="p-2">Estado</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>10:30</td>
        <td>18:30</td>
        <td>05:00</td>
        <td>true</td>
        <td>02:00</td>
        <td>20</td>
        <td>15</td>
        <td>8</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>10:30</td>
        <td>18:30</td>
        <td>05:00</td>
        <td>true</td>
        <td>02:00</td>
        <td>20</td>
        <td>15</td>
        <td>8</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">1</th>
        <td>10:30</td>
        <td>18:30</td>
        <td>05:00</td>
        <td>true</td>
        <td>02:00</td>
        <td>20</td>
        <td>15</td>
        <td>8</td>
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
