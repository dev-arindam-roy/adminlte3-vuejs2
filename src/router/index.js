import Vue from 'vue'
import VueRouter from 'vue-router'

import SigninView from '../views/SigninView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin-view',
    component: SigninView
  },
  {
    path: '/dashboard',
    name: 'force-dashboard-view',
    redirect: to => {
      return { name: 'sales-dashboard-view', query: { page: 'dashboard', qtxt: to.params.searchText } }
    }
  },
  {
    path: '/home',
    name: 'force-home-view',
    redirect: to => {
      return { name: 'home-view', query: { page: 'home', qtxt: to.params.searchText } }
    }
  },
  {
    path: '/my-account',
    name: 'myaccount-view',
    component: () => import(/* webpackChunkName: "myaccount-view" */ '../views/dashboard/MyaccountView.vue'),
    redirect: { name: 'home-view' }, // https://router.vuejs.org/guide/essentials/redirect-and-alias.html
    children: [
      {
        path: 'home', // if child then not add '/' in path
        name: 'home-view',
        component: () => import(/* webpackChunkName: "home-view" */ '../views/dashboard/HomeView.vue')
      },
      {
        path: 'sales-dashboard', // if child then not add '/' in path
        name: 'sales-dashboard-view',
        component: () => import(/* webpackChunkName: "sales-dashboard-view" */ '../views/dashboard/SalesDashboardView.vue')
      },
      {
        path: 'tasks-dashboard', // if child then not add '/' in path
        name: 'tasks-dashboard-view',
        component: () => import(/* webpackChunkName: "tasks-dashboard-view" */ '../views/dashboard/TasksDashboardView.vue')
      },
      {
        path: 'users-dashboard', // if child then not add '/' in path
        name: 'users-dashboard-view',
        component: () => import(/* webpackChunkName: "users-dashboard-view" */ '../views/dashboard/UsersDashboardView.vue')
      },
      {
        path: 'system-users', // if child then not add '/' in path
        name: 'system-users-view',
        component: () => import(/* webpackChunkName: "system-users-view" */ '../views/dashboard/SystemUsersView.vue')
      },
      {
        path: 'cms-pages', // if child then not add '/' in path
        name: 'cms-pages-view',
        component: () => import(/* webpackChunkName: "cms-pages-view" */ '../views/dashboard/content-management/CmsPagesView.vue')
      },
      {
        path: 'cms-categories', // if child then not add '/' in path
        name: 'cms-categories-view',
        component: () => import(/* webpackChunkName: "cms-categories-view" */ '../views/dashboard/content-management/CmsCategoriesView.vue')
      },
      {
        path: 'contact', // if child then not add '/' in path
        name: 'contact-view',
        component: () => import(/* webpackChunkName: "contact-view" */ '../views/dashboard/ContactView.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to && from) {
    console.log('beforeEach')
  }
  next()
});

router.afterEach((to, from) => {
  if (to && from) {
    console.log('afterEach')
    
  }
})

export default router
