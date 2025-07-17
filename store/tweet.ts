import { defineStore } from 'pinia'

interface Tweet {
  id: number
  content: string
  createdAt: string
  likes:number
  comments :Array<{user:string,text:string}>
}

export const useTweetStore = defineStore('tweet', {
  state: () => ({
    tweets: [] as Tweet[],
  }),
  actions: {
    addTweet(content: string) {
      this.tweets.unshift({
        id: Date.now(),
        content,
        createdAt: new Date().toISOString(),
        likes:0,
        comments: [],
      })
    },
  },
})

