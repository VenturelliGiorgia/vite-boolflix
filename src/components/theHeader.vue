<script>
import { store, fetchMovie } from "../store";
export default {
    data() {
        return {
            store,
            searchMovie: "",
        };
    },
    methods: {
        onClick() {
            console.log("prova");
            this.$emit("search", this.searchMovie);
        }
    }
};
</script>

<template>
    <header class="pt-4 pb-4">
        <nav>
            <div class="container">
                <div class=" d-flex justify-content-between align-items-center">
                    <div class="d-flex ">
                        <div>
                            <img style="width: 200px"
                                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
                        </div>
                        <div class="mt-3">
                            <ul class="d-flex text-lightgrey">
                                <li class="text-white">Home</li>
                                <li>SerieTv</li>
                                <li>Film</li>
                                <li>Originali</li>
                                <li>Aggiunti di recente</li>
                                <li>La mia lista</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input class="rounded-3" @keyup.enter="onClick" type="text" placeholder="search..." name="searchMovie" v-model="searchMovie">
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
li {
    padding-right: 1rem;
    list-style: none;
    color: rgb(201, 201, 201);
}
</style>