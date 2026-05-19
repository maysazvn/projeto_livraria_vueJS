import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/layout/HomeView.vue'
import ProductList from '@/components/products/ProductList.vue'
import CartPanel from '@/components/cart/CartPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produtos',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: CartPanel,
    },
  ],
})

export default router
