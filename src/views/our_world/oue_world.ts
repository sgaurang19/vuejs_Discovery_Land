import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src

import './our_world.scss';


@Options({
  components: {
    Header, Footer
  },
})

export default class Our_World extends Vue {
    // public base = "../../images";
    public images  = [
        {
            "id" : 1,
            "url" : 'Stocksy.jpg',
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 2,
            "url" : "golf.jpg",
            "head": "JAMES ISLAND",
            "text" : "Southern Gulf Isands, British <br> Columbia, Canada"

        },
        {
            "id" : 3,
            "url" : "swimingpool.jpeg",
            "head": "COSTATERRA",
            "text" : "Comporta, Portugal"
        },
        {
            "id" : 4,
            "url" : "Playa-Grande.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 5,
            "url" : "golf-club-house.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 6,
            "url" : "golf-club-house.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        },
        {
            "id" : 7,
            "url" : "golf-club-house.jpg",
            "head": "NORTH SHORE PRESERVE",
            "text" : "Kaua'i Hawaii"
        }

    ];
    public getImgUrl(src: string):string{
        return require('../../../images/gallery/'+src);
    }

}