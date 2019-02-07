import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home.vue'
import add from '@/views/add.vue'
import showAll from '@/views/showAll.vue'
import showAll2 from '@/views/showAll2.vue'
import showAll3 from '@/views/showAll3.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/home',
    	name:'home',
    	component:home,
      children:[
        {
          path:'add',
          name:'add',
          component:add
        },
        {
          path:'showAll',
          name:'showAll',
          component:showAll
        },
        {
          path:'showAll2',
          name:'showAll2',
          component:showAll2
        },
        {
          path:'showAll3',
          name:'showAll3',
          component:showAll3
        }
      ]
    }
  ]
})
