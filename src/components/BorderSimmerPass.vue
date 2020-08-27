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
  name: 'BorderSimmerpass'
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
  background: #fcdf88;
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
  background: linear-gradient(to right, #fcdf88 20%, #fcdf88 40%, #fff 55%, #07f 58%,  #fcdf88 70%,  #fcdf88 100%);
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
