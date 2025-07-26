<template>
  <div class="comment-input">
    <input v-model="text" placeholder="Yorum yaz..." />
    <button @click="send">Gönder</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'comment', comment :{user :string ;text: string; createdAt:string}): void
}>()

const text= ref('')
const currentUser = 'ad'


function send() {
  if (text.value.trim()) {
    emit('comment', {
      user: currentUser,
      text: text.value,
      createdAt: new Date().toISOString()
    } )
 text.value= ''
  }
}
</script>

<style scoped lang="scss">
$primary-color: #1da1f2;
$border-color:#e6ecf0;
.comment-input {
  display: flex;
  gap: 8px;
  margin-top: 10px;

   input {
  flex: 1;
  border: 1px solid $border-color;
  border-radius: 20px;
  padding: 8px 12px;
   }
   button {
  background: #1da1f2;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: darken($primary-color, 5%);
  }
}

}


</style>


