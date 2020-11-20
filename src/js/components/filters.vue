<template>
    <div class="filters">
        <el-input v-model="search" prefix-icon="el-icon-search" class="filter_input element-input bordered" @input="onChangeSearch"
        placeholder="Search for a country..."></el-input>

        <el-select filterable class="filter_select element-input bordered" v-model="filter" @change="onChangeFilter"
        placeholder="Filter by Region">
            <el-option v-for="(item, index) in GET_REGIONS" :key="index" :label="item" :value="item"></el-option>
        </el-select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            filter: "",
            search: "",
        }
    },
    methods: {
        onChangeFilter (e) {
            this.$store.commit("SET_REGION_FILTER", e)
        },
        onChangeSearch (e) {
            this.$store.dispatch("fetchCountries", e)
        },
    },
    computed: {
        ...mapGetters([
        'GET_REGIONS',
        ])
    }
}
</script>