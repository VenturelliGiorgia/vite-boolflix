<script>
import { store, fetchMovie } from "../store";
import card from './card.vue';
export default {
    components: { card },
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
    <main>
        <div class="container">
            <div class="row g-1">
                <h2>FILM</h2>
                <div class="col-3" v-for="movie in store.movies">
                    <card :movie="movie"></card>
                </div>
                <h2 class="mt-2">SERIE</h2>
                <div class="col-3" v-for="movie in store.series">
                    <card :movie="movie"></card>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
h2 {
    color: white;
}
</style>