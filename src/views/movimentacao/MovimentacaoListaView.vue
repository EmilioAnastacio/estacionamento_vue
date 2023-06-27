<template>

  <NavBar></NavBar>

<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Movimentação</h2>
      <router-link class="col-md-2 " to="/movimentacaoCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>

  <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
    <thead>
      <tr>
        <th scope="col" class="p-2">ID</th>
        <th scope="col" class="p-2">Estado</th>
        <th scope="col" class="p-2">Veiculo</th>
        <th scope="col" class="p-2">Condutor</th>
        <th scope="col colspan-2" class="p-2">Entrada</th>
        <th scope="col colspan-2" class="p-2">Saida</th>
        <th scope="col " class="p-2">Opção</th>

      </tr>
    </thead>
    <tbody class="table-group-divider">

    <tr v-for="item in movimentacaoList" :key="item.id" class="col-md-12">
      <th class="col-md-1">{{ item.id }}</th>
      <th class="col-md-1">
          <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
          <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> FINALIZADA</span>
      </th>
      <th class="col-md-1"> {{ item.veiculo.placa }}</th>
      <th class="col-md-2 ">{{ item.condutor.nomeCondutor }}</th>
      <th class="col-md-2"> {{ item.entrada }}</th>
      <th class="col-md-2"> {{ item.saida }}</th>
      <th class="col-md-2">
        <div class="btn-group" role="group">
          <RouterLink type="button" class="btn text-align-center col-md-2" 
            :to="{name: 'movimentacao-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
            <span class="badge bg-warning btn text-align-center col">EDITAR</span>
          </RouterLink>
          <RouterLink type="button" class="btn text-align-center col-md-2" 
            :to="{name: 'relatorio-view', query: {id: item.id}}">
            <span class="badge bg-danger btn text-align-center col">FINZALIZAR</span>
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
import { Movimentacao } from '@/model/movimentacao';
import movimentacaoClient from '@/client/movimentacao.client';

export default defineComponent({
  name: 'MovimentacaoListaView',
  data() {
    return {
      movimentacaoList: new Array<Movimentacao>(),

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
      movimentacaoClient.listaAll().then(sucess =>{
            console.log("OI")
            this.movimentacaoList =sucess
        })
        .catch(error =>{
          console.log(error)
        })
    }
  }

});



</script>
