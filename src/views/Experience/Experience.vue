<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div>
    <Header />
            <div class="main-img-about">
                <img src="../../../images/ezgif1.gif">
                    <div class="inner-about o-row-about">
                <h1 class="h1-Gallery">Unforgotable <br> Experience</h1>
            </div>
          
            </div>

            <div class="para-about">
                <p>
      Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you.
    
                </p>
            </div>

            <!-- left2. vue add here -->
            <Left2 v-bind:callby="'Experience'"/>
        
            <div class="full-img">
                  <img class="img90" src="../../../images/about/Bakers.jpg" alt="">

            </div>
<!-- coursaoal -->
           <div class="experience_container">
            <div class="section3_container">
                <div class="section3_content">
                    <div class="row" v-for="(items, index) in box_data" :key="index">
                        <Box v-bind:itemlist="items"/>
                    </div>
                </div>
            </div>
            </div>

            <div class="Exptabs">
              
            </div>
             
             <div class="part4-about">
               <div class="main-img2-about">
                  <img src="../../../images/about/our-world.jpg" alt="">
                  <!-- <img src="../../../images/ezgif1.gif"> -->
                    <div class="inner2-about o-row2-about">
                      <h1 class="h1-Gallery2-about">Experience <br> <br><br>
                    
                      </h1>
                    <a><router-link to="/our_world" class="hover-5"><span>Explore</span></router-link></a>
                      
                  </div>
              </div>
               
            </div>
<!-- end -->
       
    <Footer />
  </div>

</template>
<script type="module" src="./Experience.ts">

</script>


