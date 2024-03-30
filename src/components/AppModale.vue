<script>

export default {
    name: "AppModale",

    props: {
        cardData: Object,
    },

    methods: {
        closeModelCard() {
            //console.log("ciao")
            this.$emit('closeModelCard')
        }
    }
}
</script>

<template>
    <div class="modale">

        <div class="left">
            <div><img :src="cardData.image" alt=""></div>
            <div><img :src="cardData.immagine2" alt=""></div>
        </div>
        <div class="right">
            <p>{{ cardData.name }}</p>
            <p>{{ cardData.brand }}</p>
            <p>{{ cardData.price }}</p>
            <p>{{ "discounted: " + cardData.newPrice }}</p>
            <p>{{ "discount: " + cardData.discount }}</p>
            <div @click="closeModelCard"><button class="my_btn"><i class="fa-solid fa-x"></i></button></div>
        </div>
    </div>
</template>

<style>

</style>