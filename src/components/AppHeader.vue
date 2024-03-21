<script>
export default {
    name: "AppHeader",
    data() {
        return {
            strings: [
                {
                    nome: "Uomo"
                },
                {
                    nome: "Donna"
                },
                {
                    nome: "Bambino"
                }
            ],

            icons: [
                {
                    icon: "fa-solid fa-user"
                },
                {
                    icon: "fa-solid fa-heart"
                },
                {
                    icon: "fa-solid fa-bag-shopping"
                }
            ]
        }
    },

}
</script>

<template>
    <header>
        <div class="container">
            <nav>
                <li>
                    <a href="" v-for="string in strings">{{ string.nome }}</a>
                </li>
                <li><img src="/assets/img/boolean-logo.png" alt=""></li>
                <li>
                    <ul>
                        <li v-for="icon in icons">
                            <i :class="icon.icon"></i>
                        </li>
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