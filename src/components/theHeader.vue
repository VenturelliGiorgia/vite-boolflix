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
    <header>
        <nav>
            <div class="container">
                <div class="my-3 d-flex justify-content-between">
                    <div>
                        <img style="width: 200px" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
                    </div>
                    <div>
                        <input type="text" placeholder="search..." name="searchMovie" v-model="searchMovie">
                        <button @click="onClick" class="btn"> cerca</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>