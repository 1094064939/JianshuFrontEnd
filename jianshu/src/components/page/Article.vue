<template>
    <div class="main">
      <div class="contain">
        <h2>{{mes.title}}</h2>
        <img :src="mes.avatar" class="ava">
        <div class="personalmessage">
            <a>{{mes.author}}</a>
            <b-button class="guanzhu" size="sm" variant="success"><span>+关注</span></b-button><br>
            <a class="bottom">{{mes.time}} 字数{{mes.points}} 阅读{{mes.read}} 评论{{mes.comments}} 喜欢{{mes.likes}}</a>
        </div><br>
        <p>{{mes.main}}</p>
        <img :src="mes.pic1">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
      data(){
          return {
            mes:
              {
                "id":1,
                "title":"女博士被程序员嘲笑：代码能力太差，这样也能进来。网友理性回应：各司其职",
                "main":"在某程序员聚集的论坛社区，一名程序员的吐槽引起了不少网友的热议，其称这名搞算法的女博士问了一些很弱智的代码问题，直接暴露代码能力低下，并且还用了很夸张的语气表示：吓得我惊掉了下巴。言下之意，这名程序员认为这名女博士太水，不知道是怎么招进来的，还是来自于中部某省985高校的女博士，实在是难以置信。",
                "author":"IT智云编程",
                "comments":20,
                "likes":10,
                "time":"2018.10.5 19:08",
                "read":55555,
                "points":948,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/13133049/e3726c14-dcb1-46d9-a153-1f82aadd88dd.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
                "pic1":"https://upload-images.jianshu.io/upload_images/13133049-9b2823632cd3c8b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp",
                "href":"//upload-images.jianshu.io/upload_images/13133049-9b2823632cd3c8b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120"
              }
          }
      }
    }
</script>

<style scoped>
  .main{
    text-align: center;
  }
  .contain{
    margin: 0 auto;
    width: 600px;
    text-align: left;
  }
  h2{
    margin-top: 50px;
    font-family:  Kai,Kaiti SC,KaiTi,BiauKai,\\6977\4F53,\\6977\4F53_GB2312,Songti SC,serif;
    font-weight: 700;
  }
  .ava{
    border-radius: 50px;
    width: 50px;
    height: 50px;
    float: left;
    margin-top: 40px;
  }
  .personalmessage {
    margin-top: 50px;
    margin-left: 70px;
  }
  .guanzhu {
    height: 20px;
    border-radius: 10px;
  }
  span{
    margin: 0 auto;
  }
  .bottom {
  }
</style>
