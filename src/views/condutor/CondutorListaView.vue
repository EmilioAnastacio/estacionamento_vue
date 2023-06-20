<template>

  <NavBar></NavBar>

<div class="col col-md-9 align-items-start">
  <div class="row align-items-center">
    <h2 class="col col-md-3 align-items-center">Lista de Condutores</h2>
    <router-link class="col col-md-1" to="/condutorCadastrar">
        <button type="button" class="btn btn-success">Cadastrar</button>
      </router-link>  
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
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
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
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
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

    };
  },
  components: {
    NavBar,
  },


});



</script>
