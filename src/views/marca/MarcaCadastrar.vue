<template>

  <NavBar></NavBar>

<div class="container col-md-8 corTabela"> 

  <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Marca</h1>
  </div>


  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Marca:</label>
    <!-- <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name" v-model="marca.nome"> -->
    <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name">
  </div>

  <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/marca">
        <button type="button" class="btn btn-success">Voltar</button>
    </router-link>
    <button type="submit" class="btn btn-success mt-2 mb-2"> Cadastrar</button>
    <!-- <button type="submit" v-if="this.form === undefined" class="btn btn-success mt-2 mb-2" @click="$event => onClickCadastrar()"> Cadastrar</button> -->
    <!-- <button type="submit" v-if="this.form === 'editar'" class="btn btn-success mt-2 mb-2" @click="$event => onClickCadastrar()"> Cadastrar</button> -->
    <!-- <button type="submit" v-if="this.form === 'excluir'" class="btn btn-success mt-2 mb-2" @click="$event => onClickCadastrar()"> Cadastrar</button> -->
  </div>

</div>

</template>


<style scoped>

.corTabela{
  background-color: #ffffff;
  border-radius: 10px;
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
const marcaClient: MarcaClient = new MarcaClient;

export default defineComponent({
  name: 'MarcaCadastrar',
  data() {
    return {
      marca: new Marca()
    };
  },
  computed: {
    id(){
      return this.$route.query.id
    },
    form(){
      return this.$route.query.form
    }
  },
  mounted() {
    
    //  if(this.id !== undefined){

    //   this.findById(this.id);
    //  }   
  },
  components: {
    NavBar,
    adicionaMarca,
  },
  methods:{

    onClickCadastrar(){
      marcaClient.cadastrar(this.marca).then(success =>{
            this.marca = new Marca();
            //this.marca = success;
           
        })
        .catch(error =>{
          console.log(error)
        })
    },

     // onClickEditar(){
    //   marcaClient.editar(this.Marca).then(sucess =>{
    //         this.marcas new Marca
    //         this.marcasList =sucess
    //     })
    //     .catch(error =>{
    //       console.log(error)
    //     })
    // },

    // onClickExcluir(){
    //   marcaClient.cadastrar(this.Marca).then(sucess =>{
    //         this.marcas new Marca
    //         this.marcasList =sucess
    //     })
    //     .catch(error =>{
    //       console.log(error)
    //     })
    // },



      // findById(id: number){
      //   marcaClient.findById(id).then(sucess =>{
      //       this.marca new Marca
      //       this.marca = sucess
      //   })
      //   .catch(error =>{
      //     console.log(error)
      //   })

      // }
  }

});

</script>
