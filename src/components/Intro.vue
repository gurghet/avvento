<template>
  <div>
    <h1 v-if="newUser">Benvenuto {{displayName}}</h1>
    <h1 v-else>Bentornato {{displayName}}</h1>
    <button @click="$router.push('/new')">Nuovo mese</button>
  </div>  
</template>
<script>
import firebase from 'firebase'
import 'firebase/firestore'
export default {
  name: 'Intro',
  data () {
    return {
      newUser: false
    }
  },
  computed: {
    displayName () { return this.$store.state.user.displayName }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const store = firebase.firestore()
        const users = store.collection('/users')
        users.doc(user.uid).get()
          .then(result => {
            if (!result.exists) {
              users.doc(user.uid).set({
                displayName: user.displayName,
                email: user.email
              })
              this.newUser = true
            }
          })
        this.$store.commit('SET_USER', { user })
      } else {
        this.$router.push('/auth')
      }
    })
  }
}
</script>

