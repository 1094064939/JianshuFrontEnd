<template>
    <div class="cardgroup">
      <b-card v-for="cardss in cardList" :key="cardss.id">
        <div style="display:inline;float: left">
          <router-link :to="'/p/'+ cardss.id"><h4>{{cardss.title}}</h4></router-link>
          <p class="card-text">
            {{cardss.main}}
          </p><br/>
          <a class="author">{{cardss.author}}</a>
          <a class="comments"><img src="../../../static/img/commentspic.png"/>{{cardss.comments}}</a>
          <a class="likes"><img src="../../../static/img/likespic.png"/>{{cardss.likes}}</a>
        </div>
        <img v-bind:src="cardss.href" style="float: right;margin-top: -30px;display: inline">
      </b-card>
    </div>
</template>

<script>
    export default {
        name: "Cards",
      data() {
          return {
            cardList: [
              {
                "id":1,
                "title":"女博士被程序员嘲笑：代码能力太差，这样也能进来。网友理性回应：各司其职",
                "main":"在某程序员聚集的论坛社区，一名程序员的吐槽引起了不少网友的热议，其称这名搞算法的女博士问了一些很弱智的代码问题，直接暴露代码能力低下，并且还用了...",
                "author":"IT智云编程",
                "comments":20,
                "likes":10,
                "href":"//upload-images.jianshu.io/upload_images/13133049-9b2823632cd3c8b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120"
              },
              {
                "id":2,
                "title":"Get了这个外挂级神器，一个小时的工作我竟然十分钟就做完了",
                "main":"经常使用PPT的朋友们有没有发现，其实PPT功能并不算强大，只能做一些简单的操作，每次做PPT都会因为素材资源和设计的问题浪费很多时间，不知不觉...",
                "author":"超逗的二哈少爷",
                "comments":0,
                "likes":100,
                "href":"//upload-images.jianshu.io/upload_images/11438883-1776ce8cf5ae3fd3?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120"
              },
              {
                "id":3,
                "title":"推荐几个冷门且好用的APP",
                "main":"好的APP就要拿出来大家一起分享嘿嘿~ 小睡眠 里面的白噪音真的是很多很良心哎！而且所占内存还很小，可以自主调节时间，时合平时专注和睡眠。 花瓣...",
                "author":"北港小妖",
                "comments":0,
                "likes":43,
                "href":"//upload-images.jianshu.io/upload_images/9720889-36542ef082541618.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120"
              },
              {
                "id":4,
                "title":"【分享】如何下载使用汤不热Tumblr",
                "main":"很多老司机应该都知道汤不热（Tumblr），但是应该还有很多小伙伴不知道。毕竟是国外的，而且在中国区App Store没有上架。至于为什么没有在...",
                "author":"黑人嘿嘿嘿",
                "comments":20,
                "likes":33,
                "href":"//upload-images.jianshu.io/upload_images/14212773-1f3f6a76e1db24c0.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120"
              },
              {
                "id":5,
                "title":"nginx看这一篇就够了！",
                "main":"1 什么是Nginx 2 为什么是Nginx因为很吊为什么这么吊 3 手摸手教你使用Nginx准备工作，可以不看源码编译安装，不关心源码安装可以...",
                "author":"washCutBlow",
                "comments":0,
                "likes":17
              },
              {
                "id":6,
                "title":"你在用 JWT 代替 Session?",
                "main":"现在，JSON Web Tokens (JWT) 是非常流行的。尤其是 Web 开发领域。 流行 安全 稳定 易用 支持 JSON 所有这些因素...",
                "author":"展白说",
                "comments":80,
                "likes":39
              }
            ]
          }
      }
    }
</script>

<style scoped>
.author {
  margin-right: 20px;
  color: darkgrey;
}
  .comments {
    color: darkgrey;
  }
  b-card {
    border-width: 1px 0;
  }
  a{
    text-decoration: none;
  }
  a:link{
    color: black;
  }
</style>
