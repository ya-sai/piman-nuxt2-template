<template>
  <main class="page page--index">
    <nuxt-link
      id="ak-container"
      to="#ak-container"
      title="中央內容區塊"
      accesskey="C"
      name="ak-container"
    >
      :::
    </nuxt-link>
    <h2>{{ pageTitle }}</h2>
    <theEmptyContent>Empty</theEmptyContent>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('Home Page')

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    }
  ]
})
</script>
