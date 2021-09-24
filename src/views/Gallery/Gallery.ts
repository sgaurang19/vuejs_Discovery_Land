import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import './Gallery.scss';



@Options({
  components: {
    Header, Footer
  },
})

export default class Gallery extends Vue {
    // public base = "../../images";
    public images  = [
        {
            "id" : 1,
            "url" : 'Stocksy.jpg',
            "text" : "Outdoor Pursuits"
        },
        {
            "id" : 2,
            "url" : "golf.jpg",
            "text" : "Golf"

        },
        {
            "id" : 3,
            "url" : "swimingpool.jpeg",
            "text" : "Lifestyle"
        },
        {
            "id" : 4,
            "url" : "Playa-Grande.jpg",
            "text" : "Landscapes"
        },
        {
            "id" : 5,
            "url" : "golf-club-house.jpg",
            "text" : "Clubhouse"
        },
        {
            "id" : 6,
            "url" : "Wellness-gallery.jpg",
            "text" : "Wellness"
        }

    ];
    public getImgUrl(src: string):string{
        return require('../../../images/gallery/'+src);
    }

}