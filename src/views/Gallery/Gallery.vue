<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <div class="main-img">
        <img src="../../../images/gallery-main.jpg">
        <div class="inner o-row">
            <h1 class="h1-Gallery">Gallery</h1>
        </div>
    </div>

  </div>
  <div class="main-gallery">
      <div v-for="image in images" :key="image.id" >
        <img :src="getImgUrl(image.url)" alt="image">
        <p class="img-title"> {{image.text}}</p>
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

<script type="module" src="./Gallery.ts">
</script>


