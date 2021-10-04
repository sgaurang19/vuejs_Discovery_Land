// import { Options, Vue } from 'vue-class-component';

// @Options({
//     props:{
//         paraContent: {
//             type: Array
//         },
//         calledBy:{
//           type: String
//         }
//     }
// })
import { defineComponent } from "vue";
export default defineComponent ({
    // private getForHome(pic: string): string {
    //     return require("@/assets/Home/" + pic);
    //   }
    // private getForAboutDLC(pic: string): string {
    //     return require("@/assets/AboutDLC/" + pic);
    // }  
    data()
    {
        return{
            ourMissionPara:[
                {
                    id: 1,
                   content: "we don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses incredible residential offerings, premier golf course  welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience."
                }
            ]
                
            }
        }
    
});