<template>
<div>
  <nuxt-link :to="{name:'index'}">Home</nuxt-link>
  <h1>姓名：{{info.name}}</h1>
  <h2>年龄：{{info.age}}</h2>
  <h2 @click='clickHandler'>兴趣：{{info.interest}}</h2>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: 'hello World'
    }
  },
  methods: {
    clickHandler() {
      console.log('clickHandler!!');
      this.info.interest = 123
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  // asyncData() {
  //   return axios.get('https://api.myjson.com/bins/8gdmr').then((res) => {
  //     console.log(res)
  //     return {
  //       info: res.data
  //     }
  //   })
  // }
  async asyncData(context) {
    console.log('asyncData', context);
    let { data } = await axios.get('https://api.myjson.com/bins/8wy6w');
    return { info: data };
  }
}
</script>
