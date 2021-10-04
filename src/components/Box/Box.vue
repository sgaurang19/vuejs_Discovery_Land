<template>
    <div class="row1">
        <div class="row1_item">
            <div class="section3_img1">
                <img :src="itemlist.box_img" alt="" srcset="">
            </div>
            <div class="section3_img2"></div>
        </div>
        <div class="row1_item1">
            <div class="section3_box2">
                <div class="box2_head">
                    <h2>{{itemlist.box_head}}</h2>
                </div>
                <div class="box2_text">
                    <p>
                        {{itemlist.box_text}}
                    </p>
                </div>
                <button type="submit" class="explore_btn">Explore</button>
            </div>
        </div>
    </div>
</template>

<script type="module" src='./Box.ts'>
</script>

<style lang="scss">
@import './Box';
</style>