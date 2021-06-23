import Vue from 'vue';
import Router from 'vue-router';
import { createProgressGuard } from './guard';
import routes from 'router-inject';
routes.unshift({
    path: '/',
    redirect: routes[0].path,
    meta: routes[0].meta,
});

Vue.use(Router);
// console.warn(import.meta.globEager('/src/pages/**/page.json'))
const router = new Router({
    mode: "hash",
    base: import.meta.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
});

createProgressGuard(router);

export default router;
