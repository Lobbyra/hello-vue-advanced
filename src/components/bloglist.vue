<template>
    <div>
        <h1>Les articles de blog</h1>
        <hr>
        <ul>
            <li v-bind:key="index" v-for="(article, index) in posts">
                <div class="card m-2">
                    <router-link :to="`blogpost/${index+1}`" >
                        <h3>{{article.title}}</h3>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'bloglist',
    data() {
        return {
            posts: [],
        }
    },
    created() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            for(const blogPost of response.data) {
                this.posts.push(blogPost);
            }
        })
    }
}
</script>

<style scoped>

</style>
