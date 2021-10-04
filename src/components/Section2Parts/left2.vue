<template>
   <div class="part2-main-about">
              <div class="part2-about">
                <div class="left-about">
                
                    <h1 class="ml7">
                      <span class="text-wrapper">
                        <span class="letters"> Our Mission </span>
                      </span>
                    </h1> 
                    <p v-text="ourMissionPara[0].content"></p>
                    <!-- <p>{{ourMissionPara[0]}}</p><br> -->
                    <!-- <p>{{ourMissionPara[1]}}</p>     -->
                    <!-- <p v-bind:callby="'About'">
                        We don't build buildings, but rather we build settings
                        where families can create intergenerational memories 
                        and enrich their lives in exquisite and untouched 
                        sancturies. Everythings we do is driven by the fundamental
                        desired to create spaces where families can be together
                        <br>
                        <br>
                        These settings offer a relaxed and comfortable sense of community
                        featuring outstanding clubhousees,
                        incredible residential offerings, premier golf courses,
                        welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits
                        program: all offering the highest of service standards to enrich your experience.
                    </p> -->

                </div>
                <div class="right-about">
                  <img src="../../../images/about/part2.jpg" alt="">
                </div>


              </div>
            </div>
</template>

<script lang="ts">
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
            ourMissionPara:[{
                    id: 1,
                   content: "we don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses incredible residential offerings, premier golf course  welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience."
                }]
                
            }
        }
    
});
</script>