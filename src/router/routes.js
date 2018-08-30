import blogRoutes from './blog-routes'
// const _import = require('./_import_' + process.env.NODE_ENV)
/**
 * 路由表配置
 */
export default [{
    path: '/',
    name: 'Layout',
    component: ''
  },
  {
    name: 'AboutMe',
    path: '/AboutMe',
    // component: resolve => require.ensure([], () => resolve(require('@/views/AboutMe.vue')), 'AboutMe')
  },
  {
    name: 'WebNav',
    path: '/WebNav',
    // component: resolve => require.ensure([], () => resolve(require('@/views/WebNav.vue')), 'WebNav')
  },
  {
    path: '/Blog',
    // component: resolve => require.ensure([], () => resolve(require('@/views/Blog.vue')), 'Blog'),
    children: blogRoutes
  },
  // {
  // path: '*',
  // redirect: '/Blog'
  // }
]
