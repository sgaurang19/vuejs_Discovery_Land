<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div>
    <Header />
            <div class="main-img">
                <img src="../../../images/ezgif1.gif">
                    <div class="inner o-row">
                <h1 class="h1-Gallery">Discover <br> Your world</h1>
            </div>
          
            </div>
    <!-- <VideoHeader v-bind:headerData="homeHeaderData" /> -->

        <div class="part2-main">
              <div class="part2">
                <div class="left">
                
                    <h1 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> Welcome to </span>
                      </span>
                    </h1>
                    <h3 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> our world </span>
                      </span>
                    </h3>
                  
                  <p>
                    Discover the uniuque atmostphere of our private residential club 
                    communites. Once expirenced. Never forgotten. This is classic,
                    confortable, morden living in nature's most spectaculer settings wolrdwide.
                  </p>
                  <img src="../../../images/home/home2.jpg" alt="">

                </div>
                <div class="right">
                  <img src="../../../images/home/home1.jpg" alt="">
                </div>


              </div>
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

            <div class="part3">
              <div class="part3-upper"><h1>Lands of</h1><h1>Discovery</h1>
                <p>
                  
A world away from the day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey to our communities.
            
                </p>
                <a href="#">North America & Caribbean</a>
              </div>
              <div class="part3-lower">
                <div class="part3-globe-img">
                  <img src="../../../images/home/globe-usa.jpg" width="120" height="80" class="mar-img" alt="Natural" />

                </div>
                <div class="part3-content">
                  <div>
                      <!-- buttons -->
                       <div class="exp-buttons">
    <!-- <i class="fa fa-arrow-circle-left" style="font-size:36px"></i>
  <i class="fa fa-arrow-circle-right" style="font-size:36px"></i> -->
  <div>
   <a href="javascript:" @click="letfMethod(selectedGeo.id)"> <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></a>
  </div>
  &nbsp;
  &nbsp;
  &nbsp;
  <div>
   <a href="javascript:" @click="rightMethod(selectedGeo.id)">  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></a>
    </div> </div>
                      <!-- end -->
                      <div class=part-3-icons>
                         <div class="part-3-icons-text">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-haze" viewBox="0 0 16 16">
                            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                          </svg>
                          <p>{{selectedGeo.whether}}</p>
                         </div>
                         <div class="part-3-icons-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                          </svg>
                          <p>{{selectedGeo.wind}} mph</p>
                         </div>
                          <div class="part-3-icons-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                          </svg>

                          <p>{{selectedGeo.loc}}</p>
                          </div>
                      </div>

                      <div class=part-3-info>
                        <div class="part-3-info-place">{{selectedGeo.place}}</div>
                        <div class="part-3-info-header">{{selectedGeo.placeHeader}}</div>

                        <div class="part-3-info-location">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                          {{selectedGeo.geoLocationN}}<span>&#176;</span>N/ {{selectedGeo.geoLocationW}}<span>&#176;</span>W</div>

                      </div>
                    
                  </div>
                  <!-- <div class="content-img-div">
                    <img class="content-img" :src="getImgUrl(selectedGeo.url)" alt="image" width="10%" height="80%" />

                    </div> -->

                </div><br>
              </div>
                    <img class="content-img" :src="getImgUrl(selectedGeo.url)" alt="image" />


            </div>


            <div class="part4">
               <div class="main-img2">
                  <img src="../../../images/home/Expereinces.jpg" alt="">
                  <!-- <img src="../../../images/ezgif1.gif"> -->
                    <div class="inner2 o-row2">
                      <h1 class="h1-Gallery2">Experience <br> <br><br>
                    <button class="round-button-circle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                      </button>
                      </h1>
                  </div>
              </div>
               <div class="main-img2">
                  <img src="../../../images/home/lifestyle.jpg" alt="">
                  <!-- <img src="../../../images/ezgif1.gif"> -->
                    <div class="inner2 o-row2">
                      <h1 class="h1-Gallery2">Lifestyle <br> <br><br>
                      <button class="round-button-circle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                      </button>
                      </h1>
                  </div>
              </div>
                <div class="main-img2">
                  <img src="../../../images/home/wellness.jpg" alt="">
                  <!-- <img src="../../../images/ezgif1.gif"> -->
                    <div class="inner2 o-row2">
                      <h1 class="h1-Gallery2">Wellness <br><br><br>
                    <button class="round-button-circle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                      </button>
                      </h1>
                  </div>
              </div>
            </div>
    <Footer />
  </div>

</template>
<script type="module" src="./Home.ts">

</script>


