<template>
    <div class="front">
         <div class="front-container">
              <div class="front-home-contain">
              </div>
         </div>
    </div>
</template>
<script>
import $ from 'jquery';
   export default {
        name: 'FrontVue',
        props:{
            msg: String
        },
        data(){
            return{
              checkShow:'',
            }
        },
        methods:{
           hideLogin(){
                $('.left-register').css('background-color', 'white');
                $('.right-login').css('background-color','#f3f4f7');
                this.$router.push('/register');
           },
            hideRegister(){
                $('.left-register').css('background-color', '#f3f4f7');
                $('.right-login').css('background-color','#fff');
                 this.$router.push('/login');
           },
        },
        created(){
            this.checkShow = document.cookie;
        }
   }
</script>
<style scoped>
.front{
    width:100%;
    height:1000px;
    margin:0px;
    padding:0px;
    background-color:#F0F0F0;
}
.front-container{
     width:100%;
    height:auto;
    margin:0px;
    padding-top:50px;
}
.front-container .front-home-contain{
    width:45%;
    height:auto;
    margin-left:auto;
    margin-right:auto;
    padding:0px;
    background:#fff;
    border-radius:8px;

}

</style>