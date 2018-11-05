<template>
    <div class="main">
      <div class="head">
        <p>推荐作者</p>
      </div>
      <div class="main" v-for="index in arr" :key="authorList[index].userId">
        <router-link :to="'/u/' + authorList[index].userId">
          <a><img v-bind:src=authorList[index].avatar></a>
        </router-link>
        <p class="name">{{authorList[index].nickname}}</p>
        <p class="info">写了{{authorList[index].wordsCount}}字，{{authorList[index].likeCount}}喜欢</p>
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
            authorList:[],
            arr:[0,1,2,3,4]
          }
      },
      created() {
        var that = this
        this.$http
          .get('http://localhost:8080/user/hot')
          .then(function (response) {
            // alert(JSON.stringify(response.data.data));
            that.authorList = response.data.data;
          })
      },
      methods:{
        replace(){
          var a = [];
          var j= 0;
          while(j<5){
            var b = Math.floor((Math.random()*this.authorList.length));
            if(a.indexOf(b)==-1){
              a.push(b);
              j++;
            }
          };
          this.arr = a;
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
