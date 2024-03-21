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
                <li>
                    <ul>
                        <li><i class="fa-solid fa-user"></i></li>
                        <li><i class="fa-solid fa-heart"></i></li>
                        <li><i class="fa-solid fa-bag-shopping"></i></li>
                    </ul>
                </li>
            </nav>
        </div>
    </header>

</template>

<style>
header {
    background-color: #ff6900;
    height: 100px;
    z-index: 1;
}

.container {
    height: 100%;
    width: 80%;
    margin: auto;

}

nav {
    display: flex;
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

    & ul {
        display: flex;
       
        & li {
            color: white;
            margin: 10px;
        }
    }
}
</style>