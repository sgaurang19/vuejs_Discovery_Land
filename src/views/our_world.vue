<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <div class="main-img">
        
        <!-- </div> -->
    </div>

  </div>
  <div class="main-world">
      <div v-for="image in images" :key="image.id" >
        <img :src="getImgUrl(image.url)" alt="image">
        <p class="img-head"> {{image.head}}</p>
        <p class="img-text" v-html=image.text></p>

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
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 2,
            "url" : "golf.jpg",
            "head": "JAMES ISLAND",
            "text" : "Southern Gulf Isands, British <br> Columbia, Canada"

        },
        {
            "id" : 3,
            "url" : "swimingpool.jpeg",
            "head": "COSTATERRA",
            "text" : "Comporta, Portugal"
        },
        {
            "id" : 4,
            "url" : "Playa-Grande.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 5,
            "url" : "golf-club-house.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 6,
            "url" : "Wellness-gallery.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
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
    height: 45vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: -1;
    background-color: #000;

}
.main-world{
    display: grid;
    padding-left: 10px;
    grid-gap: 15px;
    background-color: #000;
    color: #fff;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img{
        width: 400px;
        height: 200px;
    }

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

.img-head{
    text-align: left;
    color:#fff;
    padding-left: 10px;
    font-family: Tahoma;
    font-size: 15px;


}
.img-text{
    text-align: left;
    color:rgb(145, 145, 145);
    padding-left: 10px;
    font-family: Tahoma;
    font-size: 13px;


}
@media screen and(max-width:1000px) {
    .main-world{
        display: grid;
        background-color: #000;
        color: #fff;
        grid-template-columns: 1fr 1fr 1fr ;


    }
    
}
@media screen and(max-width:700px) {
    .main-world{
        display: grid;
        background-color: #000;
        color: #fff;
        grid-template-columns: 1fr 1fr ;


    }
    
}

@media screen and(max-width:400px) {
    .main-world{
        display: grid;
        background-color: #000;
        color: #fff;
        grid-template-columns: 1fr ;


    }
    
}
</style>