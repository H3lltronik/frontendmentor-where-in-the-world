import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      countries: [],
      filteredCountries: [],
      regionFilter: "",
      nameFilter: "",
      country: {},
      loading: false,
      darkMode: true,
    },
    mutations: {
      SET_STATES (state, payload) {
        state.countries = payload
      },
      SET_FILTERED_STATES (state, payload) {
        state.filteredCountries = payload
      },
      SET_NAME_FILTER (state, payload) {
        state.nameFilter = payload
      },
      SET_REGION_FILTER (state, payload) {
        state.regionFilter = payload
      },
      SET_COUNTRY (state, payload) {
        state.country = payload
      },
      SET_LOADING (state, payload) {
        state.loading = payload
      },
      SET_DARK_MODE (state, payload) {
        state.darkMode = payload
      },
    },
    actions: {
      fetchCountries: ({commit}, name) => {
        let link;
        if (name) {
          link = `https://restcountries.eu/rest/v2/name/${name}`;
        } else {
          link = "https://restcountries.eu/rest/v2/all";
        }
        commit("SET_LOADING", true)
        fetch(link).then(response => response.json()).then(data => {
          if (data.status == 404) {
            commit('SET_STATES', [])
          } else {
            commit('SET_STATES', data)
          }
        }).catch(err => {
          commit('SET_STATES', [])
        }).finally(() => {
          commit("SET_LOADING", false)
        })
      },
      fetchCountry: ({commit}, name) => {
        commit("SET_LOADING", true)
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`).then(response => response.json()).then(data => {
          commit("SET_LOADING", false)
          commit('SET_COUNTRY', data)
        })
      }
    },
    getters: {
      GET_STATES: (state) => {
        return state.countries
      },
      GET_REGIONS: (state) => {
        let set = new Set();
        state.countries.forEach(item => {
          if (item.region.length > 0)
            set.add(item.region)
        })
        set.add('All')
        return set
      },
      GET_STATES_NAMES: (state) => {
        return state.countries.map(item => {
          return item.name
        })
      },
      GET_NAME_FILTER (state) {
        return state.nameFilter
      },
      GET_REGION_FILTER (state) {
        return state.regionFilter
      },
      GET_COUNTRY (state) {
        return state.country[0]
      },
      GET_LOADING (state) {
        return state.loading
      },
      GET_DARK_MODE (state) {
        return state.darkMode
      },
    }
})