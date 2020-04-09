import Vue from 'vue';
import VueRouter from 'vue-router';
// @ is an alias to /src
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Article from '@/views/Article.vue';
import Admin from '@/views/Admin.vue';
import AdminHome from '@/views/Admin/AdminHome.vue';
import AdminAdd from '@/views/Admin/AdminAdd.vue';
import NotFound404 from '@/views/NotFound404.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/article/:id', name: 'Article', component: Article },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      { path: '', name: 'AdminHome', component: AdminHome },
      { path: 'add', name: 'AdminAdd', component: AdminAdd },
      { path: 'edit/:id', name: 'AdminEdit', component: AdminAdd },
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
  { path: '*', name: 'NotFound404', component: NotFound404 },
];

const router = new VueRouter({
  routes,
});

export default router;
