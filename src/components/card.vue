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
            } else if (language == 'ko') {
                return 'https://flagcdn.com/16x12/kr.png'
            } else if (language == 'el') {
                return 'https://flagcdn.com/16x12/gr.png'
            } else if (language == 'zh') {
                return 'https://flagcdn.com/16x12/cn.png'
            } else {
                return 'https://flagcdn.com/16x12/' + language + '.png';
            }
        }
    },
};
</script>

<template>
    <div class="card position-relative">
        <img class="image" :src="getPosterImage(movie.poster_path)" alt="">
        <div class="card-hover">
            <div>title: {{ movie.title }}</div>
            <div v-if="movie.name"> original title: {{ movie.name }}</div>
            <div v-else> original title: {{ movie.original_title }}</div>
            <img style="width:20px" :src="getFlag(movie.original_language)" alt="">
            <div>original language: {{ movie.original_language }}</div>
            <div>vote film: {{ movie.vote_average }}</div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: rgb(27 27 27);
    border: none;
}

.image:hover {
    opacity: 0;
}

.image {
    height: 400px;
    object-fit: cover;
    z-index: 2;

}

.card-hover {
    position: absolute;
    top: 100px;
    color: white;
}
</style>