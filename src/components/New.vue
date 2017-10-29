<template>
  <div>
    <select v-model="month">
      <option value="12-2017">Dicembre 2017</option>
      <option value="01-2018">Gennaio 2018</option>
    </select>
    <button @click="create(month)">OK</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      month: ''
    }
  },
  methods: {
    ...mapActions({
      create: 'month'
    })
  }
}
</script>
