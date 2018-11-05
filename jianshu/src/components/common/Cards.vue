<template>
    <div class="cardgroup">
      <b-card v-for="cardss in cardList" :key="cardss.articleId">
        <div style="display:inline;float: left">
          <router-link :to="'/p/'+ cardss.articleId"><h4>{{cardss.title}}</h4></router-link>
          <p class="card-text">
            {{cardss.summary}}
          </p><br/>
          <a class="author">{{cardss.nickname}}</a>
          <a class="comments"><img src="../../../static/img/commentspic.png"/>{{cardss.commentsCount}}</a>
          <a class="likes"><img src="../../../static/img/likespic.png"/>{{cardss.likeCount}}</a>
        </div>
        <img v-bind:src="cardss.thumbnail" style="float: right;margin-top: -40px;display: inline;width: 150px;height: 150px">
      </b-card>
    </div>
</template>

<script>
    export default {
        name: "Cards",
      data() {
          return {
            cardList: []
          }
      },
      created() {
        var that = this
        this.$http
          .get('http://localhost:8080/article/all')
          .then(function (response) {
            // alert(JSON.stringify(response.data.data));
            that.cardList = response.data.data;
          })
      },
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
