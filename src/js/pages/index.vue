<template>
    <div>
        <header-component></header-component>

        <filters-component></filters-component>

        <div class="home_grid container">
            <country-component v-for="(item, index) in 10" :key="index"></country-component>
        </div>
    </div>
</template>

<script>
import header from "../components/header"
import country from "../components/country"
import filters from "../components/filters"

export default {
    components: {
        'header-component': header,
        'country-component': country,
        'filters-component': filters,
    },
    data () {
        return {

        }
    },
    created () {
    }
}
</script>