<script>
import AppCard from './AppCard.vue'
import { cards } from '../data.js'
import axios from 'axios'       //importa axios da axios, ma ovviamente per farlo, nel terminale digiti npm i(alias per install) axios
import { state } from '../state.js'   //importo la costante state, con named import e quindi le {} per poi utilizzarla successivamente


export default {
    name: "AppMain",
    components: {
        AppCard: AppCard,
    },

    data() {
        return {
            cards: cards,
            cardsList: [],  //dichiaro cardsList come un array vuoto che andò a riempire successivamente
            state: state,    //alla proprietà state assegno state, che sarebbe la costante importata
        }
    },

    //con mounted al caricamento dei dati, prima di essere caricati in pagina, vado a recuperare l'array di oggetti card, tramite il localhost che ho generato nel passaggio precedente con npm run serve(vedi packge.json)

    mounted() {

        //all'avvio del programma, verrà invocata la funzione callApiFunction che sti trova nel file globale state importato precedentemente
        state.callApifunction()
        /*
        axios.get("http://localhost:3000/cards")
            .then(response => {
                console.log(response)

                this.cardsList=response.data        //recupero cardsList e gli assegno con la chiamata ajax il contenuto di response.data, che sarebbe l'array di oggetti, adesso devo ovviamente andare nel v-for di AppCard e cambiare il recupero dei dati, poichè prima la singola card veniva recuperata da cards (riga 16), adesso invece deve essere recuperata dal nuovo array cardsList e ovviamente per accedervi utilizzo this.cardsList
            })
            */
    },

}
</script>

<template>
    <main class="site_main">
        <div class="container">

            <div class="row">
                <!--this.state.cardsList_2, serve per accedere all'array cardsList_2 che è stato dichiarato e riempito precedentemente dalla chiamata avvenuta nel mounted nel file state.js-->

                <!--utilizzo this.state.message per accedere alla proprietà dichiarata nel file state.js-->
                <!--<p>{{ this.state.message }}</p> -->
                <AppCard v-for="card in this.state.cardsList_2" :card="card">
                </AppCard>
                <!--AppCard ha in ascolto l'evento showProductCard, appena evocato questo evento, svolge la funzione ShowProductCard dichiarata nei metodi-->
               
                <!--<AppCard v-for="card in cards" :card="card"></AppCard>-->
            </div>
        </div>
    </main>

</template>

<style>
</style>


<!--1) creo un componente AppModale a cui passo come props cardData e lo dichiaro come un oggetto
    2) all'interno di AppModale, utilizzo cardData."..." per definire tutte le proprietà che potrà utilizzare
    3) all'interno di AppMain, dichiaro due proprietà: modaleAperta e contenutoModale, la prima verrà aggiornata tramite evento 
        per aprire e chiudere la modale, la seconda invece, dichiarata inizialmente vuota, viene riempita all'interno della funzione openModal,
        con l'intero conenuto della card, in modo tale, che successivamente, conterrà dinamicamente i dati della card che è stata selezionata volta per volta.
    4) sul componente AppModale, inserisco una direttiva v-if, che controlla se la modale è aperta, e assegno tramite props a cardData, precedentemente dichiarato oggetto, il contenuto di "contenutoModale
    5) così facendo, ogni qual volta si clicca la modale, il suo contenuto cambia."-->