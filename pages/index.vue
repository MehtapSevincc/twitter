<template>
  <div class="layout">
    <Sidebar />
    <main>
      <TweetForm @submit="addTweet" />
      <TweetCard
        v-for="t in tweets"
        :key="t.id"
        :tweet="t"
      />
    </main>
    <Trends />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Trends from '~/components/Trends.vue'
import TweetForm from '~/components/TweetForm.vue'
import TweetCard from '~/components/TweetCard.vue'

interface Tweet {
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

const tweets = ref<Tweet[]>([
  {
    id: 1,
    author: 'Mehtap Sevinç',
    handle: 'mehtapp',
    avatar: '/images/bihter.jpg',
    content: 'mutluluk yolun sonunda değil yolun üzerindedir :)',
    image: '',
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  }
])

function addTweet(content: string) {
  tweets.value.unshift({
    id: Date.now(),
    author: 'Abdullah Türkmen',
    handle: 'abdullah',
    avatar: '',
    content,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  })
}
</script>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
}
main {
  flex: 2;
}
</style>


