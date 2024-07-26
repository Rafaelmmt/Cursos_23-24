<template>
  <div class="note">

    <AddEditNote v-model="newNote" ref="boxFocus">
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
const newNote = ref('')
const boxFocus = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  boxFocus.value.focusTextarea()
}
</script>
