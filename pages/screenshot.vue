<template>
  <div>
    還沒支援 oklch，若需要此功能，請使用 CSS3 color function 寫法。
    <button type="button" @click="handleScreenshot()">點我截圖！</button>
    <div v-if="loadingScreenshotImg">載入螢幕截圖中...</div>
    <img v-if="screenshot" class="screenshot" :src="screenshot" alt="螢幕截圖" />
  </div>
</template>
<script setup lang="ts">
const { loadingScreenshotImg, screenshot, handleScreenshot } = useHtml2canvas()
</script>
