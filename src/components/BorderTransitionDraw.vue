<template>
    <div class="container"> 
        <section class="buttons">
            <button class="draw">O</button>
        </section>
    </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'BorderTransitionDraw'
}
</script>


<style scoped>
.container {
  width: 100%;
 
}


button {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px #f45e61;
  color: #f45e61;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
  border-radius: 10%;


}
  button::before,
  button::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }

.draw {
  transition: color 0.25s;

  
}
.draw::before,
.draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  .draw::before {
    top: 0;
    left: 0;
  }

  .draw::after {
    bottom: 0;
    right: 0;
  }

  .draw:hover {
    color: #60daaa;
  }

  .draw:hover::before,
  .draw:hover::after {
    width: 100%;
    height: 100%;
  }

  .draw:hover::before {
    border-top-color: #60daaa; 
    border-right-color: #60daaa;
    transition: width 0.25s ease-out,
        height 0.25s ease-out 0.25s; 
  }

  .draw:hover::after {
    border-bottom-color: #60daaa;
    border-left-color: #60daaa;
    transition: border-color 0s ease-out 0.5s,
      
        width 0.25s ease-out 0.5s,
      
        height 0.25s ease-out 0.75s; 
  }

body {

  color: #4b507a;
  font: 300 24px/1.5 Lato, sans-serif;
  margin: 1em auto;
  max-width: 36em;
  padding: 1em 1em 2em;
  text-align: center;
}

.buttons {
  isolation: isolate;
}

</style>
