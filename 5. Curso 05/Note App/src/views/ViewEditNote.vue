<template>
  <div class="edit-note">
    <AddEditNote 
      v-model="noteContent" 
      ref="boxFocus" 
      cardBgColor="link" 
      labelOn="Edit Note"
      placeholderText="Edit note..."
    >
      <template v-slot:buttons>
        <button
          @click="$router.push('/')"
          class="mr-2 button has-background-ligth"
        >
          Cancel
        </button>
        <button
          @click="editNote"
          class="button is-link has-background-link-ligth"
          :disabled="!noteContent"
        >
          Edit Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

const editNote = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}
</script>