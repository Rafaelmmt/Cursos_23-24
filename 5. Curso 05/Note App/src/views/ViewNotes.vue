<template>
  <div class="note">

    <AddEditNote v-model="newNote">
      
      <template v-slot:buttons>
        <button
          class="button is-link has-background-success-ligth"
          @click="addNote"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    
    <!--
    <div class="has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea 
            class="textarea" 
            v-model="newNote" 
            placeholder="Escreva aqui sua nota..."
            ref="newNoteRef" 
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success-ligth"
            @click="addNote"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    -->

    <NoteCard v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes.js'
import NoteCard from '@/components/Notes/NoteCard.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue';

// Use PINIA STORE
const storeNotes = useStoreNotes()

// FUNÇÃO ADD NEW NOTE
const newNote = ref('23')
const newNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
