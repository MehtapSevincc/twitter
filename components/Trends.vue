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

<style scoped lang="scss">
$primary-color: #1da1f2;
$trend-bg: #f8f8f8;
$border-color:#e6ecf0;

.trends {
  flex: 1;
  padding: 20px;
  background: $trend-bg;
  max-width: 300px;
  border-left: 1px solid $border-color;

.trends-inner{
 h3 {
  margin-bottom: 12px;
  font-size: 18px;
}


 ul {
  list-style: none;
  padding: 0;

 li {
  padding: 8px 0;
  cursor: pointer;
  color: #1da1f2;


&:hover {
  text-decoration: underline;
}

}

}

}
}
</style>
