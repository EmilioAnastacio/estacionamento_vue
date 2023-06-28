<template>

  <NavBar></NavBar>

<div class="col-md-12" >

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Configuração</h2>
      <router-link class="col-md-2 " to="/configuracaoCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>

  <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="p-2">ID</th>
          <th scope="col" class="p-2">Estado</th>
          <th scope="col" class="p-2">inicioExpediente</th>
          <th scope="col" class="p-1">fimExpediente</th>
          <th scope="col" class="p-1">Valor Hora</th>
          <th scope="col" class="p-1">valorMinutoMulta</th>
          <th scope="col" class="p-1">tempoDesconto</th>
          <th scope="col" class="p-1">gerarDesconto</th>
          <th scope="col" class="p-1">necessarioDesconto</th>
          <th scope="col" class="p-1">vagasMoto</th>
          <th scope="col" class="p-1">vagasCarro</th>
          <th scope="col" class="p-1">vagasVa</th>
          <th scope="col colspan-2" class="p-2">Estado</th>
        </tr>
      </thead>

      <tbody class="table-group-divider">
        <tr v-for="item in configuracaoList" :key="item.id" class="col-md-12">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-1">
              <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
              <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
          </th>
          <th class="col-md-1">{{ item.inicioExpediente }}</th>
          <th class="col-md-1">{{ item.fimExpediente }}</th>
          <th class="col-md-1">{{ item.valorHora }}</th>
          <th class="col-md-1">{{ item.valorMinutoMulta }}</th>
          <th class="col-md-1">{{ item.tempoDesconto }}</th>
          <th class="col-md-1">{{ item.gerarDesconto }}</th>
          <th class="col-md-1">{{ item.necessarioDesconto }}</th>
          <th class="col-md-1">{{ item.vagasMoto }}</th>
          <th class="col-md-1">{{ item.vagasCarro }}</th>
          <th class="col-md-1">{{ item.vagasVa }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group">
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'configuracao-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
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
import ConfiguracaoClient from '@/client/configuracao.client';
import { Configuracao } from '@/model/configuracao';

export default defineComponent({
  name: 'ConfiguracaoListaView',
  data() {
    return {
      configuracaoList: new Array<Configuracao>()
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
      ConfiguracaoClient.listaAll().then(sucess =>{
        this.configuracaoList = sucess
      })
      .catch(error =>{
        console.group(error)
      })
    }
  }

});

</script>
