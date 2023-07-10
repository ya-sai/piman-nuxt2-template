<template>
  <main class="page">
    Nested Pages Demo
    <nuxt-link to="/nested-pages/demo" title="前往巢狀頁面內頁">巢狀頁面內頁</nuxt-link>
    <NuxtPage />
    <ul>
      <li v-for="(itemm, index) in 50" :key="index">
        <nuxt-link to="/">Item</nuxt-link>
      </li>
    </ul>
  </main>
</template>
