<template>
  <div id="app">
    <nav>
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="first"><span>First</span></router-link>
    <router-link to="second"><span>Second</span></router-link>
    <router-link to="third"><span>Third</span></router-link>
    <router-link to="fourth"><span>Fourth</span></router-link>
    <router-link to="fifth"><span>Fifth</span></router-link>
    <router-link to="animation-test"><span>Animation test</span></router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

 
}
span{
  margin: 5px 5px;
}
nav{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 30px;
  background: #f5f7fa;
}
body{
  background: #f5f7fa
}
</style>
