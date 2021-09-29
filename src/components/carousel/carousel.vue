<template>
    <div class="slider">
	<div class="slide-track">
		<div class="slide ">
            <div class="main-img1">
			<img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
            <div class="inner1 o-row1">
                 <h1 class="h1-Gallery1">Gallery</h1>
                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
            </div>
            </div>

		</div>
		<!-- <div class="slide"> -->
                 <div class="slide ">
            <div class="main-img1">
			<img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
            <div class="inner1 o-row1">
                 <h1 class="h1-Gallery1">Gallery</h1>
                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
            </div>
            </div>

		</div>
		<!-- </div> -->
		<!-- <div class="slide"> -->
             <div class="slide ">
            <div class="main-img1">
			<img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
            <div class="inner1 o-row1">
                 <h1 class="h1-Gallery1">Gallery</h1>
            </div>
            </div>

		<!-- </div> -->
		</div>
        <!-- <div class="slide"> -->
             <div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div>
		<!-- </div> -->
                    <div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div>
                <div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div>
                <div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

                </div><div class="slide ">
                    <div class="main-img1">
                    <img src="../../../images/gallery/golf-club-house.jpg"  alt="Natural" />
                    <div class="inner1 o-row1">
                        <h1 class="h1-Gallery1">Gallery</h1>
                    </div>
                    </div>

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
$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
    
background: white;
	// box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	// height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	// width: 960px;
	
	&::before,
	&::after {
		// @include white-gradient;
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
}
.main-img1{
    width: 300px;
    height: 70vh;

    position: relative;
    overflow: hidden;
    display: flex;
    align-items: end;
    z-index: -1;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        -o-object-fit: cover;
        object-fit: cover;
    }
}

.slide-track {
  animation: scroll $animationSpeed linear infinite;
  display: flex;
  width: calc(250px * 14);
 
}

.slide {
padding: 20px;
}
.o-row1{
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    align-items: center;
}
.h1-Gallery1{
    font-family:gt-sectra;
    color: #fff;
    align-items: center;
    // font-size: calc(20.66667px + 3.06667vw);
    // font-weight: 200;
}
.inner1{
    position: relative;
    z-index: 3;
    align-items: center;
}

</style>