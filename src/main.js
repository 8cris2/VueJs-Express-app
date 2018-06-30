import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel';

import home_page from './components/home_page.vue'
import about_page from './components/about_page.vue'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueCarousel);

const routes = [{
	name: 'home',
	path: '/',
	component: home_page
}, {
	name: 'about',
	path: '/about',
	component: about_page
}];

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
