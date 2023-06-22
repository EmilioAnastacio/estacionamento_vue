<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Modelo</h1>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Nome do Modelo:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="modelo.nome">
    </div>
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Nome da Marca:</label>
      <select type="text" v-model="modelo.marca"><option v-for="item in marca" :value="item">{{ item.nome }} </option></select>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="modelo.marca">
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/modelo">
        <button type="button" class="btn btn-success">Voltar</button>
    </router-link>

    <button type="button" v-if="this.form === undefined" class="btn btn-success mt-2 mb-2" @click="onClickCadastrar()"> Cadastrar</button>
    <button type="button" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2" @click="onClickEditar()"> Editar</button>
    <button type="button" v-if="this.form === 'excluir'" class="btn btn-danger mt-2 mb-2" @click="onClickExcluir()"> Excluir</button>
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
  import { Modelo } from '@/model/modelo';
  import ModeloClient from '@/client/modelo.client';
  import MarcaClient from '@/client/marca.client';
  import { Marca } from '@/model/marca';

  
  export default defineComponent({
    name: 'ModeloCadastrar',
    data() {
      return {
        modelo: new Modelo(),
        marca: new Array<Marca>(),
        
        mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
      };
    },
    components: {
      NavBar,
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
    
    if(this.id !== undefined){
     this.findById(Number(this.id));
    }

    this.findAllMarca();   
 },
 methods:{
    //FIND BY ID
    //
    findById(id: number){
        ModeloClient.findById(id).then(sucess =>{
        this.modelo = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    findAllMarca(){
      MarcaClient.listaAll().then(sucess =>{
        this.marca = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    //CADASTRAR
    //
    onClickCadastrar(){
      ModeloClient.cadastrar(this.modelo).then(sucess =>{
            this.modelo = new Modelo();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Modelo cadastrada com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar a Modelo ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      ModeloClient.editar(this.modelo.id, this.modelo)
        .then(sucess => {
          console.log("Depois");
          this.modelo = new Modelo()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Modelo Editada com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar a marca ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      ModeloClient.excluir(this.modelo.id).then(sucess =>{
            this.modelo = new Modelo();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Marca Excluida com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            //this.$router.push({name: 'marca-lista-view'})
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir a marca";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

 }
  
  
  });
  
  </script>
  