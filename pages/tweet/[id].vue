<script setup lang="ts">
import { useRoute } from 'vue-router'
import TweetCard from '~/components/TweetCard.vue'


const route = useRoute()
const tweetId = parseInt(route.params.id as string)

let tweet = null
const stored = localStorage.getItem('tweets')
if (stored) {
  const tweets = JSON.parse(stored)
  tweet = tweets.find((t: any) => t.id === tweetId)
}
</script>

<template>
  <v-container v-if="tweet">
    <TweetCard :tweet="tweet" />
  </v-container>
  <v-container v-else>
    <v-alert type="error">Tweet bulunamadı.</v-alert>
  </v-container>
</template>
