<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Movimentação</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Veiculo:</label>
      <select type="text" class="row ms-1" v-model="movimentacao.veiculo">
        <option v-for="item in veiculo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item">{{ item.placa }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Condutor:</label>
      <select type="text" class="row ms-1" v-model="movimentacao.condutor">
        <option v-for="item in condutor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item">{{ item.nomeCondutor }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Entrada:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.entrada">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Saida:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.saida">
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/movimentacao">
        <button type="button" class="btn btn-success">Voltar</button>
    </router-link>
    <button type="button" v-if="this.form === undefined" class="btn btn-success mt-2 mb-2" @click="onClickCadastrar()"> Cadastrar</button>
    <button type="button" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2" @click="onClickEditar()"> Editar</button>
    <button type="button" v-if="this.form === 'excluir'" class="btn btn-danger mt-2 mb-2" @click="onClickExcluir()"> Finalizar</button>
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

  import MovimentacaoClient from '@/client/movimentacao.client';
  import { Movimentacao } from '@/model/movimentacao';

  import CondutorClient from '@/client/condutor.client';
  import { Condutor } from '@/model/condutor';

  import VeiculoClient from '@/client/veiculo.client';
  import { Veiculo } from '@/model/veiculo';

  import ConfiguracaoClient from '@/client/configuracao.client';
  import { Configuracao } from '@/model/configuracao';
  
  export default defineComponent({
    name: 'MarcaCadastrar',
    data() {
      return {

        movimentacao: new Movimentacao(),
        condutor: new Array<Condutor>(),
        veiculo: new Array<Veiculo>(),
        configuracao: new Array<Configuracao>(),

        mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },

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

      this.findAllVeiculo();
      this.findAllCondutor();
      this.findAllConfiguracao();

    },
    methods:{

      findById(id: number){
        MovimentacaoClient.findById(id).then(sucess =>{
        this.movimentacao = sucess
          
      })
      .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      })
      },

      findAllConfiguracao(){
      ConfiguracaoClient.listaAll().then(sucess =>{
        this.configuracao = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

      })
    },

    findAllVeiculo(){
      VeiculoClient.listaAll().then(sucess =>{
        this.veiculo = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

      })
    },
    findAllCondutor(){
      CondutorClient.listaAll().then(sucess =>{
        this.condutor = sucess;
        console.log(sucess);
      })
      .catch(error =>{
        console.log(error)

      })
    },

    onClickCadastrar(){
      MovimentacaoClient.cadastrar(this.movimentacao).then(sucess =>{
            this.movimentacao = new Movimentacao();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Movimentação cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          const mensagemErro = error.data;
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = mensagemErro;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar a Movimentação ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
        .then(sucess => {
          console.log("Depois");
          this.movimentacao = new Movimentacao()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Movimentacao Editada com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar a Movimentacao ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      MovimentacaoClient.excluir(this.movimentacao.id).then(sucess =>{
            this.movimentacao = new Movimentacao();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Movimentacao Excluida com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir a Movimentacao";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },
    }
  });
  
  </script>
  