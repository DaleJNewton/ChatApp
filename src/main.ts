import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Fieldset from 'primevue/fieldset';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primevue/resources/primevue.min.css'


const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Fieldset', Fieldset);
app.mount('#app');