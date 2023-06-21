<template>

  <NavBar></NavBar>

<div class="container col-md-8 corTabela"> 

  <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Marca</h1>
  </div>

  <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>


  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Nome da Marca:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="marca.nome">
  </div>

  <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/marca">
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
import { Marca } from '@/model/marca';
import MarcaClient  from '@/client/marca.client';

export default defineComponent({
  name: 'MarcaCadastrar',
  data() {
    return {
      marca: new Marca(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
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
    
     if(this.id !== undefined){
      this.findById(Number(this.id));
     }   
  },
  components: {
    NavBar,
  },
  methods:{

    //CADASTRAR
    //
    onClickCadastrar(){
      MarcaClient.cadastrar(this.marca).then(sucess =>{
            this.marca = new Marca();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Marca cadastrada com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar a Marca ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    //EDITAR
    //
    onClickEditar(){
      console.log("Antes do metodo");
      MarcaClient.editar(this.marca.id, this.marca)
        .then(sucess => {
          console.log("Depois");
          this.marca = new Marca()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Marca Editada com sucesso!";
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
      MarcaClient.excluir(this.marca.id).then(sucess =>{
            this.marca = new Marca();

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

    //FIND BY ID
    //
    findById(id: number){
        MarcaClient.findById(id).then(sucess =>{
        this.marca = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })

    },
  }

});

</script>
