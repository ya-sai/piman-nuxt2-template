<template>
  <header>
    <nuxt-link id="ak-jump" to="#ak-container" title="跳至主要內容">跳至主要內容</nuxt-link>
    <h1 class="visually-hidden">Website Name</h1>
    <div class="header-container">
      <div class="logo">
        <nuxt-link to="/" title="前往首頁">
          <picture>
            <!-- <source media="(min-width: 768px)" srcset="/favicon.ico" /> -->
            <img class="logo-img" src="/favicon.ico" alt="" />
          </picture>
        </nuxt-link>
      </div>
      <div class="menubar">
        <button class="btn-open-mobile-menu" @click="handleToggleMobileMenuBtn">選單</button>
        <div :class="['menu', mobileMenuStatus ? 'menu--open' : '']">
          <button class="btn-close-mobile-menu" @click="handleCloseMobileMenuBtn">關閉選單</button>
          <nav class="main-menu" aria-label="主要選單">
            <ul>
              <li>
                <nuxt-link
                  id="ak-header"
                  to="#ak-header"
                  title="上方功能區塊"
                  accesskey="U"
                  name="ak-header"
                >
                  :::
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/sitemap" title="前往網站導覽"  @click="handleToggleMobileMenuBtn">網站導覽</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/nested-pages" title="前往巢狀頁面範例"  @click="handleToggleMobileMenuBtn">巢狀頁面範例</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="sub-menu" aria-label="次要選單">
            <ul>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuStatus = ref<boolean>(false)
const handleToggleMobileMenuBtn = () => {
  mobileMenuStatus.value = !mobileMenuStatus.value
}
const handleCloseMobileMenuBtn = () => {
  mobileMenuStatus.value = false
}
</script>

<style scoped>
header {
  --header-bg-default: 100% 0 0;
  --header-border-color-default: 79.21% 0 0;
  --skip-btn-color-default: 100% 0 0;
  --skip-btn-bg--default: 24.78% 0 0;
  --menubar-mobile-bg-default: 24.78% 0 0;
  position: sticky;
  top: 0;
  background-color: oklch(var(--header-bg, var(--header-bg-default)) / 90%);
  border-bottom: 1px solid oklch(var(--header-border-color, var(--header-border-color-default)) / 30%);
  backdrop-filter: blur(0.25rem);
  z-index: 1;
  & #ak-jump {
    position: absolute;
    top: -1px;
    left: 0;
    font-size: 0.875rem;
    color: transparent;
    z-index: -1;
    &:focus-within {
      color: oklab(var(--skip-btn-color, var(--skip-btn-color-default)));
      background-color: oklab(var(--skip-btn-bg, var(--skip-btn-bg--default)));
      z-index: inherit;
    }
  }
  & .header-container {
    display: flex;
    align-items: center;
  }
  & .btn-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  & .logo {
    padding: 0 1rem 0 2rem;
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
    & a {
      display: inline-block;
    }
  }

  & .menubar {
    flex: 1;
    white-space: nowrap;
    overflow: auto;
    background:
      linear-gradient(to right, oklch(var(--header-bg, var(--header-bg-default)) / 90%) 30%,  oklch(var(--color-black) / 0%)),
      linear-gradient(to right, oklch(var(--color-black) / 0%), oklch(var(--header-bg) / 90%) 70%),
      radial-gradient(farthest-side at 0 50%, oklch(var(--color-black) / 20%), transparent),
      radial-gradient(farthest-side at 100% 50%, oklch(var(--color-black) / 20%), transparent);
    background-position: left center, right center, left center, right center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;

    /* Opera doesn't support this in the shorthand */
    background-attachment: local, local, scroll, scroll;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0.75rem 1rem;
      white-space: inherit;
    }
  }
  & .btn-open-mobile-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  & .btn-close-mobile-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  & .menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0 1rem 2rem;
    @media screen and (max-width: 768px) {
      display: block;
      position: fixed;
      top: 0;
      left: 100%;
      width: 300px;
      height: 100dvh;
      background-color: oklch(var(--menubar-mobile-bg, var(--menubar-mobile-bg-default)));
      box-shadow: var(--box-shadow);
      padding: 1rem;
      overflow: auto;
      scroll-behavior: smooth;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      transform: translate3d(0, 0, 0);
      transition: transform 300ms ease-out;
    }
    & ul {
      display: flex;
      gap: 1.5rem;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    & a {
      display: inline-block;
    }
  }
  .menu--open {
    @media screen and (max-width: 768px) {
      transform: translate3d(-100%, 0, 0);
    }
  }
  & .sub-menu {
    padding-right: 2rem;
    @media screen and (max-width: 768px) {
      padding-right: 0;
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
  }
}
</style>
