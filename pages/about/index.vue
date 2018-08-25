<template>
<div>
  <h2>About Index page</h2>
  <ul>
    <li>
      <nuxt-link :to="{name:'index'}">Home</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  transition: 'test' // 指定页面切换的过渡动效
}
</script>
