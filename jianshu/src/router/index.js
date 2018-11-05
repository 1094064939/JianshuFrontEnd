import Vue from 'vue'
import Router from 'vue-router'
import Comments from '../components/page/Comments'
import Jianxin from '../components/page/Jianxin'
import Timeline from '../components/common/Timeline'
import Guanzhu from '../components/common/Guanzhu'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '发现'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'},
          children: [
            {
              path: '/subscriptions/timeline',
              component:Timeline,
              meta:{title:'简友圈'}
            },
            {
              path: '/subscriptions/guanzhu',
              component:Guanzhu,
              meta:{title:'关注'}
            }
          ]
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          children: [
            {
              path: '/notifications/comments',
              component: Comments,
              meta: {title: '收到的评论'}
            },
            {
              path: '/notifications/jianxin',
              component: Jianxin,
              meta: {title: '简信'}
            }
          ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'},
          children: [
            {
              path: '/collections/tuijian',
              component: resolve => require(['../components/common/Tuijian.vue'], resolve),
              meta: {title: '推荐'}
            }
          ]
        },
        {
          //单个专题
          path: '/c/:id',
          component: resolve => require(['../components/page/Collection.vue'], resolve),
          meta: {title: '专题详情'}
        },
        {
          // 个人中心组件
          path: '/u/:id',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        {
          path: '/p/:id',
          component: resolve => require(['../components/page/Article.vue'], resolve),
          meta: {title: '文章详情'}
        }
      ]
    },
    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      path: '/sign_in',
      component: resolve => require(['../components/common/Signin.vue'], resolve),
      meta: {title: '登录'}
    },
    {
      path: '/sign_up',
      component: resolve => require(['../components/common/Signup.vue'], resolve),
      meta: {title: '注册'}
    }
  ]
})
