<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- {{message}} -->
  <HelloWorld />
  <!-- <component :is="activeTab" /> -->
</template>

<script>
// import { useI18n } from "vue-i18n";
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import getCookie from './cookie/getCookie';
import store from './store';
export default {
  name: 'App',
  components: {
    HelloWorld,
    // FrontVue,
  },
  data(){
    return {
      user:null,
      check:'ok'
    }
  },
  methods:{
    //  getApi(){
    //     this.check = getCookie('check');
    //  },
    getValueFromClicked(item){
      this.check = item;
    }
  },
  created(){
    axios.post('http://127.0.0.1:8000/api/userinfo/'+getCookie('jwtToken'))
     .then(res=>{
          this.user = res.data.data;
     });
    //  console.log(this.$store.state.userIsAuthorized)
     
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>