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
    // FUNÇÃO ADD NEW NOTE
    addNote (newNoteContent) {
      let currentDate = new Date().getTime()
      let id = currentDate.toString()
      let note = {
        id: id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    // FUNÇÃO DELETAR NOTE
    deleteNote (idToDelete) {
      this.notes = this.notes.filter( note => {
        return note.id !== idToDelete})
    },
    
  }
})