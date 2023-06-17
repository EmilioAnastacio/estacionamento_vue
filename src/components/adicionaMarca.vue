<template>

<div class="modal fade" id="adicionaMarca" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar Marca</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
              <label for="recipient-name" class=" row m-auto col-form-label">Marca:</label>
              <input type="text" class="form-control" placeholder="Nome da marca" id="recipient-name">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-success">Adicionar</button>
      </div>
    </div>
  </div>
</div>

</template>

<style>

.empurra_botao{
  margin-left: 1%;
  width: 10%;
}

</style>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'adicionaMarca',
  props: {
    msg: String,
  },
});
</script>