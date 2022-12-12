<script>
import { store, fetchMovie } from "../store";
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    created() {
        fetchMovie()
    }
};
</script>

<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-4" v-for="movie in store.movies">
                <div class="card">
                    <div> original title: {{ movie.original_title }}</div>
                    <div>title: {{ movie.title }}</div>
                    <div>original language: {{ movie.original_language }}</div>
                    <div>vote film: {{ movie.vote_average }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>