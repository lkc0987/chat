<template>
    <nav>
        <div class="nav-wrapper grey darken-4">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <!--<li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>-->
                <li>
                    <a href="#" @click="logout"><i class="material-icons">lock</i></a>
                    <form ref="logout" action="/logout" method="post" class="right">
                    </form>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script type="text/javascript">
    export default {
        name: 'chat-header',
        data() {
            return {
                message: 'Hello!'
            }
        },
        methods: {
            logout () {
                this.$refs.logout.submit();
            }
        }
    }
</script>