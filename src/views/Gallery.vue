<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <div class="main-img">
        <img src="../../images/gallery-main.jpg">
        <div class="inner o-row">
            <h1 class="h1-Gallery">Gallery</h1>
        </div>
    </div>

  </div>
  <div class="main-gallery">
      <div v-for="image in images" :key="image.id" >
        <img :src="getImgUrl(image.url)" alt="image">
        <p class="img-title"> {{image.text}}</p>
      </div>
  </div>
  <Footer />
    
  <!-- <div class="main-gallery">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">
      <img src="../../images/icon.jpg">

  </div> -->
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

export default class Gallery extends Vue {
    // public base = "../../images";
    public images  = [
        {
            "id" : 1,
            "url" : 'Stocksy.jpg',
            "text" : "Outdoor Pursuits"
        },
        {
            "id" : 2,
            "url" : "golf.jpg",
            "text" : "Golf"

        },
        {
            "id" : 3,
            "url" : "swimingpool.jpeg",
            "text" : "Lifestyle"
        },
        {
            "id" : 4,
            "url" : "Playa-Grande.jpg",
            "text" : "Landscapes"
        },
        {
            "id" : 5,
            "url" : "golf-club-house.jpg",
            "text" : "Clubhouse"
        },
        {
            "id" : 6,
            "url" : "Wellness-gallery.jpg",
            "text" : "Wellness"
        }

    ];
    public getImgUrl(src: string):string{
        return require('../../images/gallery/'+src);
    }

}
</script>

<style lang="scss" scoped>
@mixin dispType($type, $direction, $align){
    display: $type;
}
.main-img{
    // min-width: 100%;   
    height: 65vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: -1;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

}
.main-gallery{
    display: grid;
    background-color: #000;
    color: #fff;
    grid-template-columns: 1fr 1fr 1fr;


}
.inner{
    position: relative;
    z-index: 3
}
.o-row{
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
.h1-Gallery{
    font-family:gt-sectra;
    color: #fff;
    font-size: calc(20.66667px + 3.06667vw);
    font-weight: 200;
}
.img-title{
    text-align: center;
}
@media screen and(max-width:700px) {
    .main-gallery{
        display: grid;
        background-color: #000;
        color: #fff;
        grid-template-columns: 1fr 1fr ;


    }
    
}

@media screen and(max-width:400px) {
    .main-gallery{
        display: grid;
        background-color: #000;
        color: #fff;
        grid-template-columns: 1fr ;


    }
    
}
</style>