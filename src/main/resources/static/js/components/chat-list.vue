<template>
    <ul class="collection">
        <li class="collection-item avatar" v-for="chatItem in computedChats">
            <img v-if="chatItem.image" v-bind:src="chatItem.image" alt="" class="circle">
            <i v-else="chatItem.image" class="material-icons circle" v-text="chatItem.test"></i>
            <span class="title" v-text="chatItem.title"></span>
            <p>First Line <br>
                Second Line
            </p>
        </li>
    </ul>
</template>

<script type="text/javascript">
    export default {
        name: 'chat-list',
        data () {
            return {
                chats: []
            }
        },
        computed: {
            computedChats() {
                console.log(this.chats);
                if (!this.chats) {
                    this.chats = [{}];
                }
                let clone = this.chats.slice(0);
                clone.forEach(a => a.test = a.title.substr(0,1));

                return clone;
            }
        },
        created: function () {
            this.fetchChatList();
        },
        methods: {
            fetchChatList () {
                this.$http.get('/api/chat-list').then(response => {
                    this.chats = response.body;
                }, response => {
                    // error callback
                });
            }
        }
    }

    /*
     {
     image: 'http://i1.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg',
     title: 'Group 1',
     recent: 'Hello doge. much wow.'
     }, {
     title: 'Group 3',
     recent: 'Hello doge. much wow.'
     }, {
     image: 'http://i1.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg',
     title: 'Group 2',
     recent: 'Hello doge. much wow.'
     }
     */
</script>
