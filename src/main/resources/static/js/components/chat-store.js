import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
    state: {
        chatList: [],
        currentMessages: []
    },
    actions: {
        LOAD_CHAT_LIST: function ({commit}) {
            Vue.http.get('/api/chat-list').then(response => {
                commit('SET_CHAT_LIST', { list: response.data });
            }, response => {
                // error callback
            });
        }
    },
    mutations: {
        SET_CHAT_LIST (state, { list }) {
            state.chatList = list
        },
        increment (state) {
            state.count++
        }
    },
    getters: {
        computedChats: state => {
            let clone = JSON.parse(JSON.stringify(state.chatList));
            clone.forEach(chat => chat.test = chat.title.substring(0, 1));
            return clone;
        }
    }
});

export default store;