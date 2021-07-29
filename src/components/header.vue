<template>
    <div>
        <ul class="nav">
            <li class="btn btn-primary btn-nav"><router-link to="/" exact>Accueil</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/bloglist">Bloglist</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page2">Page2</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style scoped>

.btn-nav a {
    color: #fff;
}

.btn-nav a:hover {
    color: #fff;
}

</style>
