import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    movies: [],
    series: [],
    filter: null,
});

export function fetchMovie() {
    const rootUrlMovie = "https://api.themoviedb.org/3/search/movie";

    axios.get(rootUrlMovie, {
        params: {
            api_key: "0203a7ace0a3c25fc838b7737ac551ce",
            query: store.filter,
        },
    })
        .then(resp => {
            console.log("movie: ", resp.data.results);
            store.movies = resp.data.results;
        });

    const rootUrlSeries = "https://api.themoviedb.org/3/search/tv";
    axios.get(rootUrlSeries, {
        params: {
            api_key: "0203a7ace0a3c25fc838b7737ac551ce",
            query: store.filter,
        },
    })
        .then(resp => {
            console.log("serie: ", resp.data.results);
            store.series = resp.data.results;
        });

}