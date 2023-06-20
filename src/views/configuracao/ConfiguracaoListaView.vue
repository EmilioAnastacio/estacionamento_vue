<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Configuração</h2>
    <router-link class="col col-md-1" to="/configuracaoCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
      </router-link> 
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
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
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
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
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
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
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

});



</script>
