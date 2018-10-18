<template>
    <ul>
      <li v-for="lists in allList">
        <p class="like">{{lists.author}}   喜欢了这篇文章</p>
        <h5>{{lists.title}}</h5>
        <p class="card-text">
          {{lists.main}}
        </p><br/>
        <a class="author">{{lists.author}}</a>
        <a class="comments"><img src="../../../static/img/commentspic.png"/>{{lists.comments}}</a>
        <a class="likes"><img src="../../../static/img/likespic.png"/>{{lists.likes}}</a>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Timeline",
      data() {
          return {
            allList:[
              {
                "id":1,
                "title":"女博士被程序员嘲笑：代码能力太差，这样也能进来。网友理性回应：各司其职",
                "main":"在某程序员聚集的论坛社区，一名程序员的吐槽引起了不少网友的热议，其称这名搞算法的女博士问了一些很弱智的代码问题，直接暴露代码能力低下，并且还用了...",
                "author":"IT智云编程",
                "comments":20,
                "likes":10
              },{
                "id":1,
                "title":"女博士被程序员嘲笑：代码能力太差，这样也能进来。网友理性回应：各司其职",
                "main":"在某程序员聚集的论坛社区，一名程序员的吐槽引起了不少网友的热议，其称这名搞算法的女博士问了一些很弱智的代码问题，直接暴露代码能力低下，并且还用了...",
                "author":"IT智云编程",
                "comments":20,
                "likes":10
              },
              {
                "id":1,
                "title":"女博士被程序员嘲笑：代码能力太差，这样也能进来。网友理性回应：各司其职",
                "main":"在某程序员聚集的论坛社区，一名程序员的吐槽引起了不少网友的热议，其称这名搞算法的女博士问了一些很弱智的代码问题，直接暴露代码能力低下，并且还用了...",
                "author":"IT智云编程",
                "comments":20,
                "likes":10
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
  ul {
    margin-left: 50px;
    margin-top: 50px;
  }
  li {
    display:inline;
    float: left;
    border-bottom-style: solid;
    border-bottom-color: gainsboro;
  }
  .like {
    color: gray;
  }
</style>
