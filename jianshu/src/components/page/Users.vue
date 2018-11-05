<template>
  <div class="container">
    <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" class="hhh">
    <div class="main">
        <div class="row">
          <div class="col-md-4" v-for="listss in Lists">
            <router-link :to="/u/ + listss.id">
              <div class="box">
                <img :src="listss.avatar" class="ava">
                <h4>{{listss.nickname}}</h4>
                <p class="jianjie">{{listss.description}}</p>
                <b-button class="btn1" variant="success">+ 关注</b-button>
                <div class="line"><span>最近更新</span></div>
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
        Lists: []
      }
    },
    created() {
      var that = this
      this.$http
        .get('http://localhost:8080/user/hot')
        .then(function (response) {
          // alert(JSON.stringify(response.data.data));
          that.Lists = response.data.data;
        })
    },
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
    height: auto;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:link {
    background: black;
  }
  .ava {
    margin-top: -30px;
    border-radius: 40px;
    width: 80px;
    height: 80px;
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
    margin-top: 30px;
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
  .jianjie {
    height: 40px;
  }
</style>
