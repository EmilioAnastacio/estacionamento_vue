<template>

  <NavBar></NavBar>

<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Marcas</h2>
      <router-link class="col-md-2 " to="/marcaCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>

  <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
  <table class="table">
  <thead>
    <tr >
      <th scope="col" class="p-2">ID</th>
      <th scope="col" class="p-2">Estado</th>
      <th scope="col" class="p-2 text-start">Nome da Marca</th>
      <th scope="col colspan-2" class="p-2">Opção</th>
    </tr>
  </thead>

    <tbody class="table-group-divider">

      <tr v-for="item in marcasList" :key="item.id" class="col-md-12">
        <th class="col-md-1">{{ item.id }}</th>
        <th class="col-md-1">
            <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
            <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
        </th>
        <th class="col-md-6 text-start">{{ item.nome }}</th>
        <th class="col-md-2">
          <div class="btn-group" role="group">
            <RouterLink type="button" class="btn text-align-center col-md-2" 
              :to="{name: 'marca-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
              <span class="badge bg-warning btn text-align-center col">EDITAR</span>
            </RouterLink>
            <RouterLink type="button" class="btn text-align-center col-md-2" 
              :to="{name: 'marca-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
              <span class="badge bg-danger btn text-align-center col">EXCLUIR</span>
            </RouterLink>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</div>
</div>
</template>

<style scoped>

</style>

<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import MarcaClient from '@/client/marca.client';
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'MarcaListaView',
  data() {
    return {
      marcasList: new Array<Marca>()
    };
  },
  mounted(){
    this.findAll();
  },
  components: {
    NavBar,
  },
  methods:{

    findAll(){
      MarcaClient.listaAll().then(sucess =>{
            this.marcasList =sucess
        })
        .catch(error =>{
          console.log(error)
        })
    }
  }
});

</script>
