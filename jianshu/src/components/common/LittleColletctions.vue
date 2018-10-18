<template>
    <div class="little">
      <a class="collection" v-for="lists in topicList" :key="lists.id">
        <router-link :to="'/c/' + lists.id">
          <img v-bind:src="lists.href" alt="64">
          <div class="name">{{lists.name}}</div>
        </router-link>
      </a>
      <a class="morecollection">
        <router-link to="/collections/tuijian">
          <span class="name"> 更多热门专题 >
          </span>
        </router-link>
      </a>
    </div>
</template>

<script>
    export default {
        name: "LittleCollections",
      data(){
          return {
            topicList:[
              {
                "id":1,
                "href":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"简书电影"
              },
              {
                "id":2,
                "href":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"手绘"
              },
              {
                "id":3,
                "href":"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"摄影"
              },
              {
                "id":4,
                "href":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"自然科普"
              },{
                "id":5,
                "href":"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"IT@互联网"
              },{
                "id":6,
                "href":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"读书"
              },
              {
                "id":7,
                "href":"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "name":"故事"
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .little {
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .collection {
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    cursor: pointer;
  }
  .morecollection {
    display: inline-block;
  }
  .collection img {
    width: 32px;
    height: 32px;
    vertical-align: center;
  }
  .name {
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  .name:hover {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    list-style-type: none;
    color: black;
  }
</style>
