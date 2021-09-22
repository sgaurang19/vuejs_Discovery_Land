<template>
    <div class="main-header">
        <div align="center" class="header-container">
            <img class="header-logo" src="../../images/logo.jpg" alt="logo">
            <div class="header-nav">
                <div v-for="link in links" :key="link.id" >
                <!-- <div class="header-nav"> -->
                    
                    <!-- <router-link to="/">Home</router-link>  -->
                    <router-link v-bind:to="link.url">{{link.urlName}}</router-link>
                    <!-- <router-link to="/about">About DLC</router-link>
                    <router-link to="/about">Our Worlds</router-link>
                    <router-link to="/about">Experience</router-link>
                    <router-link to="/about">Gallery</router-link>
                    <router-link to="/about">Press</router-link> -->

                </div>
                <a href="#" class="navbar">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </a>
            </div>
            <router-view/>
                
        
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data(){
        return{
            links:[
                {
                    id:1,
                    url: "/",
                    urlName:"Home",
                },
                {
                    id:2,
                    url: "/about",
                    urlName:"About",
                },
                {
                    id:3,
                    url: "/our_world",
                    urlName:"Our World",
                },
                {
                    id:3,
                    url: "/experience",
                    urlName:"Experience",
                },
                {
                    id:3,
                    url: "/gallery",
                    urlName:"Gallery",
                },
                {
                    id:3,
                    url: "/press",
                    urlName:"Press",
                },
            ]
        }
    }
});
</script>
<style lang="scss">
@mixin disp-type($type, $direction, $align){
    display: $type;
    flex-direction: $direction;
    justify-content: $align;
}
.main-header{
    // @include disp-type(flex, row , space-between);
    display: flex;
    justify-content: center;

}
.header-container{
    @include disp-type(flex, row , space-between);
    width: 80%;
    height: 10vh;
    align-items: center;
    position: absolute;
    margin-bottom: 20px;
    z-index: -999;
}
.header-logo{
    @include disp-type(flex, row , space-evenly);

    width: 20%;
}
.header-nav{
    @include disp-type(flex, row , space-evenly);
    padding-top: 10px;
    
    width: 60%;
}
.navbar {
  width: 40px;
  display: block;

//   margin: 50px auto;
//   border: 1px solid #00bfb6;
//   padding: 8px 10px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
    .two {
        width: 25px;
    }

    .three {
        width: 30px;
    }
}

.navbar div {
  height: 3px !important;
  background: black;
  margin: 2px 0px 2px 0px;
  border-radius: 25px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}



.navbar:hover div {
  width: 40px;
}

</style>