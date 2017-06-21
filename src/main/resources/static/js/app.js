import * as ChatHeader from "./components/chat-header.vue";
import * as ChatApp from "./components/chat-app.vue";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});

new Vue({
    el: '.app-container',
    components: {
        'chat-header': ChatHeader,
        'chat-app': ChatApp
    }
});