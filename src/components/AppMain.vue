<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <main class="site_main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="product heart_and_discount img1">
                        <img src="/assets/img/1b.webp" class="default_image" alt="">

                        <span>Levi's</span>
                        <div><strong>RELAXED FIT TEE UNISEX</strong></div>
                        <div class=color_red>14,99&euro;</div>
                        <s>29,99&euro;</s>
                        <div class="heart">&hearts;</div>
                        <div class="discount">-50%</div>
                        <div class="green">Sostenibilità</div>

                    </div>
                </div>

                <div class="col">
                    <div class="product heart_and_discount img2">
                        <img src="/assets/img/2.webp" alt="">
                        <span>Guess</span>
                        <div><strong>ROSES TEE</strong></div>
                        <div class=color_red>20,99&euro;</div>
                        <s>29,99&euro;</s>
                        <div class="heart">&hearts;</div>
                        <div class="discount">-30%</div>

                    </div>
                </div>

                <div class="col">
                    <div class="product heart_and_discount img3">
                        <img src="/assets/img/3.webp" alt="">
                        <span>Come Zucchero Filato</span>
                        <div><strong>VOGLIA DI COLORI PASTELLO</strong></div>
                        <div class=color_red>129,99&euro;</div>
                        <s>184,99&euro;</s>
                        <div class="heart">&hearts;</div>
                        <div class="discount">-30%</div>


                    </div>
                </div>



                <div class="col">
                    <div class="product heart_and_discount img4">
                        <img src="/assets/img/4b.webp" alt="">
                        <span>Levi's</span>
                        <div><strong>TEE UNISEX</strong></div>
                        <div class=color_red>14,99&euro;</div>
                        <s>29,99&euro;</s>
                        <div class="heart">&hearts;</div>
                        <div class="discount">-30%</div>
                        <div class="green">Sostenibilità</div>

                    </div>
                </div>

                <div class="col">
                    <div class="product heart_and_discount img5">
                    <img src="/assets/img/5.webp" alt="">
                    <span>Maya Deluxe</span>
                    <div><strong>STRIPE BODICE</strong></div>
                    <div class=color_red>99,99&euro;</div>
                    <div class="heart">&hearts;</div>





                </div>
                </div>

                <div class="col">
                    <div class="product heart_and_discount img6">
                    <img src="/assets/img/6.webp" alt="">
                    <span>Esprit</span>
                    <div><strong>MAGLIONE - BLACK</strong></div>
                    <div class=color_red>29,99&euro;</div>
                    <div class="heart">&hearts;</div>

                </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style>
main {
    height: calc(100vh - 200px);
    overflow-y: auto;

}

.container {
    height: 100%;
    width: 80%;
    margin: auto;
    max-width: 1600px;
}



img {
    max-width: 100%;
}

.product {
    width: 460px;
}

.heart_and_discount {
    position: relative;
}

.heart {
    position: absolute;
    top: 10px;
    right: 0;
    background-color: white;
    font-size: 30px;
    text-align: center;
    width: 40px;
    height: 40px;

}

.discount {
    position: absolute;
    bottom: 100px;
    left: 0;
    background-color: red;

    text-align: center;
    color: white;
}

.green {
    position: absolute;
    bottom: 100px;
    left: 0;
    background-color: green;

    text-align: center;
    color: white;
    left: 15%;
}

.color_red {
    color: red;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.col {
    width: ((100% / 12) * 4);
}

.img1:hover img {
    content: url(/assets/img/1.webp);
}

.img2:hover img {
    content: url(/assets/img/2b.webp);
}

.img3:hover img {
    content: url(/assets/img/3b.webp);
}

.img4:hover img {
    content: url(/assets/img/4.webp);
}

.img5:hover img {
    content: url(/assets/img/5b.webp);
}

.img6:hover img {
    content: url(/assets/img/6b.webp);
}
</style>