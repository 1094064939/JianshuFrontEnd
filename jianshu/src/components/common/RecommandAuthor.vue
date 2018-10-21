<template>
    <div class="main">
      <div class="head">
        <p>推荐作者</p>
      </div>
      <div class="main" v-for="authors in authorList">
          <a><img v-bind:src=authors.avatar></a>
        <p class="name">{{authors.name}}</p>
        <p class="info">{{authors.info}}</p>
        <p class="guanzhu">+关注</p>
      </div>
      <router-link to="/users"><div class="seeall"><span>查看全部 ></span></div></router-link>
    </div>
</template>

<script>
    export default {
        name: "RecommandAuthor",
      data(){
          return {
            authorList:[
              {
                "avatar":"//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "name":"只有一半影子的人",
                "info":"写了422.5k字 · 6.6k喜欢"
              },
              {
                "avatar":"//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "name":"简书版权",
                "info":" 写了491.2k字 · 42.7k喜欢"
              },
              {
                "avatar":"//upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "name":"格列柯南",
                "info":"写了596.7k字 · 14.7k喜欢"
              },
              {
                "avatar":"//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "name":"只有一半影子的人",
                "info":"写了422.5k字 · 6.6k喜欢"
              },
              {
                "avatar":"//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "name":"只有一半影子的人",
                "info":"写了422.5k字 · 6.6k喜欢"
              }
            ]
          }
      }
    }
</script>

<style scoped>
img {
  border-radius: 100px;
  width: 50px;
  height: 50px;
}
  .head {
    margin-top: 50px;
  }
  .info {
    margin-left: 55px;
    margin-top: -10px;
    font-size: x-small;
  }
  .name {
    margin-top: -45px;
    margin-left: 55px;
  }
  .guanzhu {
    margin-left: 300px;
    margin-top: -50px;
    color: green;
    cursor: pointer;
  }
  .main {
    margin: 30px 0;
  }
  .seeall{
    border-radius: 2px;
    background-color: #f7f7f7;
    border: solid;
    border-width: 0.5px;
    border-color: #f6f6f6;
    height: 30px;
    text-align: center;
    cursor: pointer;
  }
  a:hover{
    text-decoration: none;
  }
  a:link{
    color: black;

  }
</style>
