<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small> {{ noteLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a 
        @click.prevent="deleteClick"
        href="#" 
        class="card-footer-item"
      > 
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// PROPS & EMITS
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['deleteClick'])

// Função DELETE CLICKED 
const deleteClick = () => {
  emit('deleteClick', props.note.id)
}

// Função NOTE CHARACTERS  
const noteLength = computed(() => {
  let lengthSum = props.note.content.length
  let descripition = lengthSum > 1 ? 'characters' : 'character'
  return `${lengthSum} ${descripition}`
}) 

</script>