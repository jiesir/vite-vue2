import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export function createProgressGuard(router) {
  // NProgress.inc(0.1);
  // NProgress.configure({ easing: 'ease', speed: 200, showSpinner: false });
  // close spinner
  NProgress.configure({ showSpinner: false })

  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(async (to, from) => {
    NProgress.done();
  });
}
