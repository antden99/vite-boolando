<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="container">
            <nav>
                <li>Antonio</li>
                <li>Logo</li>
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
.container{
    height: 100%;
    width: 80%;
    margin: auto;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
</style>