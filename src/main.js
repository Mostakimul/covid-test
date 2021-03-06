import 'chartkick/chart.js';
import { createApp } from 'vue';
import VueChartkick from 'vue-chartkick';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(VueChartkick)
  .mount('#app');
