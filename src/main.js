/*import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './firebase'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
*/

import { createApp } from "vue";
import { createPinia } from "pinia";
// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
    apiKey: "AIzaSyC6AYF2_E7Tit0dOUrXiPlqMnJ5G10lLCg",
    authDomain: "lab09-e5ddf.firebaseapp.com",
    projectId: "lab09-e5ddf",
    storageBucket: "lab09-e5ddf.appspot.com",
    messagingSenderId: "151824082132",
    appId: "1:151824082132:web:d8d2feb69c330017b40741",
    measurementId: "G-YCFN21J7MJ"
  };

const initfirestore = initializeApp(firebaseConfig);
export const db = getFirestore(initfirestore);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(bootstrap)

app.mount("#app");