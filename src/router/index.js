import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import BlogsView from '/src/views/BlogsView.vue'
import NewPost from '/src/views/NewPost.vue'
import LoginPage from '/src/views/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: BlogsView,
    },
    {
        path: '/post/create',
        name: 'newpost',
        component: NewPost,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router