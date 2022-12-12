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
            <div class="m-3">
                <input type="text" placeholder="search..." name="searchMovie" v-model="searchMovie">
                <button @click="onClick" class="btn"> prova</button>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>