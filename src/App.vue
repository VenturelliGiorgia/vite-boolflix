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
  <theHeader @search="onSearch"></theHeader>
  <main>
    <theMain></theMain>
  </main>
</template>

<style scoped>

</style>
