import Layout from '../../layout'

export default {
  path: '/users',
  component: Layout,
  name: 'users',
  meta: {
    title: '用户',
    icon: 'article'
  },
  children: [
    {
      path: '/users',
      component: () => import('../../views/usersList'),
      meta: {
        title: '用户',
        icon: 'article-create'
      }
    }
  ]
}
