<template>
    <div element-loading-text="Loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
    v-loading.fullscreen.lock="GET_LOADING">
        <header-component></header-component>

        <div class="container">
            <router-link to="/" class="box bordered bordered--smaller details_back">
                <i class="el-icon-back"></i>
                <span>Back</span>
            </router-link>
        </div>

        <div class="details_content container">
            <div class="details_flag bordered" :style="`background-image: url(${GET_COUNTRY.flag})`"></div>

            <div class="">
                <h1>{{GET_COUNTRY.name}}</h1>

                <div class="details_info">
                    <div>
                        <div class="details_info_item">
                            <span><strong>Native Name:</strong></span>
                            <span>{{GET_COUNTRY.nativeName}}</span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Population:</strong></span>
                            <span>{{formattedNumber}}</span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Region:</strong></span>
                            <span>{{GET_COUNTRY.region}}</span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Sub Region:</strong></span>
                            <span>{{GET_COUNTRY.subregion}}</span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Capital:</strong></span>
                            <span>{{GET_COUNTRY.capital}}</span>
                        </div>
                    </div>
                    <div>
                        <div class="details_info_item">
                            <span><strong>Top Level Domain:</strong></span>
                            <span v-for="(domain, index) in GET_COUNTRY.topLevelDomain" :key="index">
                                {{domain}}
                                <span v-if="GET_COUNTRY.topLevelDomain.length != index+1">,</span>
                            </span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Currencies:</strong></span>
                            <span v-for="(currency, index) in GET_COUNTRY.currencies" :key="index">
                                {{currency.name}}
                                <span v-if="GET_COUNTRY.currencies.length != index+1">,</span>
                            </span>
                        </div>
                        <div class="details_info_item">
                            <span><strong>Languajes:</strong></span>
                            <span v-for="(language, index) in GET_COUNTRY.languages" :key="index">
                                {{language.name}}
                                <span v-if="GET_COUNTRY.languages.length != index+1">,</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="details_borders">
                    <span>Border Countries:</span>
                    <div class="details_boxes">
                        <span class="box bordered bordered--smaller"
                        v-for="(border, index) in GET_COUNTRY.borders" :key="index">{{border}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from "../components/header"
import { mapGetters } from 'vuex'

export default {
    components: {
        'header-component': header,
    },
    data () {
        return {

        }
    },
    created () {
        this.$store.dispatch("fetchCountry", this.$route.params.name)
    },
    computed: {
        ...mapGetters([
        'GET_COUNTRY',
        'GET_LOADING'
        ]),
        formattedNumber () {
            return this.GET_COUNTRY.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>