import Vue from 'vue'
import Router from 'vue-router'
import ListOfListsPage from '@/components/ListOfListsPage'
import ListPoemPage from '@/components/ListPoemPage'
import PoemPage from '@/components/PoemPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListOfListsPage',
      component: ListOfListsPage
    },
    {
      path: '/ListPoemPage',
      name: 'ListPoemPage',
      component: ListPoemPage
    },
    {
      path: '/PoemPage',
      name: 'PoemPage',
      component: PoemPage
    }
  ]
})
