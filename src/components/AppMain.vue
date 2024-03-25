<script>
import AppCard from './AppCard.vue'
import { cards } from '../data.js'
import axios from 'axios'       //importa axios da axios, ma ovviamente per farlo, nel terminale digiti npm i(alias per install) axios


export default {
    name: "AppMain",

    components: {
        AppCard: AppCard,
    },

    data() {
        return {
            cards: cards,
        }
    },

    //con mounted al caricamento dei dati, prima di essere caricati in pagina, vado a recuperare l'array di oggetti card, tramite il localhost che ho generato nel passaggio precedente con npm run serve(vedi packge.json)
    mounted() {
        axios.get("http://localhost:3000/cards")
            .then(response => {
                console.log(response)
            })
    }
}
</script>

<template>
    <main class="site_main">
        <div class="container">
            <div class="row">

                <AppCard v-for="card in cards" :name="card.name" :brand="card.brand" :newPrice="card.newPrice"
                    :discount="card.discount" :price="card.price" :mouse="card.mouse" :immagine2="card.immagine2"
                    :image="card.image" :sostenibility="card.sostenibility"></AppCard>

                <!--<AppCard v-for="card in cards" :card="card"></AppCard>-->
            </div>
        </div>
    </main>

</template>

<style></style>