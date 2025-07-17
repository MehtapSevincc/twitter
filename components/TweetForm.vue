<template>
  <div class="tweet-form">
    <textarea v-model="newTweet" placeholder="Neler oluyor?"></textarea>
    <button @click="submit">Tweetle</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'submit', content: string): void
}>()

const newTweet = ref('')

function submit() {
  if (newTweet.value.trim()) {
    emit('submit', newTweet.value)
    newTweet.value = ''
  }
}
</script>

<style scoped>
.tweet-form {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
textarea {
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 16px;
}
button {
  align-self: flex-end;
  background: #1da1f2;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>

