<script>
export default {
    name: "AppMain",

    data() {
        return {

            cards: [
                {
                    image: "/assets/img/1.webp",
                    immagine2: "assets/img/1b.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    sostenibility: true,
                    price: 29.99,
                    newPrice: 14.99,
                    mouse: false,
                },
                {
                    image: "/assets/img/2.webp",
                    immagine2: "assets/img/2b.webp",
                    brand: "Guess",
                    name: "ROSES TEE",
                    discount: "-30%",
                    sostenibility: false,
                    price: 29.99,
                    newPrice: 20.99,
                    mouse: false,
                },
                {
                    image: "/assets/img/3.webp",
                    immagine2: "assets/img/3b.webp",
                    brand: "Come Zucchero Filato",
                    name: "VOGLIA DI COLORI PASTELLO",
                    discount: "-30%",
                    sostenibility: false,
                    price: 184.99,
                    newPrice: 129.99,
                    mouse: false,

                },
                {
                    image: "/assets/img/4.webp",
                    immagine2: "assets/img/4b.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    sostenibility: true,
                    price: 29.99,
                    newPrice: 14.99,
                    mouse: false,

                },
                {
                    image: "/assets/img/5.webp",
                    immagine2: "assets/img/5b.webp",
                    brand: "Maya Deluxe",
                    name: "STRIPE BODIES",
                    discount: null,
                    sostenibility: false,
                    price: null,
                    newPrice: 99.99,
                    mouse: false,

                },
                {
                    image: "/assets/img/6.webp",
                    immagine2: "assets/img/6b.webp",
                    brand: "Esprit",
                    name: "MAGLIONE - BLACK",
                    discount: null,
                    sostenibility: false,
                    price: null,
                    newPrice: 29.99,
                    mouse: false,

                },
                
            ]
        }
    }
}
</script>

<template>
    <main class="site_main">
        <div class="container">
            <div class="row">
                <div class="col" v-for="card in cards">
                    <div class="product heart_and_discount img1" @mouseover="card.mouse = true"
                        @mouseout="card.mouse = false">
                        <img :src="card.mouse === true ? card.image : card.immagine2" class="default_image" alt="">
                        <span>{{ card.brand }}</span>
                        <div><strong>{{ card.name }}</strong></div>
                        <div class=color_red>{{ card.newPrice }}&euro;</div>
                        <s>{{ card.price }}&euro;</s>
                        <div class="heart">&hearts;</div>
                        <div class="discount">{{ card.discount }}</div>
                        <div class="green" v-if="card.sostenibility === true">Sostenibilità</div>

                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style >

</style>