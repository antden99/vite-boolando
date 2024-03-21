<script>
export default {
    name: "AppFooter",
}
</script>

<template>

    <footer class="site_footer">
        <div class="container">
            <div>
                <div class="distance">
                    <p>BOOLANDO s.r.l.</p>
                    <a href="#">Informazioni Legali</a>
                    <a href="#">Informazioni sulla privacy</a>
                    <a href="#">Diritto di recesso</a>

                </div>
            </div>
            <div>

            </div>
            <div>TROVACI ANCHE SU

                <ul>
                    <li><i class="fa-brands fa-square-twitter"></i></li>
                    <li> <i class="fa-brands fa-square-youtube"></i></li>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-brands fa-square-instagram"></i></li>
                </ul>

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

a {

    color: white;
    margin-right: 15px;
}

& ul {
    display: flex;
    list-style: none;

    & li {
        color: white;
        margin: 10px;

    }
}
</style>