import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'
import home from '@/pages/index/home'
import userlist from '@/pages/index/userlist'
import shoplist from '@/pages/index/shoplist'
import foodslist from '@/pages/index/foodslist'
import orderlist from '@/pages/index/orderlist'
import adminlist from '@/pages/index/adminlist'
import addshop from '@/pages/index/addshop'
import addfoods from '@/pages/index/addfoods'
import editfoods from '@/pages/index/editfoods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
     
    },
    {
      path: '/index',
      name: 'index',
      component: index,
       children:[
      		{
      			path: '',
			      name: '/home',
			      component: home
      		},
      		{
      			path: '/userlist',
			      name: 'userlist',
			      component: userlist,
			      meta:["数据管理","用户列表"]
      		},
      		{
      			path: '/editfoods',
			      name: 'editfoods',
			      component: editfoods,
			      meta:["数据管理","修改商品"]
      		},
      		{
      			path: '/shoplist',
			      name: 'shoplist',
			      component: shoplist,
			      meta:["数据管理","商家列表"]
      		},
      		{
      			path: '/foodslist',
			      name: 'foodslist',
			      component: foodslist,
			      meta:["数据管理","食品列表"]
      		},
      		{
      			path: '/orderlist',
			      name: 'orderlist',
			      component: orderlist,
			      meta:["数据管理","订单列表"]
      		},
      		{
      			path: '/adminlist',
			      name: 'adminlist',
			      component: adminlist,
			      meta:["数据管理","管理员列表"]
      		},
      		{
      			path: '/addshop',
			      name: 'addshop',
			      component: addshop,
			     	meta:["添加数据","添加商铺"]
      		},
      		{
      			path: '/addfoods',
			      name: 'addfoods',
			      component: addfoods,
			      meta:["添加数据","添加商品"]
      		}
      ]
    }
  ]
})
