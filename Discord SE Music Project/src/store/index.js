import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, db } from "../includes/firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Howl } from "howler";

export default createStore({
  state: {
    authModal: false,
    userLoggedIn: false,
    mobileMenu: false,
    currentSong: {},
    sound: {},
    seek: "00:00",
    duration: "00:00",
  },
  getters: {
    // to toggle icons
    playing: (state) => {
      if (context.state.sound.playing) {
        return context.state.sound.playing();
      }
      return false;
    },
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
    toggleUserLoggedIn: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
    newSong: (state, payload) => {
      state.currentSong = payload;
      state.sound = new Howl({
        src: [payload.url],
        html5: true,
      });
    },
    updateProgress: (state) => {
      state.seek = state.sound.seek();
      state.duration = state.sound.duration();
    },
  },
  actions: {
    async register(context, payload) {
      // registering a new user
      await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      // adding user to firestore with auth id
      await setDoc(doc(db, "userCollection", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });
      // creating a user registration
      await updateProfile(auth.currentUser, {
        displayName: payload.email,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      // login on registration
      context.commit("toggleUserLoggedIn");
    },
    async login(context, payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);
      context.commit("toggleUserLoggedIn");
    },
    async signOut(context) {
      await signOut(auth);
      context.commit("toggleUserLoggedIn");
    },
    init_login(context) {
      let user = auth.currentUser;

      if (user) {
        context.commit("toggleUserLoggedIn");
      }
    },
    async comment(context, payload) {
      // although add is preferable
      await addDoc(collection(db, "commentsCollection"), payload);
    },
    async newSong(context, payload) {
      if (context.state.sound instanceof Howl) {
        context.state.sound.unload();
      }
      context.commit("newSongs", payload);
      context.state.sound.play();

      context.state.sound.on("play", () => {
        requestAnimationFrame(() => {
          context.dispatch("progress");
        });
      });
    },
    progress(context) {
      context.commit("updateProgress");

      if (this.state.sound.playing()) {
        requestAnimationFrame(() => {
          context.dispatch("progress");
        });
      }
    },
    toggleAudio(context) {
      if (!context.state.sound.playing) {
        return;
      }
      if (context.state.sound.playing()) {
        context.state.sound.pause();
        return;
      } else {
        context.state.sound.play();
      }
    },
    updateSeek(context, payload) {
      if (!context.state.sound.playing) {
        return;
      }
      const { x, width } = payload.currenTarget.getBoundingClientRect();
      const clickX = payload.clientX - x;
      const percentage = clickX / width;

      const seconds = context.state.sounds.duration() * percentage;
      context.sound.seek(sounds);
      context.sound.once("seek", () => {
        context.dispatch("progress");
      });
    },
  },
});
