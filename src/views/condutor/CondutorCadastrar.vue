<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Condutor</h1>
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
    <label for="recipient-name" class=" row m-auto col-form-label">Nome do Condutor:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="condutor.nomeCondutor">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Cpf:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="condutor.cpf">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Telefone:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="condutor.telefone">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Tempo Pago:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="condutor.tempoPago">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Tempo Desconto:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="condutor.tempoDesconto">
  </div>

  <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/condutor">
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
  import { Condutor } from '@/model/condutor';
  import CondutorClient from '@/client/condutor.client';
    
  export default defineComponent({
    name: 'CondutorCadastrar',
    data() {
      return {
        condutor: new Condutor(),
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
    computed:{
      id(){
      return this.$route.query.id
      },
      form(){
        return this.$route.query.form
      }
    },
    mounted(){

      if(this.id !== undefined){
      this.findById(Number(this.id));
     }  
    },
  
    methods:{
      
      onClickCadastrar(){
      CondutorClient.cadastrar(this.condutor).then(sucess =>{
            this.condutor = new Condutor();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Condutor cadastrada com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Condutor ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      CondutorClient.editar(this.condutor.id, this.condutor)
        .then(sucess => {
          console.log("Depois");
          this.condutor = new Condutor()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Condutor Editada com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o condutor ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      CondutorClient.excluir(this.condutor.id).then(sucess =>{
            this.condutor = new Condutor();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Condutor Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o condutor";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    //FIND BY ID
    //
    findById(id: number){
        CondutorClient.findById(id).then(sucess =>{
        this.condutor = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })

    },




    },
  
  });
  
  </script>
  