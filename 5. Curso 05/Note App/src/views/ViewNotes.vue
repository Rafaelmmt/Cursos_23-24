<template>
  <div class="note">
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

    <NoteCard v-for="note in notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import NoteCard from '@/components/Notes/NoteCard.vue';

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem nibh, maximus commodo sollicitudin eu, volutpat et mi. Vestibulum rhoncus velit id turpis eleifend, dictum placerat purus lobortis.'
  },
  {
    id: 'id2',
    content: 'Lorem ipsum da turpis eleifend, dictum placerat purus lobortis.'
  }
])

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()
  let note = {
    id: id,
    content: newNote.value
  }
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
