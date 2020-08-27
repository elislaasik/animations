<template>
<div class="container">
  <div class="wrapper">

    <div class="border"></div>
    <div class="main-element"></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'BorderSimmerDark'
}
</script>


<style scoped>
.container {
  width: 100%;
 
}

.wrapper {
  padding-top: 100px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 0% 10% 10% 0%;
}

.main-element {
  position: absolute;
  top: 2%;
  left: 2%;
  height: 96%;
  width: 96%;
  margin: auto;
  align-self: center;
  background: #000;
  z-index: 1;
  border-radius: 0% 10% 10% 0%;
}

.border {
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: -9;
  height: 200%;
  width: 200%;
  transform: rotate(-45deg);
  overflow: hidden;
  background: linear-gradient(to right, #fff 20%, #fff 40%, #C3F5FA 55%, #0077FF 58%, #fff 70%, #fff 100%);
  background-size: 200% auto;
  animation: shine 3s linear;
}

/*Begin shimmer code*/

@keyframes shine {
    to {
      background-position: 200% center;
    }
  }

</style>
