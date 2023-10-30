import "./assets/style.css";
import "remixicon/fonts/remixicon.css"; 
import 'v-calendar/style.css';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'vue-multiselect/dist/vue-multiselect.css';

import Toast, { POSITION } from "vue-toastification";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 
import VueMultiselect from 'vue-multiselect'

const app = createApp(App);

const options = {
    // You can set your default options here 
    newestOnTop: true,
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

app.component('VueMultiselect', VueMultiselect);
app.use(Toast, options);
app.use(router); 

app.mount("#app");
