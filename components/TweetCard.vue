<template>
  <div class="tweet-card">
    <img class="avatar" :src="tweet.avatar" :alt="tweet.author" />
    <div class="content">
      <div class="header">
        <strong>{{ tweet.author }}</strong>
        <span class="handle">@{{ tweet.handle }}</span>
        <span class="dot">·</span>
        <span class="time">{{ formattedTime }}</span>
      </div>
      <p class="text">{{ tweet.content }}</p>
      <img v-if="tweet.image" class="media" :src="tweet.image" alt="tweet image" />
      <div class="actions">
       <button @click="likeTweet">❤️ {{ tweet.likes }}</button>
<button @click="toggleComment">💬 {{ tweet.comments.length }}</button>

      </div>
      <CommentInput v-if="showComment"
       :tweet="tweet" 
       @comment="addComment"/>

<ul v-if="tweet.comments.length" class="comment-list">
  <li v-for="(comment, index) in tweet.comments" :key="index">
   <strong> {{ comment.user }}</strong>: {{ comment.text }}
  </li>
</ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CommentInput from './CommentInput.vue'

const props = defineProps<{
  tweet: {
    id: number
    author: string
    handle: string
    avatar: string
    content: string
    image?: string
    createdAt: string
    likes: number
    comments: any[]
  }
}>()

const showComment = ref(false)
function toggleComment() { showComment.value = !showComment.value }
function likeTweet() { props.tweet.likes++ }
function addComment(comment:{user:string; text:string}) {
  props.tweet.comments = [...props.tweet.comments, comment]
}


const formattedTime = computed(() => {
  const date = new Date(props.tweet.createdAt)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})
</script>

<style scoped>
.tweet-card {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #e6ecf0;
  background: #fff;
}
.avatar {
  width: 48px; height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}
.content {
  flex: 1;
}
.header {
  display: flex;
  align-items: center;
  gap: 4px;
}
.handle, .dot, .time {
  color: #657786;
  font-size: 14px;
}
.text {
  margin: 8px 0;
}
.media {
  width: 100%;
  border-radius: 12px;
  margin: 8px 0;
}
.actions {
  display: flex;
  gap: 24px;
  margin-top: 8px;
}
.actions button {
  background: none;
  border: none;
  color: #657786;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.actions button:hover {
  color: #1da1f2;
}
</style>

