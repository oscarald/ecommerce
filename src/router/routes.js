
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/shop', component: () => import('pages/ShopPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/register', component: () => import('pages/RegisterPage.vue') },
      { path: '/forgot', component: () => import('pages/ForgotPage.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('src/admin/pages/DashboardPage.vue') },
      { path: 'products', component: () => import('src/admin/pages/ProductsPage.vue') },
      { path: 'category', component: () => import('src/admin/pages/CategoryPage.vue') },
      { path: 'customers', component: () => import('src/admin/pages/CustomersPage.vue') },
      { path: 'orders', component: () => import('src/admin/pages/OrdersPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
