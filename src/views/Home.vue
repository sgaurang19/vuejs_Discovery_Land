<template>
  <div>
    <Header >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Options({
  components: {
    Header
  },
})
export default class Home extends Vue {}
</script>
