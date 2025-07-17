<template>
  <div class="comment-input">
    <input v-model="text" placeholder="Yorum yaz..." />
    <button @click="send">Gönder</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'comment', comment :{user :string ;text: string}): void
}>()

const text= ref('')
const currentUser = 'ad'


function send() {
  if (text.value.trim()) {
    emit('comment', {
      user: currentUser,
      text: text.value
    } )
 text.value= ''
  }
}
</script>

<style scoped>
.comment-input {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.comment-input input {
  flex: 1;
  border: 1px solid #e6ecf0;
  border-radius: 20px;
  padding: 8px 12px;
}
.comment-input button {
  background: #1da1f2;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
}
</style>


