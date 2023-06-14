<template>
  <div class="layout">
    <noscript class="noscript">
      您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態。
      Your browser does not support JavaScript!
    </noscript>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} - ${runtimeConfig.public.websiteName}`
      : `${runtimeConfig.public.websiteName}`
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: runtimeConfig.public.websiteDescription },
    { hid: 'keywords', name: 'keywords', content: 'keywords' },
    { name: 'author', content: 'author' },
    { name: 'copyright', content: 'copyright' },
    { name: 'format-detection', content: 'telephone=no' },

    // social media
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl },
    { hid: 'og:title', property: 'og:title', content: runtimeConfig.public.websiteName },
    {
      hid: 'og:description',
      property: 'og:description',
      content: runtimeConfig.public.websiteDescription
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: runtimeConfig.public.baseUrl + '/images/social-media.png'
    },

    // twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:url', name: 'twitter:url', content: runtimeConfig.public.baseUrl },
    { hid: 'twitter:title', name: 'twitter:title', content: runtimeConfig.public.websiteName },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: runtimeConfig.public.websiteDescription
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: runtimeConfig.public.baseUrl + '/images/social-media.png'
    }

    // 在手機上，加入主畫面的名稱
    // { name: 'mobile-web-app-capable', content: 'yes' },
    // { name: 'apple-touch-fullscreen', content: 'yes' },
    // { name: 'apple-mobile-web-app-title', content: runtimeConfig.public.websiteName},
    // { name: 'apple-mobile-web-app-capable', content: 'yes' },
    // { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  ],
  link: [
    // favicon
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    // { rel: 'apple-touch-icon-precomposed', sizes: '32x32', href: '/images/favicon/favicon-32.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '128x128', href: '/images/favicon/favicon-128.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/images/favicon/favicon-152.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '167x167', href: '/images/favicon/favicon-167.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: '/images/favicon/favicon-180.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '192x192', href: '/images/favicon/favicon-192.png' },
    // { rel: 'apple-touch-icon-precomposed', sizes: '196x196', href: '/images/favicon/favicon-196.png' },

    // splash
    // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-640x1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
    // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-750x1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
    // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },
    // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-1242x2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },

    // font
    // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    // {
    //   rel: 'stylesheet',
    //   href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap'
    // }
  ],
  // script: [
  // ],
  bodyAttrs: {
    class: 'wrapper'
  },
  htmlAttrs: {
    lang: 'zh-Hant-TW'
  }
})
</script>

<style>
@import url('@/assets/css/style.css');
</style>
