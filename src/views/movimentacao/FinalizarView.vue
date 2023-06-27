<template>

<H1 class="col-md-1">Recibo</H1>

<RouterLink to="/movimentacao" type="button" class="btn btn-success">Voltar as Movimentações</RouterLink>

<div class="col-12">
         <div class="">
            <div class="col-md-5">
                <span>Estado da Movimentação: <span>{{ movimentacao.ativo }}</span></span>
            </div>

            <div class="col-md-5 mt-4" >
                <span>Entrada: <span>{{ relatorio.entrada }}</span></span>
                <!-- <span> nome do condutor: <span> {{ relatorio.condutor }}</span></span> -->
            </div>

            <div class="col-md-5 mt-4">
                <span>SAIDA: <span>{{ relatorio.saida }}</span></span>
            </div>
             
            <div class="col-md-5 mt-4" >
                <span>Condutor: <span>{{ relatorio.condutor }}</span></span>
                <!-- <span> nome do condutor: <span> {{ relatorio.condutor }}</span></span> -->
            </div>
             
            <div class="col-md-5 mt-4" >
                <span>Veiculo: <span>{{ relatorio.veiculo }}</span></span>
                <!-- <span> nome do condutor: <span> {{ relatorio.condutor }}</span></span> -->
            </div>

            <div class="col-md-5 mt-4" >
                <span>Quantidade de Horas: <span>{{ movimentacao.tempoHora }}</span></span>
                <!-- <span> nome do condutor: <span> {{ relatorio.condutor }}</span></span> -->
            </div>

            <div class="col-md-5 mt-4" >
                <span>Valor a ser pago: <span>R${{ movimentacao.valorHoraTotal }}</span></span>
                <!-- <span> nome do condutor: <span> {{ relatorio.condutor }}</span></span> -->
            </div>

            
         </div>

     </div>



</template>

<style scoped>

</style>

<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

import { Movimentacao } from '@/model/movimentacao';
import MovimentacaoClient from '@/client/movimentacao.client';

import { Relatorio } from '@/model/relatorio';

export default defineComponent({
  name: 'RelatorioView',
  data() {
    return {
      relatorioList: new Array<Movimentacao>(),
      movimentacao: new Movimentacao(),
      relatorio: new Relatorio()

    };
  },
  components: {
    NavBar,
  },
  computed:{
    id(){
        return this.$route.query.id
    }

  },
  mounted(){
    
    if(this.id !== undefined){
        this.findById(Number(this.id))
        this.onClickFechaRelatorio(Number(this.id));
    }
  },

  methods:{

    findById(id: number){
        MovimentacaoClient.findById(id).then(sucess =>{
            this.movimentacao = sucess

        })
        .catch(error =>{
            console.log(error)
        })
    },

    onClickFechaRelatorio(id: number){
        MovimentacaoClient.finalizar(id).then(sucess =>{
            this.relatorio = sucess
        })
        .catch(error =>{
            console.log(error)
        })
    },
  }

  // EMILIO
});



</script>