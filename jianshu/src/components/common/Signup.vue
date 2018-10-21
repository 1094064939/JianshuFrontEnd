<template>
  <div class="main">
    <div class="logo">
      <router-link to="/index">
        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png">
      </router-link>
    </div>
    <div class="sign">
      <div class="row">
        <router-link to="/sign_in"><h4 class="sign_in active">登录</h4></router-link>
        <a><h4>·</h4></a>
        <router-link to="sign_up"><h4 class="sign_up">注册</h4></router-link>
      </div>
      <div class="wirte">
        <div>
          <br class="input-group">
          <input type="text" class="form-control" placeholder="你的昵称"><br>
          <input type="text" class="form-control" placeholder="手机号"><br>
          <input type="text" class="form-control" placeholder="设置密码">
          <div class="btn">
            <b-button variant="success" size="lg">注册</b-button><br>
          </div>
          <p class="message">"点击 “注册” 即表示您同意并愿意遵守简书"<br>
            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>" 和 "
            <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>" 。"</p>
          <div class="line_02"><span>社交账号直接注册</span></div>
          <ul class="row">
            <li><img src="../../../static/img/微信.png"></li>
            <li><img src="../../../static/img/qq.png"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Signup"
    }
</script>

<style scoped>
  .main {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
  }
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .sign {
    width: 400px;
    margin: 150px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
  }
  h4{
    padding: 10px;
    font-family: "宋体";
  }
  h4:hover {
    text-decoration: underline;
  }
  .sign_in {
    margin-left: 80px;
    cursor: pointer;
  }
  .sign_up {
    cursor: pointer;
  }
  input {
    background-color: gainsboro;
  }
  .btn {
    width:260px;
    border-radius: 50px;
    text-align: center;
  }

  .line_02{
    height: 1px;
    border-top: 1px solid gray;
    text-align: center;
    margin-top: 20px;
  }
  .line_02 span{
    position: relative;
    top: -8px;
    background: #fff;
    padding: 0 20px;
  }
  ul li{
    list-style-type: none;
    padding: 20px 40px;
    cursor: pointer;
  }
</style>
