<script>

export default {
    name: "AppCard",

    //props:{
        //card:Object,}
    
    props:['brand',"name","newPrice","price","discount","mouse","image","immagine2","sostenibility"]
}
</script>

<template>
    <div class="col">
        <div class="product heart_and_discount img1" @mouseover="mouse = true" @mouseout="mouse = false">
            <img :src="mouse === true ? image : immagine2" class="default_image" alt="">
            <span>{{ brand }}</span>
            <div><strong>{{ name }}</strong></div>
            <div class=color_red>{{ newPrice }}&euro;</div>
            <s>{{ price }}&euro;</s>
            <div class="heart">&hearts;</div>
            <div class="discount">{{ discount }}</div>
            <div class="green" v-if="sostenibility === true">Sostenibilità</div>

        </div>
    </div>

</template>

<style></style>