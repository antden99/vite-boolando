<script>
import AppCard from './AppCard.vue'
import {cards} from '../data.js'
export default {
    name: "AppMain",

    components:{
        AppCard:AppCard,
    },

    data() {
        return {
           cards:cards,
        }
    }
}
</script>

<template>
    <main class="site_main">
        <div class="container">
            <div class="row">

                <AppCard v-for="card in cards" :name="card.name" :brand="card.brand" :newPrice="card.newPrice" :discount="card.discount" :price="card.price" :mouse="card.mouse" :immagine2="card.immagine2" :image="card.image" :sostenibility="card.sostenibility"></AppCard>

                <!--<AppCard v-for="card in cards" :card="card"></AppCard>-->
            </div>
        </div>
    </main>

</template>

<style >

</style>