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
        getPosterImage(posterPath) { //stampa le copertine
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
            } else if (language == 'fa') {
                return 'https://flagcdn.com/16x12/ir.png'
            } else {
                return 'https://flagcdn.com/16x12/' + language + '.png';
            }
        },

        getTitleMovie(title, original_title) { //se il titolo e il titolo originale sono sono uguali ne stampa solo uno
            if (title === original_title) {
                return
            } else {
                return "original title:" + original_title;
            }
        },
        getTitleSerie(name, original_name) { //se il titolo e il titolo originale sono sono uguali ne stampa solo uno
            if (name === original_name) {
                return
            } else {
                return "original title:" + original_name;
            }
        },
        getStars(vote_average) {
            const toReturn = [];
            const vote = Math.ceil(vote_average / 2);
            console.log(vote);
            for (let i = 0; i < 5; i++) {
                const toPush = i < vote;
                toReturn.push(toPush);
            }

            return toReturn;
        }


    },
    computed: {

    }
};
</script>

<template>
    <div class="card position-relative">
        <img class="image" :src="getPosterImage(movie.poster_path)" alt="">
        <div class="card-hover">
            <div v-if="movie.name">title: {{ movie.name }}</div>
            <div v-else>title: {{ movie.title }}</div>
            <div>{{ getTitleSerie(movie.name, movie.original_name) }}</div>
            <div> {{ getTitleMovie(movie.title, movie.original_title) }}</div>
            <span>original language:
                <img style="width:20px" :src="getFlag(movie.original_language)" alt="">
            </span>
            <div class="star">vote: <i class=" fa-star" v-for="star in getStars(movie.vote_average)"
                    :class="{ 'fa': star === true, 'fa-regular': !star }"></i></div>
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