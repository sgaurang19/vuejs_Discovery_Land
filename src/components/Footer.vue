<template>
    <div class="header-container">
        <img class="header-logo" src="../../images/logo.jpg" alt="logo">
        <div v-for="link in links" :key="link.id" class="header-nav">
        <!-- <div class="header-nav"> -->
            
            <!-- <router-link to="/">Home</router-link>  -->
            <router-link v-bind:to="link.url">{{link.urlName}}</router-link>
            <!-- <router-link to="/about">About DLC</router-link>
            <router-link to="/about">Our Worlds</router-link>
            <router-link to="/about">Experience</router-link>
            <router-link to="/about">Gallery</router-link>
            <router-link to="/about">Press</router-link> -->

        </div>
  <router-view/>

      
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
.header-container{
    @include disp-type(flex, row , space-between);
    width: 100%;
    height: 10vh;
    align-content: center;
    position: absolute;
    z-index: -999;
}
.header-logo{
    @include disp-type(flex, row , space-evenly);

    width: 20%;
}
.header-nav{
    @include disp-type(flex, row , space-evenly);
    padding-top: 10px;
    width: 80%;
}
</style>