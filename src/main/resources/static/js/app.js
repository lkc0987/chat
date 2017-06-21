import * as ChatHeader from "./components/chat-header.vue";
import * as ChatApp from "./components/chat-app.vue";

new Vue({
    el: '.app-container',
    components: {
        'chat-header': ChatHeader,
        'chat-app': ChatApp
    }
});