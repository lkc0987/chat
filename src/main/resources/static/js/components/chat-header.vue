<template>
    <nav>
        <div class="nav-wrapper blue-grey darken-1">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li>
                    <form action="/logout" method="post" class="right">
                        <input type="submit" class="waves-effect waves-light btn-flat" value="logout">
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
        }
    }
</script>