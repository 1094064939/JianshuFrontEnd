<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="listss in Lists">
        <router-link :to="/c/ + listss.id">
          <div class="box">
              <img :src="listss.avatar">
              <h4>{{listss.title}}</h4>
              <p>{{listss.info}}</p>
              <b-button class="btn1" variant="success">+ 关注</b-button>
              <p class="bottom1">{{listss.articles}}篇文章*{{listss.likes}}K人关注</p>
          </div>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "Tuijian",
        data(){
          return{
            Lists: [
              {
              "id":1,
              "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"简书电影",
              "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
              "articles":2287,
              "likes":4432
            },
              {
                "id":2,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "title":"简书电影",
                "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
                "articles":2287,
                "likes":4432
              },
              {
                "id":3,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "title":"简书电影",
                "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
                "articles":2287,
                "likes":4432
              },
              {
                "id":4,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "title":"简书电影",
                "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
                "articles":2287,
                "likes":4432
              },
              {
                "id":5,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "title":"简书电影",
                "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
                "articles":2287,
                "likes":4432
              },
              {
                "id":6,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "title":"简书电影",
                "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
                "articles":2287,
                "likes":4432
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .col-md-4 {
    text-align: center;
    margin-top: 50px;
  }
  .box {
    background: #f7f7f7;
    border-radius: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:link {
    background: black;
  }
  img {
    margin-top: -30px;
    border-radius: 10px;
  }
  .row {
    margin-top: 50px;
  }
  p,h4 {
    margin-top: 20px;
   }
  .btn1 {
    width: 100px;
    border-radius: 30px;
  }
  .bottom1 {
    height: 50px;
  }
</style>
