<template>
  <div>
    <ul>
      <li v-for="(itemm, index) in 50" :key="index">
        <nuxt-link to="/">Item</nuxt-link>
      </li>
    </ul>
  </div>
</template>
