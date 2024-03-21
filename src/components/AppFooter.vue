<script>
export default {
    name: "AppFooter",
}
</script>

<template>

    <footer class="site_footer">
        <div class="container">
            <div>BOOLANDO s.r.l
                <div class="distance">
                    <a href="#">Informazioni Legali</a>
                    <a href="#">Informazioni sulla privacy</a>
                    <a href="#">Diritto di recesso</a>

                </div>
            </div>
            <div>

            </div>
            <div>TROVACI ANCHE SU
                <div>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-youtube"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                </div>

            </div>
        </div>


    </footer>

</template>

<style scoped>
footer {
    height: 100px;
    background-color: #1a1a1a;
    color: white;
    z-index: 1;
}

.container {
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    list-style: none;
}
</style>