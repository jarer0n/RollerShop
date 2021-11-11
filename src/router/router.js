import { createRouter, createWebHistory } from "vue-router"

import MyMain from '../components/MyMain/my-main'
import MyCatalog from '../components/MyCatalog/my-catalog'
import MyCart from '../components/MyCart/my-cart'
import MyFavorite from '../components/MyFavorite/my-favorite'
import MyArticleItem from '../components/MyCatalog/my-catalog-article-item'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MyMain
    },
    {
        path: '/catalog',
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
        path: '/favorite',
        name: 'favorite',
        component: MyFavorite,
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