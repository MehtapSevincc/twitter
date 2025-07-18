<template>
  <aside class="trends">
    <div class="trends-inner">
      <h3>Gündem</h3>
      <ul>
        <li v-for="trend in trends" :key="trend">#{{ trend }}</li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
const trends = ['OpenAI', 'Nuxt3', 'Vuetify', 'WebDev', 'Türkiye']
</script>

<style scoped>
.trends {
  flex: 1;
  padding: 20px;
  background: #f8f8f8;
  max-width: 300px;
  border-left: 1px solid #e6ecf0;
}
.trends-inner h3 {
  margin-bottom: 12px;
  font-size: 18px;
}
.trends-inner ul {
  list-style: none;
  padding: 0;
}
.trends-inner li {
  padding: 8px 0;
  cursor: pointer;
  color: #1da1f2;
}
.trends-inner li:hover {
  text-decoration: underline;
}
</style>
