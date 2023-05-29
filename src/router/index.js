import {createRouter, createWebHistory} from 'vue-router'

//Layouts
import AuthenticatedLayout from '@/layouts/Authenticated.vue'; 
import GuestLayout from '@/layouts/Guest.vue'

import useAuth from "@/composables/auth";

const routes = [
  {
    path: '/login',
    component: GuestLayout,
    meta: { requiresAuth: false },
    children: [ { path: '', name: 'login', component: ()=>import('@/views/Auth/Login.vue') } ]
  },
  {
    path: '/register',
    component: GuestLayout,
    meta: { requiresAuth: false },
    children: [ { path: '', name: 'register', component: ()=>import('@/views/Auth/Register.vue') } ]
  },
  {
    path: '/',
    component: AuthenticatedLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard', component: ()=>import('@/views/Dashboard.vue') },
      { path: 'users', name: 'users', component: ()=>import('@/views/users/Index.vue') },
      { path: 'roles', name: 'roles', component: ()=>import('@/views/roles/Index.vue') },
      { path: 'permissions', name: 'permissions', component: ()=>import('@/views/permissions/Index.vue') },
      { path: 'categories', name: 'categories', component: ()=>import('@/views/categories/Index.vue') },
      { path: 'posts', name: 'posts', component: ()=>import('@/views/posts/Index.vue') },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  const { user, getUser } = useAuth();
  await getUser();
  if (to.meta.requiresAuth && !user.id) {
    return { path: '/login', query: { redirect: to.name }, }
  }
  else if(!to.meta.requiresAuth && user.id){
    return { path: '/'}
  }
})

export default router