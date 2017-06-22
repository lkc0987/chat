<template>
    <div class="messages-component card-panel">
        <div class="row">
            <div class="col s12">
                <div v-if="!hasMessages">
                    <h2>Select a chat on the left</h2>
                </div>
                <div v-if="hasMessages">
                    <h2>Messages are here!</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea" v-text="test" :disabled="!hasMessages"></textarea>
                        <label for="textarea1">Textarea</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';
    export default {
        name: 'chat-messages',
        data () {
            return {
                'test': 'test'
            }
        },
        computed: mapState({
            'messages': state => state.currentMessages,
            'hasMessages': state => state.currentMessages.length > 0
        })
    }
</script>

<style scoped>
    .messages-component {
        height: calc(100vh - 80px);
    }
</style>