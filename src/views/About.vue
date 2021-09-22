<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class About extends Vue {}
</script>
