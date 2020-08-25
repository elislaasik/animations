<template>
  <div>
            <css-doodle v-on:click='clickChange'>
            :doodle {
                @grid: 9 / 30.8vmin; 
                @shape: circle;
                margin: auto auto;
            }

            will-change: transform;
            transition: .4s @rand(300ms);
            transform: rotate(@rand(360deg));
            @shape: hypocycloid 3;

            --n: calc(
                @abs(@abs(@row() - 4)
                + @abs(@col() - 5) - 9) / 9 
            );

            background: hsla(
                calc(var(--n) * 360 + 120),
                80%, 88%, var(--n)
            );

            </css-doodle>
            <br><br>
                <css-doodle v-on:click='clickChange'>
            :doodle {
                @grid: 4 / 10.8vmin; 
                @shape: circle;
                margin: auto auto;
            }

            will-change: transform;
            transition: .4s @rand(300ms);
            transform: rotate(@rand(360deg));
            @shape: triangle;

            --n: calc(
                @abs(@abs(@row() - 2)
                + @abs(@col() - 5) - 9) / 9 
            );

            background: hsla(
                calc(var(--n) * 360 + 120),
                80%, 68%, var(--n)
            );

            </css-doodle>
  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'Template',
  methods:{
      clickChange( e){
          
            e.target.update();  
  
      }
  }
}
</script>

<style scoped>
div{
    margin: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0c27; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
