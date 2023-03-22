import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({count:10}),
  actions: {
    increaseCount() {
      this.count++
    },
    decreaseCount(){
      this.count--
    }
  },
})