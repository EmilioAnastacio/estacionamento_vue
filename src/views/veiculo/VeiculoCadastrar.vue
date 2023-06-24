<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Veiculo</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Placa:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.placa">
    </div>
    
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Modelo:</label>
      <select type="text" class="row ms-1" v-model="veiculo.modelo">
        <option v-for="item in modelo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item">{{ item.nome }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Tipo:</label>
      <select type="text" class="row ms-1" v-model="veiculo.tipo">
        <option v-for="tipo in tipoEnum" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="tipo">{{ tipo }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Cor:</label>
      <select type="text" class="row ms-1" v-model="veiculo.cor">
        <option v-for="cor in corEnum" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="cor">{{ cor }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Ano:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.ano">
    </div>


    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/veiculo">
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

  import VeiculoClient from '@/client/veiculo.client';
  import { Veiculo } from '@/model/veiculo';

  import MarcaClient from '@/client/marca.client';
  import { Marca } from '@/model/marca';

  import ModeloClient from '@/client/modelo.client';
  import { Modelo } from '@/model/modelo';

  import { cor } from '@/model/cor';
  import { tipo } from '@/model/tipo';
  
  import { onMounted, reactive, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'VeiculoCadastrar',
    data() {
      return {
        veiculo: new Veiculo(),
        modelo: new Array<Modelo>(),
        marca: new Array<Marca>(),
        // cor: new Array<cor>(),
        // tipo: new Array<tipo>(),

        corEnum: cor,
        tipoEnum: tipo,

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

      this.findAllModelo();
    },

    methods:{

      findById(id: number){
        VeiculoClient.findById(id).then(sucess =>{
        this.veiculo = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    findAllModelo(){
      ModeloClient.listaAll().then(sucess =>{
        this.modelo = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

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

    onClickCadastrar(){
      VeiculoClient.cadastrar(this.veiculo).then(sucess =>{
            this.veiculo = new Veiculo();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Veiculo cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Veiculo ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      VeiculoClient.editar(this.veiculo.id, this.veiculo)
        .then(sucess => {
          console.log("Depois");
          this.veiculo = new Veiculo()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Veiculo Editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o veiculo ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      VeiculoClient.excluir(this.veiculo.id).then(sucess =>{
            this.veiculo = new Veiculo();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Veiculo Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            //this.$router.push({name: 'marca-lista-view'})
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o veiculo";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },




    }
  
  });
  
  </script>
  