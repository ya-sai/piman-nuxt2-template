<template>
  <div class="empty-block">
    <slot />
  </div>
</template>

<style scoped>
.empty-block {
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  border: 1px dashed
    rgba(var(--empty-block-border-color, var(--empty-block-border-color-default)), 0.3);
  backdrop-filter: blur(0.25rem);
}
</style>
