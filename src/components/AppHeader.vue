<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="container">
            <nav>
                <li>
                    <a href="">Donna</a>
                    <a href="">Uomo</a>
                    <a href="">Bambino</a>
                </li>
                <li><img src="/assets/img/boolean-logo.png" alt=""></li>
                <li>Antonio2</li>
            </nav>
        </div>
    </header>

</template>

<style>
header {
    background-color: #ff6900;
    height: 100px;
}

.container {
    height: 100%;
    width: 80%;
    margin: auto;

}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    list-style: none;


    & li {
        width: 33.3%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & a {
            text-decoration: none;
            color: white;
            margin: 10px;
        }

        & img {
            max-width: 100px;
        }
    }
}
</style>