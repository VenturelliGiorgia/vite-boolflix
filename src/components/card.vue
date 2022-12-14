<script>
export default {
    props: {
        movie: {
            type: Object
        },
    },
    data() {
        return {
        };
    },

    methods: {
        getPosterImage(posterPath) {
            if (posterPath == null) {
                return 'https://picsum.photos/300';
            } else {
                return 'https://image.tmdb.org/t/p/w342/' + posterPath;
            }
        },
        getFlag(language) {
            if (language == 'en') {
                return 'https://flagcdn.com/16x12/gb.png';
            } else if (language == 'ja') {
                return 'https://flagcdn.com/16x12/jp.png'
            } else {
                return 'https://flagcdn.com/16x12/' + language + '.png';
            }
        }
    },
};
</script>

<template>
    <div class="card">
        <img class="image" :src="getPosterImage(movie.poster_path)" alt="">
        <div>title: {{ movie.title }}</div>
        <div v-if="movie.name"> original title: {{ movie.name }}</div>
        <div v-else> original title: {{ movie.original_title }}</div>
        <img style="width:20px" :src="getFlag(movie.original_language)" alt="">
        <div>original language: {{ movie.original_language }}</div>
        <div>vote film: {{ movie.vote_average }}</div>
    </div>
</template>

<style scoped>

</style>