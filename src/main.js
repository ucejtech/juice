// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import autoloadComponents from './components/ui-components/autoload';
import autoloadCdnAssets from './assets/autoload';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function(Vue, { router, head, isClient }) {
  // component auto imports
  autoloadComponents(Vue);

  // cdn link imports
  autoloadCdnAssets(head);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  if (process.isClient) {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out'
    });
  }
}
