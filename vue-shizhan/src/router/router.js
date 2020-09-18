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
    }),
    // beforeEnter: (to, from, next) => {
    //   if(from.name === 'About') alert('这是从About页来的')
    //   else alert('这不是从About页来的')
    //   next()
    // }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    props: {
      food: 'banana',
      color: 'red'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store.vue'),
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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
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
  {
    path: '*',
    component: () => import('@/views/Error-404.vue')
  }
]
