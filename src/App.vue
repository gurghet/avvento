<template>
  <div id="app">
    <button @click="logout">Logout</button>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  methods: {
    logout () {
      firebase.auth().signOut()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
