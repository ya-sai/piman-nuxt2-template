// https://html2canvas.hertzen.com/features
// Unsupported CSS properties
// These CSS properties are NOT currently supported
//    background-blend-mode
//    border-image
//    box-decoration-break
//    box-shadow
//    filter
//    font-variant-ligatures
//    mix-blend-mode
//    object-fit
//    repeating-linear-gradient()
//    writing-mode
//    zoom
//    oklch color function

// how to use in nuxt page
// img v-if="screenshot" :src="screenshot" => 顯示截圖
// v-if="loadingScreenshotImg" => 載入螢幕截圖中...
// handleScreenshot()
// 在 <script> 裡面加上 : const { loadingScreenshotImg, screenshot, handleScreenshot } = useHtml2canvas()

import html2canvas from 'html2canvas'
export default function () {
  const screenshot = ref('')
  const loadingScreenshotImg = ref(false)
  // screenshot
  async function handleScreenshot() {
    loadingScreenshotImg.value = true
    await html2canvas(document.querySelector('body'), {
      onclone(html) {
        // handle fontawesome svg
        const fontawesomeNodes = html.querySelectorAll('.svg-inline--fa')
        for (let i = 0; i < fontawesomeNodes.length; i++) {
          const fontawesomePath = fontawesomeNodes[i].querySelector('path')
          const fontawesomeStyle = window.getComputedStyle(fontawesomeNodes[i])
          const fontawesomePathStyle = window.getComputedStyle(fontawesomePath)
          fontawesomePath.style.fill = fontawesomePathStyle.getPropertyValue('fill')
          fontawesomeNodes[i].setAttribute('style', 'margin: 0')
          fontawesomeNodes[i].setAttribute('width', fontawesomeStyle.getPropertyValue('width'))
          fontawesomeNodes[i].setAttribute('height', fontawesomeStyle.getPropertyValue('height'))
        }
      },
      useCORS: true,
      x: window.scrollX,
      y: window.scrollY,
      width: window.innerWidth,
      height: document.body.clientHeight,
      logging: false,
      backgroundColor: '#ffffff'
      // eslint-disable-next-line require-await
    }).then(async (canvasOrg) => {
      const base = canvasOrg.toDataURL('image/jpeg')
      screenshot.value = base
      loadingScreenshotImg.value = false
    })
  }

  return {
    loadingScreenshotImg,
    screenshot,
    handleScreenshot
  }
}
