<template>
  <div class="main">
    <b-row>
      <b-col cols="8">
        <div class="head">
          <img :src="topic.topicUrl" class="ava">
          <div class="title">
            <h5>{{topic.topicName}}</h5>
            <p>收录了{{topic.articleCount}}篇文章-{{topic.fans}}人关注</p>
            <b-button variant="outline-success" class="col-md-2 btn1">投稿</b-button>
            <b-button variant="success" class="col-md-2">+ 关注</b-button>
          </div>
        </div>
        <ul class="menu">
          <li class="active">
            <h5>最新评论</h5>
          </li>
          <li>
            <h5>最新收录</h5>
          </li>
          <li class="active">
            <h5>热门</h5>
          </li>
        </ul>
        <div class="articles">
          <ul>
            <li v-for="lists in topic.articleList" class="mainlist">
              <div class="row">
                <div class="col-md-9">
                  <h5>{{lists.title}}</h5>
                  <p >
                    {{lists.summary}}
                  </p><br/>
                  <a class="author">{{lists.author}}</a>
                  <a><img src="../../../static/img/commentspic.png"/>{{lists.comments}}</a>
                  <a class="likes"><img src="../../../static/img/likespic.png"/>{{lists.likes}}</a>
                </div>
                <div class="col-md-2">
                  <img :src="lists.thumbnail" class="thumb">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col>
        <div class="gonggao">
          <p class="he">专题公告</p>
          <p class="mainer">{{topic.summary}}</p>
        </div>
        <div class="guanzhuderen">
          <p>关注的人(3)</p>
          <ul>
            <li v-for="lists2 in topic.fansList">
              <img :src="lists2.avatar">
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "简书电影",
          "topicUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。\n" +
            "\n" +
            "和简书一起探索电影世界，欢迎订阅官方公众号：简书电影（jianshuyingyin）\n" +
            "\n" +
            "本专题收录电影相关文章。要求文内不得带有公众号信息等推广内容。 \n" +
            "详细规定、推荐首页、联系主编事宜请阅读专题须知： https://www.jianshu.com/p/400ae26fd3d7",
          "articleCount": 89339,
          "fans": 1868766,
          "description":"描述",
          "creator":"简书电影",
          "articleList":[
            {
              "id":1,
              "title":"爱情是一出好戏|共读《诗经》1",
              "summary":"冲着“黄渤导演处女作”去看的《一出好戏》，却看到了《关雎》最生动的演绎，很多时候，爱情就是人生的一出好戏！    窈窕淑女·君子好逑 舒淇演的珊...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/11514954-e3ae912bd88244a0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "author":"杜影月",
              "comments":21,
              "likes":18
            },
            {
              "id":2,
              "title":"影：张艺谋一出手，美感确实无人能及，可以忽略故事和演技拖后腿",
              "summary":"《影》是一部优点特别突出的电影，突出到可以让人对不足之处选择性无视。这部电影全片保持了对黑白水墨风格的极度坚持，绝大多数时间让人沉浸在黑白之中，...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/7394588-5dff64d5b764403f?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "author":"土匪撸剧",
              "comments":4,
              "likes":23
            },
            {
              "id":3,
              "title":"爱情是一出好戏|共读《诗经》1",
              "summary":"冲着“黄渤导演处女作”去看的《一出好戏》，却看到了《关雎》最生动的演绎，很多时候，爱情就是人生的一出好戏！    窈窕淑女·君子好逑 舒淇演的珊...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/11514954-e3ae912bd88244a0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "author":"杜影月",
              "comments":21,
              "likes":18
            },
            {
              "id":4,
              "title":"影：张艺谋一出手，美感确实无人能及，可以忽略故事和演技拖后腿",
              "summary":"《影》是一部优点特别突出的电影，突出到可以让人对不足之处选择性无视。这部电影全片保持了对黑白水墨风格的极度坚持，绝大多数时间让人沉浸在黑白之中，...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/7394588-5dff64d5b764403f?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "author":"土匪撸剧",
              "comments":4,
              "likes":23
            }
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/1789560/15a1334d66d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
            },
            {
              "authorId":4,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/1211570/a02b7997-3ccb-4857-9e95-9fbd9deca9ee.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",

            },{
              "authorId":5,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/2954739/376acc56-1115-4f85-bb7f-d99a285325d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
            }
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>
  .ava{
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  .title {
    margin-left: 100px;
    margin-top: -70px;
  }
  .head {
    margin-top: 30px;
  }
  .col-md-2 {
    border-radius: 20px;
    margin-top: -100px;
  }
  .btn1 {
    margin-left: 400px;
  }
  li {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }
  ul {
    margin-left: -50px;

  }
  .thumb {
    width: 150px;
    height: 120px;
    margin-top: 100px;
  }
  .mainlist {
    border-top-style: solid;
    border-top-color: gainsboro;
  }
  .menu {
    margin-bottom: -10px;
  }
  .he {
    color: gray;
  }
  .mainer{
    font-family: "宋体";
    color: black;
  }
  .guanzhuderen {
    margin-top: 60px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-bottom-color: gainsboro;
    border-top-color: gainsboro;
  }
  .guanzhuderen ul li img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: -25px;
  }
</style>
