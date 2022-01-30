/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import { action, createStore } from 'easy-peasy'

export default createStore({
  menuOpen: false,
  rainClickMobile: false,
  forestClickMobile: false,
  setMenuOpen: action((state, payload) => {
    state.menuOpen = payload
  }),
  setForestClickMobile: action((state, payload) => {
    state.rainClickMobile = payload
  }),
  setRainClickMobile: action((state, payload) => {
    state.forestClickMobile = payload
  }),
})