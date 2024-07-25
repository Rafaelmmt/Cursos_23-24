<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

// NavBar-Burger
const useBurgerNav = ref(false)

// Usar Vue Router como parâmetro
const router = useRouter();
const homepage = () => {
    router.push({ name: 'notes' })
}
</script>

<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div @click="homepage" class="navbar-item is-size-4 app-title">Note App</div>
    
                <a
                    class="navbar-burger"
                    :class="{ 'is-active' : useBurgerNav }" 
                    @click="useBurgerNav = !useBurgerNav"
                    role="button" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : useBurgerNav }">
                <div class="navbar-end">
                    <RouterLink class="navbar-item" to="/" active-class="active">Notes</RouterLink>
                    <RouterLink class="navbar-item" to="/stats" active-class="active">Stats</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.app-title {
  font-family: "Courier Prime", monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
}

.navbar-burger, .navbar-item {
    color: rgb(255, 255, 255);
}

@media (max-width: 1023px) {
    .navbar-menu {
        position:absolute;
        left:0;
        width: 100%;
    }
}
</style>