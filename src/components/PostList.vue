<template>
    <v-container class="my-2">
        <v-row v-for="(post, index) in postListShow" :key="index">
            <Post :post="post"></Post>
        </v-row>
    </v-container>
</template>

<script>
import { get } from 'vuex-pathify';
import Post from './Post';

export default {
    name: 'PostList',
    components: {
        Post
    },
    computed: {
        ...get(['postListShow']),
    },
}
</script>