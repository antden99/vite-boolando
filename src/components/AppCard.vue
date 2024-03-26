<script>


export default {
    name: "AppCard",

    props: ['brand', "name", "newPrice", "price", "discount", "mouse", "image", "immagine2", "sostenibility","visible"],

    methods: {
        showProduct() {
            this.$emit('showProductCard');  //per far ricevere l'evento al padre(AppMain) utilizzo $emit
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="product heart_and_discount img1" @mouseover="mouse = true" @mouseout="mouse = false">
            <img :src="mouse ? image : immagine2" class="default_image" alt="">
            <span>{{ brand }}</span>
            <div @click="showProduct"><strong>{{ name }}</strong></div>     <!--al' evento click si attiva la funzione showproduct che emette un evento chiamato showProductCard che viene recepito dal componente padre in AppMain.vue-->
            <div class=color_red>{{ newPrice }}&euro;</div>
            <s>{{ price }}&euro;</s>
            <div class="heart">&hearts;</div>
            <div class="discount">{{ discount }}</div>
            <div class="green" v-if="sostenibility">Sostenibilità</div>
           
        </div>
    </div>
</template>

<style>
/* Aggiungi eventuali stili CSS qui */
</style>
