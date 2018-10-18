<template>
  <div class="main">
    <ul>
      <div class="guanzhu">全部关注
        <router-link to="/subscriptions/guanzhu">
          <a class="addguanzhu">
            添加关注
          </a>
        </router-link>
      </div>

      <router-link to="/subscriptions/timeline">
        <li class="beginhead">
              <img src="https://cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png">简友圈
        </li>
      </router-link>
      <li v-for="friends in friendList"><div class="l1"><img v-bind:src="friends.img">{{friends.title}}<a>{{friends.guanzhu}}</a></div></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "jianyouquan",
      data() {
          return {
            friendList:[
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },{
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              },
              {
                "img":"https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
                "title":"程序员",
                "guanzhu":88
              }
            ]
          }
      }
    }
</script>

<style scoped>
  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
  li {
    list-style-type: none;
    height: 60px;
    cursor: pointer;
    margin-top: 5px;
  }
  li:hover {
    background: gainsboro;
  }
  a {
    margin-left: 100px;
    text-decoration: none;
  }
  a:link {
    color: black;
  }
  .addguanzhu {
    margin-left: 5px;
    cursor: pointer;
  }
  .addguanzhu:link {
    color: black;
  }
  .beginhead {
    border-top-style: solid;
    border-top-color: gainsboro;
    margin-bottom: -20px;
  }
  .guanzhu {
    height: auto;
  }
  ul {
    height: 550px;
    width: 300px;
    overflow-y: scroll;
  }
  .main {
    margin-top: 50px;
  }

</style>
