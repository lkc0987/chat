<template>
    <!-- Page Layout here -->
    <div class="row">

        <div class="col s3">
            <!-- Grey navigation panel -->
            <chat-list></chat-list>
        </div>

        <div class="col s9">
            <!-- Teal page content  -->
            <messages></messages>
        </div>

    </div>
</template>

<script type="text/javascript">
    import * as ChatList from './chat-list.vue'
    import * as ChatMessages from './messages.vue'
    export default {
        name: 'chat-app',
        data () {
            return {
                message: 'bolo'
            }
        },
        components: {
            'chat-list': ChatList,
            'messages': ChatMessages
        }
    }
</script>