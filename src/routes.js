import accueil from "./components/accueil.vue";
import bloglist from "./components/bloglist.vue";
import page2 from "./components/page2.vue";
import post from "./components/post.vue";

export default [
    {path: '/', component: accueil},
    {path: '/bloglist', component: bloglist},
    {path: '/page2', component: page2},
    {path: '/blogpost/:id', component: post},
]
