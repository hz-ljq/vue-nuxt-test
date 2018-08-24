<template>
<div>
  <h2>News Index page</h2>
  <p>NewsID:{{$route.params.newsId}}</p>
  <ul>
    <li>
      <nuxt-link :to="{name:'index'}">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="{name:'news-id',params:{id:123, title:'jspang.com'}}">News-123</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="{name:'news-id',params:{id:456}}">News-456</nuxt-link>
    </li>
  </ul>
</div>
</template>
