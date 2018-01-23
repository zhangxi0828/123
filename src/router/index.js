import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '../components/Goods/Goods'
import Ratings from '../components/Ratings/Ratings'
import Seller from '../components/Seller/Seller'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        { path: '/goods', name: 'Goods', component: Goods },
        { path: '/ratings', name: 'Ratings', component: Ratings },
        { path: '/seller', name: 'Seller', component: Seller }
    ],
    //选中后的类名
    linkActiveClass: 'active'
})