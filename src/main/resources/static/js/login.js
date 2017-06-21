Vue.component('login-form', {
    template: `
        <div class="login-row row valign-wrapper">
            <div class="col s4 offset-s4">
                <div class="login-form card-panel hoverable">
                    <h4>Login</h4>
                    <form action="/do-login" method="post">
                        <input type="text" name="username" placeholder="Username">
                        <input type="password" name="password" placeholder="Password">
                        <input type="submit" class="waves-effect waves-light btn" value="login">
                    </form>
                </div>            
            </div>
        </div>
    `
});

new Vue({
    el: '.container'
});