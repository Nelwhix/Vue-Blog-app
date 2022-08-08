import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import BlogsView from '/src/views/BlogsView.vue'
import NewPost from '/src/views/NewPost.vue'
import ForgotPassword from "../views/ForgotPassword.vue";
import { useBlogStore } from "../store/blogStore.js";
import Register from "../views/Register.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: BlogsView,
        meta: {
            title: 'Blogs'
        }
    },
    {
        path: '/post/create',
        name: 'newpost',
        component: NewPost,
        meta: {
            title: 'Create New Post'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useBlogStore()
    store.mobileNav = true
    store.overlayMode = true
    document.title = `${to.meta.title} | NelsonIsioma.me`;
    next();
});

export default router