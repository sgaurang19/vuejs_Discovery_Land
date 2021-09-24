<template>
    <div class="main-header">
        <div align="center" class="header-container">
            <img class="header-logo" src="../../../images/logo-discoveryland.png" alt="logo">
            <div class="header-nav">
                <div v-for="link in links" :key="link.id" >
                <!-- <div class="header-nav"> -->
                    
                    <!-- <router-link to="/">Home</router-link>  -->
                    <a><router-link v-bind:to="link.url" class="hover-3">{{link.urlName}}</router-link></a>
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
            <div class="hidden-nav">
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
import './Header.scss';
export default defineComponent({
    data(){
        return{
            links:[
                // {
                //     id:1,
                //     url: "/",
                //     urlName:"Home",
                // },
                {
                    id:2,
                    url: "/about",
                    urlName:"About DLC",
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



// npm install vue bootstrap bootstrap-vue
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Vue.use(BootstrapVue)