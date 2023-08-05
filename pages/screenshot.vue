<template>
  <div>
    <button type="button" @click="handleScreenshot()">點我截圖！</button>
    <div v-if="loadingScreenshotImg">載入螢幕截圖中...</div>
    <img v-if="screenshot" class="screenshot" :src="screenshot" alt="螢幕截圖" />
  </div>
</template>
<script setup lang="ts">
const { loadingScreenshotImg, screenshot, handleScreenshot } = useHtml2canvas()
</script>

<style scoped>
img {
  width: 90%;
  height: auto;
  margin: 4rem auto;
  border: 1px solid #bbb;
}
</style>
