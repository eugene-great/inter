<template>
  <div class="container py-4">

    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link btn btn-primary" to="/">Practice
        <span class="badge bg-secondary">{{questionsCount}}</span></router-link>
      <router-link class="nav-link" to="/import">Import CSV</router-link>
    </nav>

    <router-view />

  </div>
</template>

<script>

import dataMixin from '@/mixins/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

export default {
  mixins: [dataMixin]
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<style scoped>

.container {
  max-width: 680px;
}

</style>
