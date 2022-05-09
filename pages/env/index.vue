<template>
  <client-only>
    <div>
      <ul class="env-list">
        <h3>env variables</h3>
        <li v-for="(item, index) in env" :key="index">
          {{ index + ': ' + item }}
        </li>
      </ul>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $config: env } = useContext()
    return {
      env
    }
  }
})
</script>
