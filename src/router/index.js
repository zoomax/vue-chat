import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome.component'
import Chat from '@/components/Chat.component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.chatter) {
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
