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
            <h2>film</h2>
            <div class="col-4" v-for="movie in store.movies">
                <div class="card">
                    <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
                    <div>title: {{ movie.title }}</div>
                    <div> original title: {{ movie.original_title }}</div>
                    <div>original language: {{ movie.original_language }}</div>
                    <div>vote film: {{ movie.vote_average }}</div>
                </div>
            </div>
            <h2>Serie</h2>
            <div class="col-4" v-for="serie in store.series">
                <div class="card">
                    <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path" alt="">
                    <div>title: {{ serie.name }}</div>
                    <div> original title: {{ serie.original_name }}</div>
                    <div>original language: {{ serie.original_language }}</div>
                    <div>vote film: {{ serie.vote_average }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>