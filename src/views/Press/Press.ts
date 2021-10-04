import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Carousel from '@/components/carousel/carousel.vue'; // @ is an alias to /src
import VideoHeader from '@/components/HeaderVideo/Headervideo.vue';



import './Press.scss'
@Options({
  components: {
    Header, Footer, Carousel, VideoHeader
  },
})

export default class Press extends Vue {}