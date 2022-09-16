import { createStore } from "vuex";

export default createStore({
  state: {
    authModal: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
  },
  actions: {},
});
