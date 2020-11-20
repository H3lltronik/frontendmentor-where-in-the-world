<template>
    <div class="header bordered">
        <div class="header_content container">
            <div class="text-header"><strong>Where in the world?</strong></div>
            <div class="text-elegant cursor-pointer" @click="toggleDarkMode">
                <i class="el-icon-moon" v-if="!GET_DARK_MODE"></i>
                <i class="el-icon-sunny" v-else></i>
                <span>
                    <span v-if="!GET_DARK_MODE">Dark</span> 
                    <span v-else>Light</span> 
                    <span>Mode</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {

        }
    },
    created () {
    },
    methods: {
        toggleDarkMode () {
            this.$store.commit("SET_DARK_MODE", !this.GET_DARK_MODE)
        }
    },
    computed: {
        ...mapGetters([
        'GET_DARK_MODE',
        ])
    }
}
</script>