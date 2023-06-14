<template>
  <div class="empty-block">
    <slot />
  </div>
</template>

<style scoped>
.empty-block {
  --empty-block-border-color-default: 79.21% 0 0;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  border: 1px dashed oklch(var(--empty-block-border-color, var(--empty-block-border-color-default)) / 30%);
  backdrop-filter: blur(0.25rem);
}
</style>
