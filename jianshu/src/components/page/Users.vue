<template>
  <div class="container">
    <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" class="hhh">
    <div class="main">
        <div class="row">
          <div class="col-md-4" v-for="listss in Lists">
            <router-link :to="/c/ + listss.id">
              <div class="box">
                <img :src="listss.avatar">
                <h4>{{listss.title}}</h4>
                <p>{{listss.info}}</p>
                <b-button class="btn1" variant="success">+ 关注</b-button>
                <div class="line"><span>最近更新</span></div>
                <span>{{listss.update1}}</span><br>
                <span>{{listss.update2}}</span><br>
                <span>{{listss.update3}}</span>
              </div>
            </router-link>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Users",
    data(){
      return{
        Lists: [
          {
            "id":1,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
          },
          {
            "id":2,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
          },
          {
            "id":3,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
          },
          {
            "id":4,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
          },
          {
            "id":5,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
          },
          {
            "id":6,
            "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"简书电影",
            "info":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密...",
            "articles":2287,
            "likes":4432,
            "update1":"唐朝那些猫事儿1",
            "update2":"唐朝那些猫事儿2",
            "update3":"唐朝那些猫事儿3",
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
  .hhh {
    width: 100%;
    margin-top: 50px;
  }
  .main {
    margin-top: 50px;
  }
  .line{
    height: 30px;
    border-top: 1px solid #ddd;
    text-align: left;
    margin-top: 30px;
  }
  .line span{
    position: relative;
    top: -8px;
    background: #f7f7f7;
    padding: 0 20px;
  }
</style>
