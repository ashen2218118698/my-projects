import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import course from '@/components/course'
import courseDetail from '@/components/courseDetail'
import cLesson from '@/components/cLesson'
import cOverview from '@/components/cOverview'
import cNote from '@/components/cNote'
import cComment from '@/components/cComment'
import information from '@/components/information'
import infoDetail from '@/components/infoDetail'
import forum from '@/components/forum'
import mobile from '@/components/mobile'
import login from '@/components/login'
import register from '@/components/register'
import howtoregister from '@/components/howtoregister'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/courseDetail/:id',
      name: 'courseDetail',
      component: courseDetail,
      redirect: '/courseDetail/:id/lesson/:id',
      children: [
        {
          path: 'lesson/:id',
          component: cLesson
        },
        {
          path: 'overview/:id',
          component: cOverview
        },
        {
          path: 'comment/:id',
          component: cComment
        },
        {
          path: 'note/:id',
          component: cNote
        }
      ]
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/infoDetail/:id',
      name: 'infoDetail',
      component: infoDetail
    },
    {
      path: '/forum',
      name: 'forum',
      component: forum
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: mobile
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/howtoregister',
      name: 'howtoregister',
      component: howtoregister
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
