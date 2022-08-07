import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import BlogsView from '/src/views/BlogsView.vue'
import NewPost from '/src/views/NewPost.vue'
import ForgotPassword from "../views/ForgotPassword.vue";
import { mapWritableState } from "pinia";
import { useBlogStore } from "../store/blogStore.js";


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
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'Reset Password'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    /*...mapWritableState(useBlogStore, ['overlayMode', 'mobileNav'])
    this.mobileNav = true
    this.overlayMode = true*/
    document.title = `${to.meta.title} | NelsonIsioma.me`;
    next();
});

export default router