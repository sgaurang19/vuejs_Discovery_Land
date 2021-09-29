import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Carousel from '@/components/carousel/carousel.vue'; // @ is an alias to /src




import './Home.scss'
@Options({
  components: {
    Header, Footer, Carousel
  },
})

export default class Home extends Vue {
  public geo  = [
    {
        "id" : 0,
        "url" : 'Stocksy.jpg',
        "whether" : 36,
        "wind" : 78,
        "loc" : 251,
        "place" : "Rio San Juan",
        "placeHeader" : "Playa Grande",
        "geoLocationN" : 19.34353,
        "geoLocationW" : 23.34353,

    },
    {
        "id" : 1,
        "url" : 'Stocksy.jpg',
        "whether" : 32,
        "wind" : 2.91,
        "loc" : 325,
        "place" : "Cashiers, North Carolina",
        "placeHeader" : "Mountaintop",
        "geoLocationN" : 35.34353,
        "geoLocationW" : -83.34353,

    },
    {
        "id" : 2,
        "url" : 'golf.jpg',
        "whether" : 26,
        "wind" : 8.89,
        "loc" : 298,
        "place" : "Rio San Juan",
        "placeHeader" : "Playa Grande",
        "geoLocationN" : 19.34353,
        "geoLocationW" : 23.34353,
    },
    {
        "id" : 3,
        "url" : 'swimingpool.jpeg',
        "whether" : 36,
        "wind" : 78,
        "loc" : 251,
        "place" : "Rio San Juan",
        "placeHeader" : "Playa Grande",
        "geoLocationN" : 19.34353,
        "geoLocationW" : 23.34353,
    },
    {
        "id" : 4,
        "url" : 'Stocksy.jpg',
        "whether" : 36,
        "wind" : 78,
        "loc" : 251,
        "place" : "Rio San Juan",
        "placeHeader" : "Playa Grande",
        "geoLocationN" : 19.34353,
        "geoLocationW" : 23.34353,
    },
    {
        "id" : 5,
        "url" : 'Stocksy.jpg',
        "whether" : 36,
        "wind" : 78,
        "loc" : 251,
        "place" : "Rio San Juan 1",
        "placeHeader" : "Playa Grande1",
        "geoLocationN" : 19.34353,
        "geoLocationW" : 23.34353,
    }

  ];
  selectedGeo = this.geo[0];
  temp = 0;
  id =0 ;
   letfMethod(selectedValue : number): any{
     console.log(selectedValue);
     if(selectedValue==0){
      this.temp = this.geo.length-1;
      
     }
     else{
      // selectedValue = selectedValue-1;
      this.temp = selectedValue -1;
      console.log("object", this.temp);
      // this.selectedGeo = this.geo[selectedValue];
     }
    this.id = this.temp;
     console.log(this.id);
      //  const newData : any = this.geo.filter((getGeo)=>{
      //    getGeo.id == this.id
      //    console.log(getGeo.id);
      //  })[this.id-1];
       this.selectedGeo = this.geo[this.id];
   
    //  console.log(this.selectedGeo);
     
   }
   rightMethod (selectedValue : number): any{

    if(selectedValue==this.geo.length-1){
      this.temp = 0;
      
     }
     else{
      // selectedValue = selectedValue-1;
      this.temp = selectedValue +1;
      console.log("object", this.temp);
      // this.selectedGeo = this.geo[selectedValue];
     }
    this.id = this.temp;
     console.log(this.id);
      //  const newData : any = this.geo.filter((getGeo)=>{
      //    getGeo.id == this.id
      //    console.log(getGeo.id);
      //  })[this.id-1];
       this.selectedGeo = this.geo[this.id];
   }
  public getImgUrl(src: string):string{
    return require('../../../images/gallery/'+src);
}
}