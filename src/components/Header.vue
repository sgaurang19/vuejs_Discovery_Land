<template>
    <div class="main-header">
        <div align="center" class="header-container">
            <img class="header-logo" src="../../images/logo-discoveryland.png" alt="logo">
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
<style lang="scss">
@mixin disp-type($type, $direction, $align){
    display: $type;
    flex-direction: $direction;
    justify-content: $align;
}
.main-header{
    // @include disp-type(flex, row , space-between);
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
  

}
.header-container{
    @include disp-type(flex, row , space-between);
    width: 90%;
    height: 20vh;
    align-items: center;
    position: absolute;
    margin-bottom: 20px;
    // z-index: -1;
    // position: fixed;
}
.header-logo{
    @include disp-type(flex, row , space-evenly);
    height: 50%;
    width: 20%;
}
.hidden-nav{
    display: none;
}
.header-nav{
    @include disp-type(flex, row , space-evenly);
    padding-top: 10px;
    width: 40%;
    font-family: sans-serif;
    color: #fff;
    font-weight: 300;
            a, a > span {
                position: relative;
                color: inherit;
                text-decoration: none;
                line-height: 24px;
            }
            a:before, a:after, a > span:before, a > span:after {
                content: '';
                position: absolute;
                transition: transform .3s ease;
            }
            
            .hover-3 {
                display: inline-flex;
                // padding-top: 10px;
                // padding-bottom: 5px;
                overflow: hidden;
            }
            .hover-3:before {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: #fff;
                transform: translateX(-100%);
            }
            .hover-3:hover:before {
                transform: translateX(0);
            }
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

.router-link{
    
    // text-decoration: none;
    color:#fff;
        
}
@media screen and (max-width:1050px) {
    .header-nav{
        display: none;
    }
    .hidden-nav{
        display: block;
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
    div {
  height: 3px !important;
  background: black;
  margin: 2px 0px 2px 0px;
  border-radius: 25px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
    }
    
}


</style>