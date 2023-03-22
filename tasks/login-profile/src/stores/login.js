import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({count:30})
//   // could also be defined as
//   // state: () => ({ count: 0 })
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
})