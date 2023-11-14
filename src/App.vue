<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from "./components/NavBar-Comp.vue";
import FooterComp from "./components/Footer-Comp.vue";
 
export default {
  components: {NavBarComp, FooterComp}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap');
  
::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



</style>
