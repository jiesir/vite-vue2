import Vue from 'vue';
import router from '@/utils/router';
import store from '@/utils/store';
import App from './App.vue';
import filters from '@/utils/filter';
import { setupLoader } from '@/utils/loader';
import { setupConsole } from '@/utils/console';
import 'amfe-flexible';


Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

setupLoader(app);
setupConsole();