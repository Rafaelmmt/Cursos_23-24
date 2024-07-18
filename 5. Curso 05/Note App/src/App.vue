<script setup>
import NavBar from '@/components/Layout/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container is-max-desktop align-content py-4" >
    <RouterView />
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@media (max-width: 1023px) {
  .align-content {
    padding-left: 12px;
  }
}
</style>