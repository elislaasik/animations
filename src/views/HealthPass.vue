<template>
  <div class="container"> 
      <div class="child">
          <BorderSimmer/>
      </div>
      <div class="child">
        <BorderSimmerDark/>
      </div>
    <div class="child">
        <BorderTransitionDraw/>
      </div>
       <div class="child">
        <BorderSimmerPass/>
      </div>
    <div class="child">
        <LoadingWheel/>
        <LoadingWheel2/>

      </div>
    <div class="child logo">
                <LogoAnimation/>
      </div>
          <div class="child logo">
                <LogoAnimation2/>
      </div>
</div>
</template>

<script>
import BorderSimmer from '@/components/BorderSimmer.vue'
import BorderSimmerDark from '@/components/BorderSimmerDark.vue'
import BorderTransitionDraw from '@/components/BorderTransitionDraw.vue'
import BorderSimmerPass from '@/components/BorderSimmerPass.vue'
import LoadingWheel from '@/components/LoadingWheel.vue'
import LogoAnimation from '@/components/LogoAnimation.vue'
import LogoAnimation2 from '@/components/LogoAnimation2.vue'
import LoadingWheel2 from '@/components/LoadingWheel2.vue'

export default {
  name: 'HeathPass',
  components: {
      BorderSimmer,
      BorderSimmerDark,
      BorderTransitionDraw,
      BorderSimmerPass,
      LoadingWheel,
      LoadingWheel2,
    LogoAnimation,
    LogoAnimation2
  }
}
</script>

<style scoped>
.container{
    margin-top: 40px;
    flex-wrap: wrap;
    display: flex;
justify-content: center;
}
.child{
    width: 25%;
    
   
}
.logo{
    margin: 0 auto;
    
   
}

</style>
