<template>
  <div class="tweet-card" @click="goToDetail">
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
       <button @click.stop="likeTweet">❤️ {{ tweet.likes }}</button>
       <button @click.stop="toggleComment">💬 {{ tweet.comments.length }}</button>

      </div>
      <CommentInput v-if="showComment"
       :tweet="tweet" 
       @comment="addComment"/>

<ul v-if=" showComment &&tweet.comments.length" class="comment-list">
  <li v-for="(comment, index) in tweet.comments" :key="index">
   <strong> {{ comment.user }}</strong>: {{ comment.text }}
   <span class="comment-time">({{ getTimeAgo(comment.createdAt) }})</span>
  </li>
</ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router=useRouter()
function goToDetail(){
  router.push(`/tweet/${props.tweet.id}`)
}

function getTimeAgo(dateString:string): string {
const now = currentTime.value
const date =new Date(dateString)
const diff =(now.getTime() - date.getTime())/1000

if(diff<3600) return `${Math.floor(diff/60)}dk`
if(diff<86400) return `${Math.floor(diff/3600)}s`
if (diff < 604800) return `${Math.floor(diff / 86400)}g`
if (diff < 2629800) return `${Math.floor(diff / 604800)}h`
if (diff < 31557600) return `${Math.floor(diff / 2629800)}ay`
return `${Math.floor(diff / 31557600)}y`
}
import { ref, computed } from 'vue'
import CommentInput from './CommentInput.vue'
const currentTime =ref(new Date())
setInterval(() => { currentTime.value =new Date()
},60* 1000)

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
function addComment(comment:{user:string; text:string ; createdAt:string}) {
  props.tweet.comments = [...props.tweet.comments, comment]
  const tweetsFromStorage =localStorage.getItem('tweets')
  if(tweetsFromStorage){
    const tweetList =JSON.parse(tweetsFromStorage)
    const updatedList = tweetList.map((t:any)=>{
      if(t.id ===props.tweet.id) {
        return{...t, comments: [...t.comments,comment]}
      }
      return t
    })
    localStorage.setItem('tweets',JSON.stringify(updatedList))
    
  }
}

const formattedTime = computed(() => getTimeAgo(props.tweet.createdAt))
 
</script>

<style scoped lang="scss">
$border-color:  #e6ecf0;
$text-muted:#657786;
$background-white: #fff;
$primary-color:#1da1f2;

.tweet-card {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid $border-color;
  background: $background-white;

.avatar {
  width: 48px; height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}
.content {
  flex: 1;


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



.actions button {
  background: none;
  border: none;
  color: #657786;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: $primary-color;
  }
}
}

}

}





.actions button:hover {
  color: #1da1f2;
}
</style>

