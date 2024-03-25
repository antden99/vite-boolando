//creo il file state.js e importo da vue la funzione reattiva
import axios from 'axios'

//importo la reattività da vue
import { reactive } from 'vue';

//rendo possibile con export la constante state a cui assegno reactive
export const state = reactive({
   

    //dichiaro un nuovo array che riempirò successivamente
    cardsList_2: [],

    // Actions that change the state (your methods)
    callApifunction() {

        //alla chiamata di questa funzione invoco ajax che mi permette, tramite l'http ricavato all'inizio tramite il db.jeson, di recuperare un array di oggetti che sti trova in response.data, e che successivamente assegno all'array cardsList_2
        axios.get("http://localhost:3000/cards")
            .then(response => {
                console.log(response)

                this.cardsList_2 = response.data        //recupero cardsList e gli assegno con la chiamata ajax il contenuto di response.data, che sarebbe l'array di oggetti, adesso devo ovviamente andare nel v-for di AppCard e cambiare il recupero dei dati, poichè prima la singola card veniva recuperata da cards (riga 16), adesso invece deve essere recuperata dal nuovo array cardsList e ovviamente per accedervi utilizzo this.cardsList
            })
    },

})
