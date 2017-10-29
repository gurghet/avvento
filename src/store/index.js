import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      displayName: '',
      email: ''
    },
    segment: [],
    preferences: [],
    errorStack: []
  },
  actions: {},
  mutations: {
    PUSH_ERROR (state, error) {
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
      state.errorStack.push({ id: uuid, error })
    },
    SET_SEGMENT (state, segment) {
      state.segment = segment
    },
    SET_PREFERENCE (state, { shiftUUID, value }) {
      const existingPreference = state.preferences.find(pref => pref.shiftUUID === shiftUUID)
      if (existingPreference) {
        existingPreference.value = value
      } else {
        state.preferences.push({ shiftUUID, value })
      }
    },
    SET_USER (state, { user }) {
      state.user.displayName = user.displayName
      state.user.email = user.email
      state.user.photoURL = user.photoURL
      state.user.uid = user.uid
    },
    CLEAR_USER (state) {
      state.user = {}
    }
  }
})

export default store
