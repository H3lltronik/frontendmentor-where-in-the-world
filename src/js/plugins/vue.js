import Vue from 'vue'

import store from './vuex'
import router from './vue-router'

import { Select, Option, Input, Icon, Loading } from 'element-ui';

import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Loading.directive);

Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)

new Vue({
    el: '#app',
    router,
    store,
    computed: {
        modeClass () {
            return store.getters.GET_DARK_MODE? 'darkTheme':'lightTheme'
        }
    }
});