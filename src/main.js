import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// import FrontVue from './components/FrontVue.vue'
import router from './router'
import store from './store'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import setHeaderToken from './utils/setHeaderToken';
import getCookie from './cookie/getCookie';
// import VueCookies from 'vue-cookies';
import i18n from './i18n'
library.add(fas, far, fab)
dom.watch();
// createApp(App).mount('#app')
const app = createApp(App).use(i18n)
// const front = createApp(FrontVue)
app.use(router);
app.use(store)
app.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/src/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/src/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/src/drivers/router/vue-router.2.x.js'),
 });
app.component("font-awesome-icon", FontAwesomeIcon)
var tokenheader = getCookie('jwtToken');
if(tokenheader){
 setHeaderToken(tokenheader);
}else{
    setHeaderToken(false);
}
app.mount('#app');
// front.mount('#front');
