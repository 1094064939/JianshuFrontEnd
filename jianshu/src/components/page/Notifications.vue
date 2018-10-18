<template>
    <div class="container">
      <ul class="col-md-4">
          <li>
            <router-link to="/notifications/comments">
            <div class="1">
              <img src="../../../static/img/评论.png">
              <a class="info">评论</a>
            </div>
            </router-link>
          </li>

        <router-link to="/notifications/jianxin">
          <li>
            <img src="../../../static/img/信息.png">
            <a>简信</a>
          </li>
        </router-link>
        <li>
          <img src="../../../static/img/上传-互动.png">
          <a>投稿请求</a>
        </li>
        <li>
          <img src="../../../static/img/喜欢.png">
          <a>喜欢和赞</a>
        </li>
        <li>
          <img src="../../../static/img/已关注.png">
          <a>关注</a>
        </li>
        <li>
          <img src="../../../static/img/钱.png">
          <a>赞赏和付费</a>
        </li>
        <li>
          <img src="../../../static/img/更多.png">
          <a>其它提醒</a>
        </li>
      </ul>
      <div class="col-md-8">
        <router-view>

        </router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Notifications"
    }
</script>

<style scoped>
  .col-md-4 {
    list-style-type: none;
    float: left;
  }
  li {
    cursor: pointer;
    width: 263.2px;
    height: 50.71px;
    border-radius: 5px;
  }
  li:hover {
    background: gainsboro;
  }
  .container {
    margin-top: 50px;
    display: inline-block;
  }
  a {
    /*margin-left: 10px;*/
    list-style-type: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:link {
    color: black;
  }
  img {
    margin-top: 10px;
  }
  .col-md-8 {
    float: right;
  }
</style>
