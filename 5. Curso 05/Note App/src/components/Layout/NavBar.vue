<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// NavBar-Burger
const useBurgerNav = ref(false)

</script>

<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">Note App</div>
    
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