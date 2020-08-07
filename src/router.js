import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'login',
        component: resolve => require(['./components/login.vue'], resolve),
        meta: { keepAlive: true },
      },
      {
        path:"/navigation",
        name: 'navigation',
        component: resolve => require(['./components/navigation.vue'], resolve),
        meta: { keepAlive: true },
      },
      {
        path:"/map",
        name: 'map',
        component: resolve => require(['./components/map.vue'], resolve),
        meta: { keepAlive: true },
      },
      {
        path:"/mainPage",
        name: 'mainPage',
        component: resolve => require(['./components/mainPage.vue'], resolve),
        meta: { keepAlive: true },
        children: [
          {
              path: "archives",
              component: resolve => require(["./components/mainPage/archives"], resolve),
          },
          {
              path: "detailC",
              component: resolve => require(["./components/mainPage/detailC"], resolve),
          },
          {
              path: "alertP",
              component: resolve => require(["./components/mainPage/alertP"], resolve),
          },
          {
              path: "alertDetail",
              component: resolve => require(["./components/mainPage/alertDetail"], resolve),
          },
          {
              path: "ranking",
              component: resolve => require(["./components/mainPage/ranking"], resolve),
          },
          {
              path: "rankFive",
              component: resolve => require(["./components/mainPage/rankFive"], resolve),
          },
          {
              path: "smartSite",
              component: resolve => require(["./components/mainPage/smartSite"], resolve),
          },
          {
              path: "system",
              component: resolve => require(["./components/mainPage/system"], resolve),
          },
      ]
      }
    ]
  })