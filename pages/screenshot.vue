<template>
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cntWjYkornI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ff41c8" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"/><path fill="#16020b" d="M9,9v30h30V9H9z M19.093,21.695l1.914-4.883h3.291l-3.34,7.051l3.418,7.168h-3.33l-1.953-4.971 l-1.943,4.971h-3.33l3.418-7.168l-3.35-7.051h3.291L19.093,21.695z M25.069,25.426c0-1.732,0.293-3.024,0.879-3.877 s1.438-1.279,2.559-1.279c0.813,0,1.491,0.352,2.031,1.055v-5.293h2.783v15h-2.51l-0.127-1.074c-0.566,0.847-1.296,1.27-2.188,1.27 c-1.106,0-1.951-0.423-2.534-1.27s-0.881-2.09-0.894-3.73V25.426z M27.843,26.119c0,1.042,0.11,1.77,0.332,2.183 s0.596,0.62,1.123,0.62c0.547,0,0.96-0.244,1.24-0.732v-4.824c-0.273-0.521-0.684-0.781-1.23-0.781 c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188V26.119z"/></svg>
    <bpa-button
      theme="primary-ghost"
      @click="handleScreenshot()"
    >
      截圖
    </bpa-button>
    <img
      v-if="screenshot"
      class="screenshot"
      :src="screenshot"
      alt=""
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import html2canvas from 'html2canvas'
import Canvg from 'canvg'
export default defineComponent({
  setup(_,{root}) {
    const screenshot = ref('')
    // const loadingScreenshotImg = ref<boolean>(false)

    async function handleScreenshot() {
      window.scrollTo(0,0)
      // loadingScreenshotImg.value = true

      // <svg> for IE11
      let svgNodesToRecover = []
      let svgNodesToRemove = []
      let v = null
      let svgNodes = document.querySelectorAll('svg')
      if ((window as any).document.documentMode) {
        if(svgNodes && svgNodes.length) {
          for(let i=0;i<svgNodes.length;i++) {
            let svgNode = svgNodes[i]
            let parentNode = svgNode.parentNode!
            let xml = (new XMLSerializer()).serializeToString(svgNode)
            xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '')
            let canvas = (document as any).createElement('canvas')

            canvas.width = 650
            canvas.height = 480
            
            if (svgNode.style.position) {
              canvas.style.position += svgNode.style.position
              canvas.style.left += svgNode.style.left
              canvas.style.top += svgNode.style.top
            }

            if (svgNode.clientWidth) {
              canvas.width = svgNode.clientWidth
            }

            if (svgNode.clientHeight) {
              canvas.height = svgNode.clientHeight
            }

            if (svgNode.className) {
              canvas.className = svgNode.className
            }

            let ctx = canvas.getContext('2d')
            v = await Canvg.from(ctx, xml)
            v.start()

            svgNodesToRecover.push({
              parent: parentNode,
              child: svgNode
            })

            parentNode.removeChild(svgNode)

            svgNodesToRemove.push({
              parent: parentNode,
              child: canvas
            })

            parentNode.appendChild(canvas)
          }
        }
      }

      const result = await html2canvas(document.querySelector('body')!, {
        onclone(html) {
          // iframe hint
          let iframeNodes = html.querySelectorAll('iframe')
          if(iframeNodes && iframeNodes.length) {
            for(let i=0;i<iframeNodes.length;i++) {
              let iframeNode = iframeNodes[i]
              let tempNode = html.createElement('a')
              tempNode.href = iframeNode.src
              if(tempNode.hostname != window.location.hostname){
                let replaceIframe = html.createElement("div")
                replaceIframe.style.width = iframeNode.clientWidth + 'px'
                replaceIframe.style.height = iframeNode.clientHeight + 'px'
                replaceIframe.style.backgroundColor = '#000'
                replaceIframe.style.display = 'inline-block'
                replaceIframe.style.verticalAlign = 'bottom'
                replaceIframe.innerHTML = '<span class="no-iframe">因為安全性問題，此影片無法擷取。<br>Sorry, there is something wrong.</span>'
                let head = html.head || html.getElementsByTagName('head')[0],
                replaceIframeStyle = html.createElement("style")
                head.appendChild(replaceIframeStyle)
                let css = '.no-iframe {color: white;text-align: center;}'
                replaceIframeStyle.type = 'text/css'
                replaceIframeStyle.appendChild(html.createTextNode(css))
                iframeNode.insertAdjacentHTML("afterend", replaceIframe.outerHTML)
                iframeNode.style.display = 'none'
                tempNode.style.display = 'none'
              }
            }
          }
        },
        useCORS: true,
        // x: window.scrollX,
        // y: window.scrollY,
        // width: window.innerWidth,
        // height: document.body.scrollHeight,
        backgroundColor: '#ffffff'
      })

      // <svg> for IE11
      if ((window as any).document.documentMode) {
        if (svgNodesToRemove.length && svgNodesToRecover.length) {
          svgNodesToRemove.forEach(d => {
            d.parent.removeChild(d.child)
          })
          svgNodesToRecover.forEach(d => {
            d.parent.appendChild(d.child)
          })
        }
        v!.stop()
      }

      if (result) {
        screenshot.value = result.toDataURL('image/jpeg')
        // loadingScreenshotImg.value = false
      }
    }

    return {
      screenshot,
      // loadingScreenshotImg,
      handleScreenshot
    }
  }
})
</script>