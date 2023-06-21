<template>

  <NavBar></NavBar>

<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Condutor</h2>
      <router-link class="col-md-2 " to="/condutorCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Estado</th>
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
        <th>Inativo</th>
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
        <th>Inativo</th>
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
        <th>Inativo</th>
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
