import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTest from '@/components/MyTest'
// import BlogDisp from '@/components/BlogDisp'
import BlogMain from '@/components/BlogMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MyTest',
      name: 'MyTest',
      component: MyTest
    },
    {
      path: '/BlogMain',
      name: 'BlogMain',
      component: BlogMain
    }
    /*
    {
      path: '/BlogDisp',
      name: 'BlogDisp',
      component: BlogDisp
    }
    */
  ]
})
