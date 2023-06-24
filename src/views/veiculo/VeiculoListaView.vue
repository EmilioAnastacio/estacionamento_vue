<template>

  <NavBar></NavBar>

<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Veiculo</h2>
      <router-link class="col-md-2 " to="/veiculoCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>
<div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
  <table class="table">
    <thead>
      <tr>
        <th scope="col" class="p-2">ID</th>
        <th scope="col" class="p-2">ESTADO</th>
        <th scope="col" class="p-2">Placa</th>
        <th scope="col" class="p-1">Modelo</th>
        <th scope="col" class="p-1">Marca</th>
        <th scope="col" class="p-1">Tipo</th>
        <th scope="col" class="p-1">Cor</th>
        <th scope="col" class="p-1">Ano</th>
        <th scope="col colspan-2" class="p-2">Estado</th>

      </tr>
    </thead>
    <tbody class="table-group-divider">

      <tr v-for="item in veiculosList" :key="item.id" class="col-md-12">
        <th class="col-md-1">{{ item.id }}</th>
        <th class="col-md-1">
            <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
            <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
        </th>
        <th class="col-md-3 ">{{ item.placa }}</th>
        <th class="col-md-1"> {{ item.modelo.nome }}</th>
        <th class="col-md-1"> {{ item.modelo.marca.nome }}</th>
        <th class="col-md-1"> {{ item.tipo }}</th>
        <th class="col-md-1"> {{ item.ano }}</th>
        <th class="col-md-1"> {{ item.ano }}</th>
        <th class="col-md-2">
          <div class="btn-group" role="group">
            <RouterLink type="button" class="btn text-align-center col-md-2" 
              :to="{name: 'veiculo-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
              <span class="badge bg-warning btn text-align-center col">EDITAR</span>
            </RouterLink>
            <RouterLink type="button" class="btn text-align-center col-md-2" 
              :to="{name: 'veiculo-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
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
import { Veiculo } from '@/model/veiculo';
import VeiculoClient from '@/client/veiculo.client';

export default defineComponent({
  name: 'VeiculoListaView',
  data() {
    return {
      veiculosList: new Array<Veiculo>(),
    };
  },
  components: {
    NavBar,
  },
  mounted(){
    this.findAll();
  },

  methods:{

    findAll(){
      VeiculoClient.listaAll().then(sucess =>{
            console.log("OI")
            this.veiculosList =sucess
        })
        .catch(error =>{
          console.log(error)
        })
    }
  }

});



</script>
