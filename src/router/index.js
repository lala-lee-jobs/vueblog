import Vue from 'vue';
import VueRouter from 'vue-router';
// @ is an alias to /src
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Article from '@/views/Article.vue';
import Admin from '@/views/Admin.vue';
import Add from '@/views/Admin/Add.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/article', name: 'Article', component: Article },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      { path: '/', name: 'Admin-Home', component: Admin },
      { path: '/add', name: 'Admin-Add', component: Add },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
