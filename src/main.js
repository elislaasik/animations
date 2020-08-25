import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false

import AnimationTest from '@/views/AnimationTest'
import Template from '@/views/Template'
import First from '@/views/First'
import Second from '@/views/Second'
import Third from '@/views/Third'
import Fourth from '@/views/Fourth'
import Fifth from '@/views/Fifth'
import HelloWorld from '@/components/HelloWorld'

const routes = [
  { 
      path: '/animation-test',
      component: AnimationTest 
  },
  {
      path: '/template', 
      component: Template 
  }
  ,
  {
      path: '/first', 
      component: First 
  },
  {
      path: '/second', 
      component: Second 
  },
  {
      path: '/third', 
      component: Third 
  },
  {
      path: '/fourth', 
      component: Fourth 
  },
  {
      path: '/fifth', 
      component: Fifth 
  }
  ,{
      path: '/', 
      component: HelloWorld 
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el:'#app',
  router,
  render:h => h(App)
})
