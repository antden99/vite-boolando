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

<style >

</style>