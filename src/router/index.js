import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    { name: 'AboutMe', path: '/AboutMe', component: _import('AboutMe'), },
    { name: 'WebNav', path: '/WebNav', component: _import('WebNav'), }, {
      path: '/Blog',
      component: _import('Blog'),
      children: [
        { path: '', redirect: { name: 'BlogList' } },
        { path: 'BlogList', name: 'BlogList', component: _import('BlogList') },
        { path: 'BlogDetail/:number', name: 'BlogDetail', component: _import('BlogDetail') }
      ]
    },
    { path: '*', redirect: '/Blog' }
  ]
})
