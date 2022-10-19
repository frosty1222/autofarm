<template>
<UserSection>
    <div class="login">
          <div class="form">
             <div class="title">
                    <div class="left-register" @click="hideLogin()">Đăng ký</div>
                    <div class="right-login"  @click="hideRegister()">Đăng nhập</div>
                </div>
              <form @submit.prevent role="form">
                <div class="form-group">
                    <label for="">Số điện thoại:</label>
                    <input type="phone" name="phone" v-model="phone">
                </div>
                 <div class="form-group">
                    <label for="">Mật khẩu:</label>
                    <input type="password" name="password" v-model="password">
                    <div class="forgot-pass" @click="showRePass()">Quyên mật khẩu ?</div>
                </div>
                <button type="button" class="button-login" @click="userLogin()">Đăng Nhập</button>
              </form>
          </div>
    </div>
</UserSection>
</template>
<script>
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';
import store from '../store';
import setCookie from '../cookie/setCookie';
import UserSection from '../layouts/UserSection';
import setHeaderToken from '../utils/setHeaderToken';
// import setCookie from '../cookie/setCookie';
// import getCookie from '../cookie/getCookie';
export default {
name: 'VueLogin',
props:{
    msg: String,
},
components:{
UserSection,
},
data(){
    return{
        message:'',
        phone:'',
        password:'',
        success:false,
    }
},
mounted(){
},
watch:{
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
    showRePass(){
    this.$router.push('/fgpass');
    },
    async userLogin(){
       await axios.post('http://127.0.0.1:8000/api/login',{
        phone:this.phone,
        password:this.password,
    }).then(res=>{
                this.message = res.data.message;
                this.success = res.data.success;
                if(this.success == true){
                    Swal.fire({
                    title: 'success',
                    text:this.message,
                    icon: 'success',
                    });
                   console.log('you are logged in !')
                  setCookie('jwtToken',res.data.token);
                  setHeaderToken(res.data.token);
                  window.location.href ='/';
                }else{
                    Swal.fire({
                    title: 'failed !',
                    text:this.message,
                    icon: 'warning',
                    });
                    console.log(res.data.password)
                }
        })
        .catch(err=>{
                console.log(err.message)
            if(err.message){
                Swal.fire({
                title: 'Failed !',
                text:'login failed !',
                icon: 'warning',
                })
            }
        })
    }
},
created(){
    // console.log(store.state.userIsAuthorized);
    // console.log(this.$store.state.check)
}
   }
</script>
<style scoped>
.clearfix{clear:both;}
.login{width:100%;height:auto;padding:0px;margin:0px;}
.form{width:100%;height:auto;padding:0px;margin:0px;}
.form .title{width:100%;display:flex;height:90px;}
.title .left-register{width:50%;background-color:#F3F4F7;padding:25px 0px;font-size:22px;font-weight:500;text-transform:uppercase;}
.title .right-login{width:50%;padding:25px 0px;font-size:22px;font-weight:500;text-transform:uppercase; cursor:pointer; }
.form form{margin-top:30px;width:100%;height:auto;padding:0px;}
form .form-group{
    width:auto;height:27px;display:flex;margin:30px;position: relative;
}
.form-group label{
         width: 30%;
        text-align: left;
        margin-left: 20px;
}
.form-group input{
    width:58%;height:33px;border:1px solid rgba(197,197,197);
    border-radius:5px;
    }
.form-group .forgot-pass{position:absolute;right:55px;top:50px;font-size:14px;cursor:pointer;}
form button{
    width:73%;height:50px;margin:30px;background:#6D81A4;font-size:20px;font-weight:500;
    border-radius:7px;border:none;color:#fff;cursor: pointer;
}
</style>