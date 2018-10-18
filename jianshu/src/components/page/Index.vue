<template>
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <v-collection></v-collection>
      <v-card></v-card>
    </b-col>
    <b-col>
      <v-good></v-good>
      <div class="card">
        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
        <a style="margin-top: -60px;margin-left: 100px">下载简书手机app ><p>随时随地发现和创作内容</p></a>
      </div>
      <v-recommand-author></v-recommand-author>
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vGood from '../common/GoodRecommand'
  import vCollection from '../common/LittleColletctions'
  import vCard from '../common/Cards'
  import vRecommandAuthor from '../common/RecommandAuthor'

  export default {
    name: "Index",
    components: {
      vCarousel,
      vGood,
      vCollection,
      vCard,
      vRecommandAuthor
    }
  }
</script>

<style scoped>
  img{
  width: 80px;
  height: 80px;
}
  .card {
    margin-top: -100px;
  }

</style>
