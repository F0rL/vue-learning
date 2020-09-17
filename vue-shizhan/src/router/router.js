import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    // 别名
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food 
    })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    props: {
      food: 'banana',
      color: 'red'
    }
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('@/views/Argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        name: 'Child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  {
    path: '/name_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    path: '/main',
    redirect: {
      name: 'Home'
    }
  }
  // {
  //   path: '/main',
  //   redirect: to => {
  //     console.log(to)
  //     return '/'
  //   }
  // },
  // {
  //   path: '/main',
  //   redirect: () => {
  //     return {
  //       name: 'Home'
  //     }
  //   }
  // }
]
