import { createRouter, createWebHistory } from "vue-router"


import MyCatalog from '../components/MyCatalog/my-catalog'
import MyCart from '../components/MyCart/my-cart'

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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;