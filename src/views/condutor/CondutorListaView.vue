<template>

  <NavBar></NavBar>

<div class="container">

  <div class="row text-start">
      <h2 class="col-md-10">Lista de Condutor</h2>
      <router-link class="col-md-2 " to="/condutorCadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>  
  </div>
  
  <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
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
          <th scope="col colspan-2" class="p-2">Opção</th>

        </tr>
      </thead>

      <tbody class="table-group-divider">

        <tr v-for="item in condutorList" :key="item.id" class="col-md-12">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-1">
              <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
              <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
          </th>
          <th class="col-md-6 text-start">{{ item.nomeCondutor }}</th>
          <th class="col-md-3 text-start">{{ item.cpf }}</th>
          <th class="col-md-3 text-start">{{ item.telefone }}</th>
          <th class="col-md-6 text-start">{{ item.tempoPago }}</th>
          <th class="col-md-6 text-start">{{ item.tempoDesconto }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group">
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'condutor-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
              </RouterLink>
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'condutor-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
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
import  CondutorClient  from '@/client/condutor.client';
import { Condutor } from '@/model/condutor';

export default defineComponent({
  name: 'CondutorListaView',
  data() {
    return {
      condutorList: new Array<Condutor>()
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
      CondutorClient.listaAll().then(sucess =>{
        this.condutorList = sucess
      })
      .catch(error =>{
        console.log(error)
      })
        
      }
    }
});

</script>
