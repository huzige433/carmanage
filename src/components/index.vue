<template>
    <div id="index">
        <h1>{{msg}}</h1>
        <UserVue ></UserVue>
    </div>
</template>

<script>
import UserVue from './UserVue.vue'

export default {
  name: 'index',
  components:{
    UserVue,
  },
  props: {
    msg:String
  },
}
</script>

<style>
#index{
  position: relative;
  margin: 0 auto;
}
</style>