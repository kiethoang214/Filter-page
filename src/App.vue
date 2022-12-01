<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <FilterPage/>
        <PostList/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FilterPage from './components/FilterPage';
import PostList from './components/PostList';

export default {
  name: 'App',

  components: {
    FilterPage,
    PostList,
  },

  data: () => ({
    //
  }),
};
</script>
