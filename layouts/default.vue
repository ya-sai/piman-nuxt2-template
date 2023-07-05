<template>
  <Html>
    <Meta charse="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta hid="keywords" name="keywords" content="" />
    <Meta name="author" content="" />
    <Meta name="copyright" content="copyright" />
    <Meta name="format-detection" content="telephone=no" />
    <Meta hid="description" name="description" :content="runtimeConfig.public.websiteDescription" />
    <Meta hid="og:url" property="og:url" :content="runtimeConfig.public.baseUrl" />
    <Meta hid="og:title" property="og:title" content="runtimeConfig.public.websiteName" />
    <Meta
      hid="og:description"
      property="og:description"
      :content="runtimeConfig.public.websiteDescription"
    />
    <Meta
      hid="og:image"
      property="og:image"
      :content="runtimeConfig.public.baseUrl + '/images/social-media.png'"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta hid="twitter:url" name="twitter:url" :content="runtimeConfig.public.baseUrl" />
    <Meta hid="twitter:title" name="twitter:title" :content="runtimeConfig.public.websiteName" />
    <Meta
      hid="twitter:description"
      name="twitter:description"
      :content="runtimeConfig.public.websiteDescription"
    />
    <Meta
      hid="twitter:image"
      name="twitter:image"
      :content="runtimeConfig.public.baseUrl + '/images/social-media.png'"
    />
    <Meta name="mobile-web-app-capable" content="yes" />
    <Meta name="apple-touch-fullscreen" content="yes" />
    <Meta name="apple-mobile-web-app-title" :content="runtimeConfig.public.websiteName" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <Link rel="shortcut icon" type="image/x-icon" href="/portfolio/favicon.ico" />
    <!-- <Link rel="apple-touch-icon-precomposed" size="32x32" href="/portfolio/favicon-32.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="128x128" href="/portfolio/favicon-128.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="152x152" href="/portfolio/favicon-152.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="167x167" href="/portfolio/favicon-167.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="180x180" href="/portfolio/favicon-180.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="192x192" href="/portfolio/favicon-192.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" size="196x196" href="/portfolio/favicon-196.ico" /> -->

    <!-- <Link
      rel="apple-touch-startup-image"
      href="/portfolio/images/splash/splash-640x1136.png"
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    /> -->
    <!-- <Link
      rel="apple-touch-startup-image"
      href="/portfolio/images/splash/splash-750x1334.png"
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    /> -->
    <!-- <Link
      rel="apple-touch-startup-image"
      href="/portfolio/images/splash/splash-1125x2436.png"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    /> -->
    <!-- <Link
      rel="apple-touch-startup-image"
      href="/portfolio/images/splash/splash-1242x2208.png"
      media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    /> -->

    <!-- <Link rel="preconnect" href="https://fonts.googleapis.com" /> -->
    <!-- <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" /> -->
    <!-- <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swapm" /> -->

    <Body class="wrapper">
      <div class="layout">
        <noscript class="noscript">
          您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態。
          Your browser does not support JavaScript!
        </noscript>
        <TheHeader />
        <slot />
        <TheFooter />
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} - ${runtimeConfig.public.websiteName}`
      : `${runtimeConfig.public.websiteName}`
  }
})
</script>

<style>
@import url('@/assets/css/style.css');
</style>
