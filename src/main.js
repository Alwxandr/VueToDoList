import Vue from 'vue'
import App from './App.vue'
import  VueRouter from 'vue-router'
import  router from './routes'
import Vuelidate from 'vuelidate'

import { firestorePlugin } from 'vuefire'

import "firebase/firestore";
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.use(firestorePlugin)
Vue.use(Vuelidate)
Vue.use(VueRouter)

let config = {
    apiKey: "AIzaSyBdgn4q22VGiTRah7tEFquTJ77oTo0EKL0",
    authDomain: "vue-to-do-list-58af4.firebaseapp.com",
    databaseURL: "https://vue-to-do-list-58af4.firebaseio.com",
    projectId: "vue-to-do-list-58af4",
    storageBucket: "vue-to-do-list-58af4.appspot.com",
    messagingSenderId: "378193639170",
    appId: "1:378193639170:web:8381fd9ccd253389"
};

firebase.initializeApp(config);
export const db = firebase.firestore();

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
