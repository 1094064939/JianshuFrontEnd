<template>

  <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/">
      <b-navbar-brand>
        <b-img width="85" height="50" src="http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"/>
      </b-navbar-brand>
    </router-link>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>

        <b-nav-item v-if="user != null">
          <router-link to="/">发现</router-link>
        </b-nav-item>


        <b-nav-item v-if="user != null">
          <router-link to="/subscriptions/timeline">关注</router-link>
        </b-nav-item>

        <b-nav-item v-if="user != null">
          <router-link to="/notifications/comments">消息</router-link>
        </b-nav-item>

        <b-nav-item v-if="user === null">
          <router-link to="/index">首页</router-link>
        </b-nav-item>

        <b-nav-item v-if="user === null">
          <router-link to="/download">下载app</router-link>
        </b-nav-item>

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Aa</b-nav-item>
        <b-nav-item v-if="user === null">
          <router-link to="/sign_in">登录</router-link>
        </b-nav-item>
        <b-nav-item v-if="user === null">
        <router-link to="/sign_up">注册</router-link>
      </b-nav-item>
        <b-nav-item-dropdown right v-if="user != null">
          <!-- Using button-content slot -->
          <b-dropdown-item>
            <router-link to="/u">
              个人中心
            </router-link>
          </b-dropdown-item>
          <template slot="button-content">
            <b-img rounded="circle" width="35" height="35" :src="user.avatar"/>

          </template>
          <b-dropdown-item href="#">设置</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">退出</b-dropdown-item>
        </b-nav-item-dropdown>
        <a class="btn write-btn" href="/write">
          写文章
        </a>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('loginUser'))
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  .box {
    border-bottom: 1px solid #eef1f6;
    height: 55px;
  }

  a {
    color: #324157;
  }

  .btn {

  }

  .write-btn {
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
</style>
