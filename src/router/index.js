import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import BlogsView from '/src/views/BlogsView.vue'
import { useBlogStore } from "../store/blogStore.js";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import PostView from "../views/PostView.vue";
import EditPost from "../views/EditPost.vue"


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
        name: 'Blogs',
        component: BlogsView,
        meta: {
            title: 'Blogs'
        }
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: CreatePost,
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
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            title: 'Profile'
        }
    },
    {
        path: '/post-preview',
        name: 'BlogPreview',
        component: BlogPreview,
        meta: {
            title: 'Preview Blog Post'
        }
    },
    {
        path: '/posts/:id',
        name: 'PostView',
        component: PostView,
        props: true,
        meta: {
            title: 'View Blog Post'
        }
    },
    {
        path: '/posts/:id',
        name: 'EditPost',
        component: CreatePost,
        props: true,
        meta: {
            title: 'Edit Post'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useBlogStore()
    store.mobileNav = true
    store.overlayMode = false
    document.title = `${to.meta.title} | NelsonIsioma.me`;
    next();
});

export default router