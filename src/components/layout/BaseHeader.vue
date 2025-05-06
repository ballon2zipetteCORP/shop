<template>
  <nav>
    <RouterLink :to="{name: 'home'}">
      <img alt="logo" src="/logo/logo-full.png" />
    </RouterLink>

    <ul>
      <li>
        <RouterLink :to="{name: 'home'}">
          Accueil
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
img {
  width: 10em;
}
</style>