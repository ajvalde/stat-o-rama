<template>
 <div>
    <logo></logo> 
    <search-bar></search-bar>
    <buttons></buttons> 
 </div>
  
  
</template>

<script>
  import Logo from './LandingPageView/Logo'
  import SearchBar from './LandingPageView/SearchBar'
  import Buttons from './LandingPageView/Buttons'
  export default {
    components: {
      Logo,
      SearchBar,
      Buttons
    },
    name: 'landing-page'
  }
</script>

<style>
 body {
   background-image: url("./images/hixs_pattern_evolution.png");
 }
 


 


</style>