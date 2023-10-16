import "./assets/style.css";
import "remixicon/fonts/remixicon.css"; 
import 'v-calendar/style.css';


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 

const app = createApp(App);

app.use(router); 

app.mount("#app");
