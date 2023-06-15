<template>
  <NavBar></NavBar>

<div class="container d-flex text-center align-items-center header_marca">
  <span>Lista de Marcas</span>
  <router-link to="/marcaCadastrar" class="botao_cadastrar"> <button>Cadastrar</button>  </router-link> 
</div>

<div class="container d-flex align-items-center justify-content-center">
  <table class="table w-50 table-striped">
  <thead>
    <tr>
      <th class="col-1" scope="col" >#</th>
      <th class="col-1" scope="col" >Nome da Marca</th>
    </tr>
  </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style lang="scss">

.header_marca{
  padding-top: 1%;
}

.botao_cadastrar{
  background-color: aquamarine;
  margin-left: 3%;
}

</style>


<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'MarcaListaView',
  components: {
    NavBar,
  },
});
</script>
