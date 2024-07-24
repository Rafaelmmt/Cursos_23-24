import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        { id:'000', content:'Note01'}
      ] 
    }
  },
  actions: {
    addNote () {
      console.log('addNote')
    }
  }
})