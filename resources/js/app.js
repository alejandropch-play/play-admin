window.Vue = require('vue');
require('./bootstrap-vue');
require('./axios');

import Sweetalert2 from 'sweetalert2/src/sweetalert2.js';
window.Swal = Sweetalert2;
window.Slug = require('slug');
Slug.defaults.mode = "rfc3986";

const app = new Vue({
    el: '#app',
    components: {
        login: () => import('./views/auth/Login.vue' /* webpackChunkName: "js/login" */),
        'button-menu': () => import('./components/layout/ButtonMenu.vue' /* webpackChunkName: "js/button-menu" */),
        'button-close': () => import('./components/layout/ButtonClose.vue' /* webpackChunkName: "js/button-close" */),
        'button-icons': () => import('./components/layout/ButtonIcons.vue' /* webpackChunkName: "js/button-icons" */),

        // New components to render
        'press_releases': () => import('./views/press_releases/Post.vue' /* webpackChunkName: "js/press_releases" */),
        'complaints_book': () => import('./views/complaints_book/Claim.vue' /* webpackChunkName: "js/complaints_book" */),
        'work_with_us': () => import('./views/work_with_us/Job.vue' /* webpackChunkName: "js/work_with_us" */),

        'users': () => import('./views/configuration/Users.vue' /* webpackChunkName: "js/users" */),
        'roles': () => import('./views/configuration/Roles.vue' /* webpackChunkName: "js/roles" */),
        'contacts': () => import('./views/Contacts.vue' /* webpackChunkName: "js/contacts" */),

        'general': () => import('./views/info/General.vue' /* webpackChunkName: "js/general" */),
        'social': () => import('./views/info/Social.vue' /* webpackChunkName: "js/social" */),
        'players': () => import('./views/info/Players.vue' /* webpackChunkName: "js/players" */),
        'seo': () => import('./views/info/Seo.vue' /* webpackChunkName: "js/seo" */),

        'category': () => import('./views/blog/Category.vue' /* webpackChunkName: "js/category" */),
        'posts': () => import('./views/blog/Post.vue' /* webpackChunkName: "js/posts" */),
        'departments': () => import('./views/Departments.vue' /* webpackChunkName: "js/departments" */),
        'profile': () => import('./views/Profile.vue' /* webpackChunkName: "js/profile" */),

        'dashboard': () => import('./views/Dashboard.vue' /* webpackChunkName: "js/dashboard" */),
        'customers': () => import('./views/Customers.vue' /* webpackChunkName: "js/customers" */),
        'applicants': () => import('./views/Applicants.vue' /* webpackChunkName: "js/applicants" */),

        'success-stories': () => import('./views/SuccessStories.vue' /* webpackChunkName: "js/success-stories" */),
        'troubleshooting': () => import('./views/Troubleshooting.vue' /* webpackChunkName: "js/troubleshooting" */),
        'business-line-logos': () => import('./views/BusinessLineLogos.vue' /* webpackChunkName: "js/business-line-logos" */),
        'why-us': () => import('./views/WhyUs.vue' /* webpackChunkName: "js/why-us" */),
        'pages': () => import('./views/info/Pages.vue' /* webpackChunkName: "js/pages" */),
        'cooltura-gallery': () => import('./views/cooltura/Gallery.vue' /* webpackChunkName: "js/gallery" */),
        'cooltura-adn': () => import('./views/cooltura/ADN.vue' /* webpackChunkName: "js/adn" */),

        'testimonials': () => import('./views/Testimonials.vue' /* webpackChunkName: "js/testimonials" */),
        'awards': () => import('./views/Awards.vue' /* webpackChunkName: "js/awards" */),

        'reset': () => import('./views/auth/Reset.vue' /* webpackChunkName: "js/reset" */),
        'chatbot-messages': () => import('./views/ChatbotMessages.vue' /* webpackChunkName: "js/chatbot-messages" */),
    }
});
import Validation from './functions/validation.js'
Vue.use(Validation,{ app });
