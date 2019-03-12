
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    name: 'create_old',
    path: '/create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/create.vue') }
    ]
  },
  {
    name: 'create',
    path: '/form',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Form.vue') }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/detail.vue') }
    ]
  },
  {
    name: 'center',
    path: '/center',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user.vue') }
    ]
  },
  {
    name: 'credits',
    path: '/credits',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/credits.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
