<script >
  import AppFooter from './components/AppFooter.vue'
  import AppMain from './components/AppMain.vue'
  import AppHeader from './components/AppHeader.vue'


  export default{
    components:{
      AppFooter:AppFooter,
      AppMain:AppMain,
      AppHeader:AppHeader,
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style >
body{
  background-color: white;
  color: black;
}
</style>
