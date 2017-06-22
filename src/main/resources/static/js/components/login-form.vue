<template>
    <div class="login-row row valign-wrapper">
        <div class="col s4 offset-s4">
            <div class="login-form card-panel grey lighten-4">
                <div class="card-content">
                    <h4>Login</h4>
                    <form action="/do-login" method="post">
                        <input type="text" name="username" placeholder="Username">
                        <input type="password" name="password" placeholder="Password">
                        <input type="submit" class="waves-effect waves-light btn deep-orange lighten-1" value="login">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Vue from 'vue';

    export default {
        name: 'login-form',
        data() {
            return {};
        }
    }
</script>

<style scoped>
    .login-row {
        min-height: 100vh;
    }
</style>