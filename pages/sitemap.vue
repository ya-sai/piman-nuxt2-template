<template>
  <main class="page">
    <akContainer />
    <h2>{{ pageTitle }}</h2>
    <div class="page-container">
      <section>
        <h3>網站區塊與快捷鍵</h3>
        <p>
          本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊：<br />
          1. 上方功能區塊、2. 中央內容區塊、3.下方功能區塊。<br /><br />
          本網站的快速鍵(Accesskey)設定如下：
        </p>
        <p>
          <kbd>Alt</kbd>+<kbd>U</kbd>：上方功能區塊，包括整合檢索頁面、主題專區頁面等。<br />
          <kbd>Alt</kbd>+<kbd>S</kbd>：搜尋資料。<br />
          <kbd>Alt</kbd>+<kbd>C</kbd>：中央內容區塊，為本網站主要內容區。<br />
          <kbd>Alt</kbd>+<kbd>Z</kbd>：下方功能區塊。<br />
        </p>
        <p>
          如果您的瀏覽器是
          Firefox，快速鍵的使用方法為<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>快速鍵字母</kbd>，例如
          <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> 會跳至網頁中央區塊，以此類推。<br />
        </p>
        <p>
          另外，如果您是 MAC 用戶，快速鍵的使用方法為<kbd>Control</kbd>+<kbd>Option</kbd>+<kbd
            >快速鍵字母</kbd
          ><br />
        </p>
        <p>若以上方式皆無法使用，建議可以檢查是不是有自訂的快速鍵影響。</p>
        <div
          class="table-scroll-h"
          :tabindex="tabIndex"
          role="group"
          aria-labelledby="caption"
          ref="checkScrollable"
        >
          <table>
            <caption id="caption">
              <nuxt-link
                to="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey"
                title="另開視窗 各作業系統與瀏覽器快捷鍵參考表來源網頁"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>各作業系統與瀏覽器快捷鍵參考表來源網頁</span>
              </nuxt-link>
              <small v-show="tabIndex === 0">(橫向捲動顯示更多資訊)</small>
            </caption>
            <tbody>
              <tr>
                <th scope="col">瀏覽器/作業系統</th>
                <th scope="col">Windows</th>
                <th scope="col">Linux</th>
                <th scope="col">Mac</th>
              </tr>
              <tr>
                <th scope="row">Firefox</th>
                <td colspan="2"><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>快速鍵字母</kbd></td>
                <td>
                  Firefox 57 版本以上: <kbd>Control</kbd> + <kbd>Option</kbd> +
                  <kbd>快速鍵字母</kbd> 或 <kbd>Control</kbd> + <kbd>Alt</kbd> +<kbd>快速鍵字母</kbd
                  ><br />
                  Firefox 14 版本以上: <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>快速鍵字母</kbd>
                  <br />
                  Firefox 13 版本以下: <kbd>Control</kbd> + <kbd>快速鍵字母</kbd>
                </td>
              </tr>
              <tr>
                <th scope="row">Internet Explorer</th>
                <td rowspan="3">
                  <kbd>Alt</kbd> + <kbd>快速鍵字母</kbd><br />
                  <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>快速鍵字母</kbd>
                </td>
                <td colspan="2">無</td>
              </tr>
              <tr>
                <th scope="row">Edge</th>
                <td>無</td>
                <td rowspan="3">
                  <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>快速鍵字母</kbd><br />
                  <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>快速鍵字母</kbd>
                </td>
              </tr>
              <tr>
                <th scope="row">Google Chrome</th>
                <td><kbd>Alt</kbd> + <kbd>快速鍵字母</kbd></td>
              </tr>
              <tr>
                <th scope="row">Safari</th>
                <td colspan="2">無</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※ 當本網站項目頁籤無法以滑鼠點選時，您可利用以下鍵盤操作方式瀏覽資料：</p>
        <p>
          <kbd>←</kbd> <kbd>→</kbd> 或 <kbd>↑</kbd> <kbd>↓</kbd>：按左右鍵或上下鍵移動標籤順序。
        </p>
        <p>
          <kbd>Tab</kbd
          >：停留於該標籤後，可利用<kbd>Tab</kbd>鍵跳至內容瀏覽該筆資料，遇到單選按鈕(radio)時請配合使用<kbd
            >←</kbd
          >
          <kbd>→</kbd> 或 <kbd>↑</kbd> <kbd>↓</kbd>鍵移動項目順序。
        </p>
        <p>
          <kbd>Tab</kbd> + <kbd>Shift</kbd>：按 <kbd>Tab</kbd> +
          <kbd>Shift</kbd>可往回跳至上一筆資料；當跳回至標籤項目時您可繼續利用<kbd>←</kbd>
          <kbd>→</kbd> 或 <kbd>↑</kbd> <kbd>↓</kbd>鍵移動標籤順序。
        </p>
      </section>
      <section>
        <h3>網站地圖</h3>
        <ul>
          <li>
            <nuxt-link to="/" title="前往首頁">首頁</nuxt-link>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('網站導覽')
const pageDescription = ref(
  '提供' + runtimeConfig.public.websiteName + '的網站區塊、快捷鍵和網站地圖'
)
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

const checkScrollable = ref<HTMLElement | null>(null)
const tabIndex = ref()
const checkTabAble = () => {
  if (
    checkScrollable.value!.scrollWidth > 0 &&
    checkScrollable.value!.scrollWidth > checkScrollable.value!.clientWidth
  ) {
    tabIndex.value = 0
  } else {
    tabIndex.value = null
  }
}
onMounted(() => {
  checkTabAble()
  window.addEventListener('resize', checkTabAble)
})
</script>
