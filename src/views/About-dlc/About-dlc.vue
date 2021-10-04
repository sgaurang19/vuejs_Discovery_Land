<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div>
    <Header />
            <div class="main-img-about">
                <img src="../../../images/ezgif1.gif">
                    <div class="inner-about o-row-about">
                <h1 class="h1-Gallery">Creating Your <br>Perfect world</h1>
            </div>
          
            </div>

            <div class="para-about">
                <p>Founded in 1994 by Mike Meldman, Discovery Land Company
                    is a US-based real eastate developer and operator of 
                    private residentail club communities and resoert with a world
                    renowed portfolio of 
                    domestic and international properties
                </p>
            </div>

            <!-- left2. vue add here -->
            <Left2 v-bind:ourMissionData="ourMissionDataObject"/>
        
            <div class="full-img">
                  <img class="img90" src="../../../images/about/Bakers.jpg" alt="">

            </div>
<!-- coursaoal -->
<div class="explore-main">
  
  <div class="explore">
  <h1 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> Explore </span>
                      </span>
                    </h1><br>
                    <h3 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> our world </span>
                      </span>
                    </h3>
  </div>
  <div class="exp-buttons">
    <!-- <i class="fa fa-arrow-circle-left" style="font-size:36px"></i>
  <i class="fa fa-arrow-circle-right" style="font-size:36px"></i> -->
  <div> <button class="round-button-circle-main">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
  </div>
  <div> <button class="round-button-circle-main">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
    </div> </div>
</div>
  <Carousel />
<!-- end -->
        <div class="full-img">
                  <img class="img100" src="../../../images/about/des.jpg" alt="">
            
        </div>
            <!-- <div>
                <marquee behavior="alternate" direction="left">
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />
                  <img src="../../../images/gallery/golf-club-house.jpg" width="120" height="80" class="mar-img" alt="Natural" />

                </marquee>
            </div> -->

            <div class="part2-main-about">
              <div class="part2-about">
                  <div class="right-about">
                  <img src="../../../images/about/des1.jpg" alt="">
                </div>
                <div class="left-about">
                
                    <h1 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> Discovery Design </span>
                      </span>
                    </h1>
                   
                  
                    <p>
                        We don't build buildings, but rather we build settings
                        where families can create intergenerational memories 
                        and enrich their lives in exquisite and untouched 
                        sancturies. Everythings we do is driven by the fundamental
                        desired to create spaces where families can be together
                    </p>
                  <img src="../../../images/about/des2.jpg" alt="">


                </div>
                


              </div>
            </div>
        <div class="full-img">
                  <img class="img100" src="../../../images/about/house.jpg" alt="">
            
        </div>

        <div class="part2-main-about">
              <div class="part2-about">
                  
                <div class="left-about">
                
                    <h1 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> Discovery Builders </span>
                      </span>
                    </h1>
                   
                  
                    <p>
                        Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building.
                    </p>
                  <img src="../../../images/about/builderleft.jpg" alt="">


                </div>
                <div class="right-about">
                  <img src="../../../images/about/builderright.jpg" alt="">
                </div>
                


              </div>
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
    <Footer />
  </div>

</template>
<script type="module" src="./About-dlc.ts">

</script>


