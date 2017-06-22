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
    import { mapGetters } from 'vuex';

    export default {
        name: 'chat-list',
        data () {
            return {
            }
        },
        computed: mapGetters([
            'computedChats'
        ]),
    }
</script>

<style lang="scss" scoped>
    $hover-color: #f5f5f5;
    .collection-item {
        cursor: pointer;
        transition: 0.5s ease-in-out all;
        &:hover {
            transition: 0.15s ease-in-out all;
            background: $hover-color;
        }
    }
</style>