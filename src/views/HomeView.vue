<template>
 <div class="">
  <div class="fundo tela">
    <div class="porCima tela" style="margin: 0; padding: 0;">
      <div class="container" style="height: 100vh;">
        <div class="d-flex homeTela row" style="justify-content: center; align-items: center; height: 100%;">
          <div class="col-md-10 offset-md-6 conteudo">
            <div class="col-md-5 bordaContainer" style="margin-top: 6%;">
              <!-- <img src="../assets/sas-ma-product-f-18-avionics-teaser-2500x1700-removebg-preview.png" alt="" srcset="" style="height: 20vh;"> -->
              <h1 class="" >Bem vindo ao FlyCar</h1>
              <h5 >o seu sistema de estacionamento</h5>
              <div style="margin-top: 10%;">
                <h3>Cadastre uma Movimentação</h3>
                <router-link to="/movimentacao" >
                  <button type="button" class="btn btn-primary" style="margin-bottom: 2%; margin-top: 2%;">Cadastrar</button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col">
            
          </div>
          
          
        </div>
        
      </div>



    </div>
  </div>
 </div>
</template>

<style lang="scss">

.fundo{
  //background-image: url('../assets/wepik-export-20230621074455RLnh.png');
   background-image: url('../assets/flycar.jpg');
  background-size: cover;
}

.porCima{
  background-color: rgba(0, 0, 0, 0.596);
}

.tela{
  width: 100vw;
  height: 100vh;
}

.bordaContainer{
  border-radius: 20px;
  color: rgb(226, 226, 226);
  background-color: rgba(212, 212, 212, 0.26);
  
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
  },
});
</script>
