import Vue from 'vue'
import Router from 'vue-router'
import BusMain from '@/components/BusMain'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: BusMain}
    // {path: '/', name: 'HelloWorld', component: HelloWorld}
  ]
})
