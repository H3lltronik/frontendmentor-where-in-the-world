<template>
    <router-link :to="`/details/${data.name}`" class="country bordered">
        <div class="country_img" :style="`background-image: url(${data.flag})`"></div>

        <div class="country_body">
            <h3 class="text-header">{{data.name}}</h3>

            <div class="text-body">
                <span class=""><strong>Population:</strong> </span>
                <span class="">{{formattedPopulation}}</span>
            </div>
            <div class="text-body">
                <span><strong>Region:</strong> </span>
                <span>{{data.region}}</span>
            </div>
            <div class="text-body">
                <span><strong>Capital:</strong> </span>
                <span>{{data.capital}}</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {name: '', population: 1, region: "Default", capital: "Default", flag: "https://restcountries.eu/data/afg.svg"}
            }
        }
    },
    data () {
        return {

        }
    },
    computed: {
        formattedPopulation () {
            return this.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>