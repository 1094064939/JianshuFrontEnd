<template>
    <b-row>
      <b-col cols="3">
        <v-jianyouquan></v-jianyouquan>
      </b-col>
      <b-col cols="8">
        <router-view></router-view>
      </b-col>
    </b-row>
</template>

<script>
  import vJianyouquan from '../common/Jianyouquan'
  import vTimeline from '../common/Timeline'
    export default {
        name: "Subscriptions",
      components:{
          vJianyouquan,
          vTimeline
      }
    }
</script>

<style scoped>

</style>
