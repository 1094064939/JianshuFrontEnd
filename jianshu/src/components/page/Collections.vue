<template>
    <div class="container">
      <img src="https://cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png">
      <div class="main">
        <b-tabs>
          <b-tab title="推荐" active>
            <router-link to="/collections/tuijian"></router-link>
          </b-tab>
          <b-tab title="热门">
          </b-tab>
          <b-tab title="城市">
          </b-tab>
          <b-tab title="校园">
          </b-tab>
        </b-tabs>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Collections",
    }
</script>

<style scoped>
  img {
    width: 100%;
    margin-top: 50px;
  }
  .main {
    margin-top: 50px;
  }
</style>
