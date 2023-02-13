
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
      {
        path: '/checkout',
        component: () => import('pages/CheckoutPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/order',
        component: () => import('pages/OrderPage.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('src/admin/pages/DashboardPage.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: 'products',
        component: () => import('src/admin/pages/ProductsPage.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: 'category',
        component: () => import('src/admin/pages/CategoryPage.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: 'customers',
        component: () => import('src/admin/pages/CustomersPage.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: 'orders',
        component: () => import('src/admin/pages/OrdersPage.vue'),
        meta: { requiresAdmin: true }
      },

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
