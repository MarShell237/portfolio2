<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container px-5">
        <NuxtLink class="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="logo" width="60px"></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li class="nav-item"><NuxtLink class="nav-link" to="/">Accueil</NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link" to="/resume">CV</NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link" to="/projects">Projects</NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
            </ul>
        </div>
    </div>
</nav>
</template>
  
<script setup>

</script>

<style scoped>
  
</style>