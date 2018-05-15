import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

import Consume from './components/custom/src/consume.vue'
import './filter'
import myIcon from './components/custom/icon.vue'
import Hint from './components/common/hint.vue'
import titleMixin from './util/title'

Vue.component(Consume.name,Consume);
Vue.component(myIcon.name,myIcon);
Vue.component(Hint.name,Hint);
Vue.use(require('vue-wechat-title'));
Vue.use(require('./assets/js/fun'));

Vue.mixin(titleMixin)


export function createApp () {

    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}
