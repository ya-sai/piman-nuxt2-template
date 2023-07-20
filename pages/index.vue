<template>
  <div class="container">
    <br>
    <h1>Welcome to Paprika!</h1>
    <p>This is a nuxt template of piman.</p>
    <p>Hope you enjoy it!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, {root}) {

    const menuDropdown1 = ref("");
    const menuDropdownOptions1 =  [
      { 
        type: "link",
        url: "/sitemap",
        label: "平台介紹" 
      },
    ]

    return {
      menuDropdown1, menuDropdownOptions1
    }
  },
})
</script>


<style lang="scss" scoped>
  .container {
    text-align: center;
    margin: 0 auto;
  }
</style>