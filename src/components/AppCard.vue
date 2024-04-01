<script>
import AppModale from './AppModale.vue'

export default {
    name: "AppCard",

    components: {

        AppModale: AppModale,
    },

    data() {
        return {
            modaleAperta: false,
            contenutoModale: null,
        }
    },
    props: {
        card:Object,
    },

    methods: {
        showProduct(card) {
            this.modaleAperta = true;
            console.log(this.modaleAperta);

            this.contenutoModale= card
        },

        closeModel() {
            this.modaleAperta = false
        },
        

    }
}
</script>

<template>
    <div class="col">
        <div class="product heart_and_discount img1" @mouseover="card.mouse = true" @mouseout="card.mouse = false">
            <img :src="card.mouse ? card.image : card.immagine2" class="default_image" alt="">
            <span>{{ card.brand }}</span>
            <div @click="showProduct(card)" class="pointer_hover"><strong>{{ card.name }}</strong></div>
            <!--al' evento click si attiva la funzione showproduct che emette un evento chiamato showProductCard che viene recepito dal componente padre in AppMain.vue-->
            <div class=color_red>{{ card.newPrice }}&euro;</div>
            <s>{{ card.price }}&euro;</s>
            <div class="heart">&hearts;</div>
            <div class="discount">{{ card.discount }}</div>
            <div class="green" v-if="card.sostenibility">Sostenibilità</div>

            <AppModale v-if="modaleAperta === true" :cardData = "contenutoModale" @closeModelCard="closeModel"></AppModale>
        </div>
    </div>
</template>

<style>
/* Aggiungi eventuali stili CSS qui */
</style>