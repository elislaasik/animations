<template>
  <div>
    <css-doodle v-on:click='clickChange'>
    :doodle { @grid: 1x35 / 100vw 100vh; } 
    :container { 
        background: #ffcabb; 
        background: linear-gradient(to top, #bcb2f5 50%, #0f4e9c 100%); 
        background-repeat: no-repeat; 
    } 
    
    position: relative; 
    align-self: end;
    height: @rand(10%, 75%);
    background: linear-gradient(to
    top, #725392 0%, #0d0079 100%);
    margin-left: @rand(0.1, 1)vw;
    z-index: 1;
    transform: scaleX(@rand(.8, 1.9));
    
    ::before { 
        content: ""; 
        position: absolute; 
        bottom: 0; 
        left: @rand(-20, 12)px; 
        right: @rand(-20, 12)px; 
        top: @rand(15, 55)%; 
        background: linear-gradient(to
        top, #3982ad 0%, #181b6b 100%); 
        z-index: 3; 
    } 
    
    ::after { 
        content: "";
        position: absolute;
        width: .1vw;
        height: .12vw;
        top: @rand(15, 20)%;
        left: @rand(10, 20)%;
        z-index: 5;
        box-shadow: 
            @rand(0.1, 2.1)vw @rand(0, 10)vh .5px rgba(246, 212, 0, .7),
            @rand(0.1, 2.1)vw @rand(10, 15)vh .5px rgba(246, 212, 0, .6), 
            @rand(0.1, 2.1)vw @rand(15, 22)vh .5px rgba(246, 212, 0, .7), 
            @rand(0.1, 2.1)vw @rand(22, 30)vh .5px rgba(246, 212, 0, .6), 
            @rand(0.1, 2.1)vw @rand(30, 40)vh .5px rgba(246, 212, 0, .8);
    }

</css-doodle>
  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'HelloWorld',
  methods: {
    clickChange(e){
      e.target.update();
    }
  }
}
</script>


<style scoped>

div {
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

div:after {
    content: "";
    position: absolute;
    top: 10vmin;
    right: 20vmin;
    background: #fff;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
    box-shadow: 0 0 20px 2px rgba(253, 220, 189, 0.9);
}
</style>
