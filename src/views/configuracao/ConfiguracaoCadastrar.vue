<template>

    <NavBar></NavBar>
  
<div class="container col-md-8 corTabela"> 

  <div class="row align-items-center"> 
    <h1 class="col mt-2">Cadastrar Configuracao</h1>
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
    <label for="recipient-name" class=" row m-auto col-form-label">Inicio do Expediente:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.inicioExpediente">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Fim do Expediente:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.fimExpediente">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Tempo para Desconto:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.tempoDesconto">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Valor Hora:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.valorHora">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Valor Minuto Multa:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.valorMinutoMulta">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Gerar Desconto:</label>
    <select class="form-select" aria-label="Default select example" :disabled="this.form === 'excluir' ? '' : disabled" 
      v-model="configuracao.gerarDesconto">
      <option value="true">True</option>
      <option value="false">False</option>
    </select>
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Necessario para Desconto:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.necessarioDesconto">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Vagas para Moto:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagasMoto">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Vagas para Carro:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagasCarro">
  </div>
  <div class="nome col">
    <label for="recipient-name" class=" row m-auto col-form-label">Vagas para Vã:</label>
    <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagasVa">
  </div>


    <div class="col d-flex align-items-center justify-content-center">
      <router-link class="col col-md-1" to="/configuracao">
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
  import { Configuracao } from '@/model/configuracao';
  import ConfiguracaoClient from '@/client/configuracao.client';
  
  import { onMounted, reactive, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'ConfiguracaoCadastrar',
    data() {
      return {
        configuracao: new Configuracao(),
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
      
      findById(id: number){
        ConfiguracaoClient.findById(id).then(sucess =>{
        this.configuracao = sucess
          
    })
      .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    onClickCadastrar(){
      ConfiguracaoClient.cadastrar(this.configuracao).then(sucess =>{
            this.configuracao = new Configuracao();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Configuracao cadastrada com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Configuracao ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
        .then(sucess => {
          console.log("Depois");
          this.configuracao = new Configuracao()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Configuracao Editada com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o Configuracao ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    onClickExcluir(){
      ConfiguracaoClient.excluir(this.configuracao.id).then(sucess =>{
            this.configuracao = new Configuracao();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Configuracao Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o Configuracao";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },
    },
  
  });
  
  </script>
  