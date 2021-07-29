<template>
    <div>
        <div>
            <h2>{{articleUnique.title}}</h2>
            <hr>
            <p>
                {{articleUnique.body}}
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'post',
    data() {
        return {
            id: this.$route.params.id,
            articleUnique: [],
        }
    },
    mounted() {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
            console.log(response);
            this.articleUnique = response.data;
        })
    }
}
</script>

<style scoped>

</style>
