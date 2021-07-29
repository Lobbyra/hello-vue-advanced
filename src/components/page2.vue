<template>
    <div>
        <h1>Voici page2</h1>
        <div @click="goDebut" class="btn-warning">retour au debut</div>
    </div>
</template>

<script>
export default {
    name: 'page2',
    data() {
        return {
            
        }
    },
    methods: {
        goDebut: function(){
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>

</style>
