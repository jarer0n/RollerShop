import { createRouter, createWebHistory } from "vue-router"


import MyCatalog from '../components/MyCatalog/my-catalog'
import MyCart from '../components/MyCart/my-cart'
import MyArticleItem from '../components/MyCatalog/my-catalog-article-item'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: MyCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: MyCart,
        props: true
    },
    {
        path: '/products/',
        name: 'products',
        component: MyArticleItem,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;