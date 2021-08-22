import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/Header'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect: "/goods"
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Seller
    },
  ]
})
