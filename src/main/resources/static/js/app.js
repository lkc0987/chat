require('materialize-css/dist/js/materialize');

import Vue from 'vue';

import * as ChatHeader from "./components/chat-header.vue";
import * as ChatApp from "./components/chat-app.vue";
import store from "./components/chat-store";

new Vue({
    el: '.app-container',
    store,
    components: {
        'chat-header': ChatHeader,
        'chat-app': ChatApp
    },
    created: function () {

    },
    mounted: function () {
        store.dispatch('LOAD_CHAT_LIST');
    },
    methods: {
    }
});