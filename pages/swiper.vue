<template>
  <main class="page">
    <akContainer />
    <h2>{{ pageTitle }}</h2>
    <nuxt-link
      to="https://swiperjs.com/"
      title="另開視窗前往swiper套件網站"
      target="_blank"
      rel="noreferrer noopener"
    >
      Swiper 官網
    </nuxt-link>
    <br />
    <nuxt-link
      to="https://nuxt.com/modules/swiper"
      title="另開視窗前往Nuxt3 Swiper Module"
      target="_blank"
      rel="noreferrer noopener"
    >
      Nuxt3 Swiper Module
    </nuxt-link>
    <Swiper
      style="height: 300px"
      :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard, SwiperA11y, SwiperFreeMode]"
      :loop="true"
      :navigation="true"
      :pagination="{
        clickable: true
      }"
      :keyboard="{
        enabled: true
      }"
      :a11y="{
        enabled: true,
        prevSlideMessage: '上一頁',
        nextSlideMessage: '下一頁'
      }"
      :freemode="true"
      :observer="true"
      :grab-cursor="true"
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{
        768: {
          slidesPerView: 2
        },
        1280: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide v-for="(item, idx) in 10" :key="idx">
        {{ idx }}
      </SwiperSlide>
    </Swiper>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('Swiprer')
const pageDescription = ref('提供' + runtimeConfig.public.websiteName + 'Swiper')
const route = useRoute()

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    },
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl + route.path },
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pageDescription.value
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: runtimeConfig.public.baseUrl + route.path
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: pageDescription.value
    }
  ]
})
</script>
