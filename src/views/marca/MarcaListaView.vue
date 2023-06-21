<template>

  <NavBar></NavBar>


<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Marcas</h2>
      <router-link class="col-md-2 " to="/marcaCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>

<!-- <table>
  <thead>
    <tr>
      <th>

      </th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in marcasList" :key="item.id">
        <th class="col-md-1" >{{ item.id }}</th>
        <th class="col-md-2">
          <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
          <span></span>
        </th>
        <th class="text-start">{{ item.nome }}</th>
        <th class="">
          <div class="btn-group" role="group">
            <RouterLink :to="{name: 'marca-formulario-editar-view', query:{id: item.id, form: 'editar'}}"></RouterLink>
          </div>
        </th>
      </tr>
  </tbody>
</table> -->


  <table class="table">
  <thead>
    <tr>

      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Estado</th>
      <th scope="col" class="p-2">Nome da Marca</th>
      <th scope="col colspan-2" class="p-2">Opção</th>

    </tr>
  </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>Fiat</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Deletar</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>Fiat</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal">Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">2</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>Chevrolet</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <th>
            <span class="text-align-center col">INATIVO</span>    
        </th>
        <td>PSG</td>
        <td>
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-primary col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Editar</button>
            <button type="button" class="btn btn-danger col-sm-2" data-bs-toggle="modal" data-bs-target="#adicionaMarca" id="open_modal" >Deletar</button>
          </div>
        </td>
      </tr>

    </tbody>
  </table>
</div>
</template>


<style scoped>

.divInativo{
  background-color: red;
}

.divInativo >span{
  color: white;
}

</style>


<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import adicionaMarca from '@/components/adicionaMarca.vue';
//import { MarcaClient } from '@/client/marca.client';
//import { Marca } from '@/model/marca';

import { onMounted, reactive, toRefs } from 'vue';
import { Marca } from '@/model/marca';
import { MarcaClient } from '@/client/marca.client';
// const marcaClient 

export default defineComponent({
  name: 'MarcaListaView',
  data() {
    return {
      marcasList: new Array<Marca>()
    };
  },
  mounted(){
    //this.findAll();
  },
  components: {
    NavBar,
    adicionaMarca,
  },
  methods:{

    // findAll(){
    //   MarcaClient.listaAll().then(sucess =>{
    //         this.marcasList =sucess
    //     })
    //     .catch(error =>{
    //       console.log(error)
    //     })
    // }
  }

});



</script>
