import Vue from 'vue';
import * as LoginForm from './components/login-form.vue'

new Vue({
    el: '.login-container',
    components: {
        'login-form': LoginForm
    }
});