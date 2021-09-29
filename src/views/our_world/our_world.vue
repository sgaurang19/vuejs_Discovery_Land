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

<script type="module" src="./oue_world.ts">
</script>
