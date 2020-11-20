<template>
    <div element-loading-text="Loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
    v-loading.fullscreen.lock="GET_LOADING">
        <header-component></header-component>

        <div class="container">
            <filters-component></filters-component>
        </div>
        <div class="home_grid container">
            <country-component v-for="(item, index) in filteredStates" :key="index" :data="item"></country-component>
        </div>
    </div>
</template>

<script>
import header from "../components/header"
import country from "../components/country"
import filters from "../components/filters"
import { mapGetters } from 'vuex'

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
        this.$store.dispatch("fetchCountries")
    },
    computed: {
        ...mapGetters([
        'GET_STATES',
        'GET_NAME_FILTER',
        'GET_REGION_FILTER',
        'GET_LOADING'
        ]),
        filteredStates () {
            return this.GET_STATES.filter((item, index) => {
                return (this.GET_REGION_FILTER && this.GET_REGION_FILTER != 'All')?
                item.region == this.GET_REGION_FILTER
                :
                item.region
            })
        }
    }
}
</script>