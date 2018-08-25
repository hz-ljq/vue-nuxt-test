<template>
<div>
  <h2 v-if="error.statusCode==404">404页面不存在</h2>
  <h2 v-else>500服务器错误</h2>
  <ul>
    <li>
      <nuxt-link to="/">HOME</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // 指定当前页面使用的布局（layouts 根目录下的布局文件）
  mounted() {
    console.log(this.error);
  }
}
</script>
