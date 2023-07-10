<template>
  <footer>
    <div class="footer-header">
      <nuxt-link id="ak-footer" to="#ak-footer" title="下方功能區塊" accesskey="Z" name="ak-footer">
        :::
      </nuxt-link>
    </div>
    <div class="footer-container">
      <div>
        <ul>
          <li>
            <nuxt-link to="/" title="前往首頁">
              <img class="logo-img" src="/favicon.ico" alt="" />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>聯絡電話：(xx)xxxx-xxxx</li>
          <li>聯絡地址：XXXXXXXXXXXXXXX</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <nuxt-link
              to="javascript:;"
              title="另開視窗前往資料安全政策"
              target="_blank"
              rel="noreferrer noopener"
            >
              資料安全政策
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="javascript:;"
              title="另開視窗前往隱私權保護政策"
              target="_blank"
              rel="noreferrer noopener"
            >
              隱私權保護政策
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="javascript:;"
              title="另開視窗前往宣告"
              target="_blank"
              rel="noreferrer noopener"
            >
              宣告
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-footer">&copy; 2023 copyright</div>
  </footer>
</template>

<style scoped>
footer {
  background-color: oklch(var(--footer-bg, var(--footer-bg-default)));
  color: oklch(var(--footer-color, var(--footer-color-default)));
  & .footer-container {
    display: flex;
    justify-content: space-around;
    gap: 1.5rem;
    width: 100%;
    max-width: var(--breakpoint-1280, 1280);
    margin: 0 auto;
    padding: 0 1rem;
    @media screen and (width <= 768px) {
      flex-direction: column;
      padding: 1rem;
    }
    & a {
      text-decoration: underline;
      text-decoration-style: dotted;
      color: oklch(var(--footer-link-color, var(--footer-link-color-default)));
    }
  }
  & .footer-footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid
      oklch(var(--footer-border-color, var(--footer-border-color-default)) / 30%);
    text-align: center;
  }
}
</style>
