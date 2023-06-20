<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Movimentação</h2>
    <router-link class="col col-md-1" to="/movimentacaoCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
    </router-link> 
  </div>
</div>

<div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Estado</th>
      <th scope="col" class="p-2">Veiculo</th>
      <th scope="col" class="p-2">Condutor</th>
      <th scope="col colspan-2" class="p-2">Entrada</th>
      <th scope="col colspan-2" class="p-2">Saida</th>
      <th scope="col colspan-2" class="p-2">Tempo Desconto</th>
      <th scope="col colspan-2" class="p-2">Valor Desconto</th>
      <th scope="col colspan-2" class="p-2">Valor Multa</th>
      <th scope="col colspan-2" class="p-2">Valor H Total</th>
      <th scope="col colspan-2" class="p-2">Valor H Multa</th>
      <th scope="col colspan-2" class="p-2">Tempo Multa</th>
      <th scope="col colspan-2" class="p-2">Valor Total</th>
      <th scope="col " class="p-2">Opção</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>1</td>
        <td>1</td>
        <td>10:30:00</td>
        <td>16:30:00</td>
        <td>01:00:00</td>
        <td>10,00</td>
        <td>5,00</td>
        <td>06:00:00</td>
        <td>01:00:00</td>
        <td>01:00:00</td>
        <td>100,00</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">1</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>1</td>
        <td>1</td>
        <td>10:30:00</td>
        <td>16:30:00</td>
        <td>01:00:00</td>
        <td>10,00</td>
        <td>5,00</td>
        <td>06:00:00</td>
        <td>01:00:00</td>
        <td>01:00:00</td>
        <td>100,00</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" @click="abreModal()">Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">1</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>1</td>
        <td>1</td>
        <td>10:30:00</td>
        <td>16:30:00</td>
        <td>01:00:00</td>
        <td>10,00</td>
        <td>5,00</td>
        <td>06:00:00</td>
        <td>01:00:00</td>
        <td>01:00:00</td>
        <td>100,00</td>
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
