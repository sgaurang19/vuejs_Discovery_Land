<template>
    <div class="Footer-container">
        <div class="footer-logo1">   
            <img class="footer-logo"  src="../../images/footer-icon.png" alt="logo">
            <div class="fotter-logo-text">
                <p>GET IN TOUCH</p>
                (480) 624-5200
                <a href="mailto:mail@discoverylandoco.com">mail@discoverylandoco.com</a>
            </div>

        </div>
        <div class="footer-content">
            <div class="footer-nav">
                <div v-for="link in links" :key="link.id" >
                <!-- <div class="header-nav"> -->
                    
                    <!-- <router-link to="/">Home</router-link>  -->
                    <router-link class="links" v-bind:to="link.url">{{link.urlName}}</router-link>
                    <!-- <router-link to="/about">About DLC</router-link>
                    <router-link to="/about">Our Worlds</router-link>
                    <router-link to="/about">Experience</router-link>
                    <router-link to="/about">Gallery</router-link>
                    <router-link to="/about">Press</router-link> -->

                </div>
            </div>
            
            <router-view/>
            <div class="footer-nav"> 
               <div>Magazine</div>
               <div>Careers</div>
               <div>Foundation</div>
               <div>Company</div>  
               <div>Contact</div>  
               <div>Privacy</div>  
            </div>
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
.Footer-container{
    @include disp-type(flex, row , space-between);
    width: 99%;
    height: 50vh;
    align-content: center;
    position: absolute;
    z-index: -999;
    color:#fff;
    background-color: #001F19;
}
.footer-logo{
    // @include disp-type(flex, row , space-evenly);
    padding-left: 50px;
    padding-top: 40px;
    width: 15%;
    height:15%;
    // width: 50%;
}
.footer-logo-text{
    padding-top: 40px;
    font-size: 15px;
}
.footer-logo1{
    @include disp-type(flex, row , space-between);

    width: 100%;
}
.footer-content{
    @include disp-type(flex, row , space-evenly);
    width: 100%;
    font-size: 20px;

}
.footer-nav{
    @include disp-type(flex, column , start);
    padding-top: 20px;
    line-height: 50px;
  
}
.links{
    text-decoration: none;
    color:#fff;

}

@media screen and (max-width:850px) {
    .Footer-container{
         @include disp-type(flex, column , space-between);
        
    }
    .footer-logo-text{
        font-size: 10px;
    }
    .footer-content{
        font-size: 15px;
    }
    
    
}
</style>