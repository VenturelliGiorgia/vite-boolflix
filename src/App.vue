<script>
import { store, fetchMovie } from "./store";
import theHeader from './components/theHeader.vue';
import theMain from './components/theMain.vue';
export default {
  components: { theHeader, theMain },
  data() {
    return {
      store
    };
  },
  methods: {
    onSearch(activeFilter) {
      this.store.filter = activeFilter;
      fetchMovie();
      console.log(activeFilter);
    },
  }
};
</script>

<template>

  <body>
    <theHeader @search="onSearch"></theHeader>
    <main>
      <theMain></theMain>
    </main>
  </body>
</template>

<style scoped>
body {
  background-color: rgb(27 27 27);
  padding-bottom: 3rem;
}
</style>
