<template>
  <div>
    <Header />
            <div class="main-img">
                <img src="../../images/ezgif1.gif">
          
            </div>
    <Footer />
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src


@Options({
  components: {
    Header, Footer
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

.main-img{
    width: 100%;
    height: 100vh;

    z-index: -1;
    img{
        width: 100%;
        height: 100vh;

    }
}

</style>
