<template>
  <NavBar></NavBar>

</template>

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
