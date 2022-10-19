<template>
<UserSection>
    <div class="login">
        <div class="form">
             <div class="title">
                    <div class="left-register" @click="hideLogin()">Đăng ký</div>
                    <div class="right-login"  @click="hideRegister()">Đăng nhập</div>
                </div>
              <form action="#" @submit.prevent role="form">
                
                <div class="alert">
                    <button @click="closeAlert()" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong id="strong">Title</strong> {{message}}
                </div>
                
                <div class="form-group">
                    <label for="">Họ Tên:</label>
                    <input type="text" name="name" v-model="registData.name">
                </div>
                <div class="form-group">
                    <label for="">Số điện thoại:</label>
                    <input type="text" name="phone" v-model="registData.phone">
                </div>
                 <div class="form-group">
                    <label for="">Mật khẩu:</label>
                    <input type="password" name="password" v-model="registData.password">
                </div>
                <div class="form-group">
                    <label for="">Nhập lại mật khẩu:</label>
                    <input type="password" name="confirm_password" v-model="confirm_password">
                </div>
                
                <button  type="button" class="button-login" @click="userRegister()">Đăng ký</button>
              </form>
          </div>
    </div>
 </UserSection>
</template>
<script>
import $ from 'jquery';
import axios from "axios";
import UserSection from '../layouts/UserSection';
import Swal from "sweetalert2";
export default {
        name: 'VueRegister',
        props:{
            msg: String
        },
      components:{
        UserSection,
      },
        data(){
            return{
              message:''+'...',
              registData:{name:null,phone:null,password:null},
              confirm_password:'',
              count:0,
              number:1,
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
           showRePass(){
            this.$router.push('/fgpass');
           },
           userRegister(){
            if(this.confirm_password !=this.registData.password ){
             alert('passwords are not matched ! please try again');
             }else{
                axios.post('http://127.0.0.1:8000/api/register',{
                    name:this.registData.name,
                    phone:this.registData.phone,
                    password:this.registData.password,
                }).then(res=>{
                this.message = res.data.message;
                if(this.message == 'phone already registered'){
                    Swal.fire({
                    title:'Failed !',
                    text:this.message,
                    icon: 'warning',
                   })
                }else{
                 Swal.fire({
                    title: 'success',
                    text:this.message,
                    icon: 'success',
                    })
                    this.$router.push('/login');
                }
             })
             .catch( err=>{
                if(err.message){
                   Swal.fire({
                    title:'Failed !',
                    text:this.message,
                    icon: 'warning',
                   }) 
                  }
               })
             }
           },
           closeAlert(){
             document.getElementById('strong').style.display = 'none';
           }
         },
        created(){
            
        }
   }
</script>
<style scoped>
.clearfix{clear:both;}
.login{width:100%;height:auto;padding:0px;margin:0px;}
.form{width:100%;height:auto;padding:0px;margin:0px;}
.form .title{width:100%;display:flex;height:90px;}
.title .left-register{width:50%;;padding:25px 0px;font-size:22px;font-weight:500;text-transform:uppercase;}
.title .right-login{width:50%;background-color:#F3F4F7;padding:25px 0px;font-size:22px;font-weight:500;text-transform:uppercase; cursor:pointer; }
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
form .button-login{
    width:73%;height:50px;margin:30px;background:#6D81A4;font-size:20px;font-weight:500;
    border-radius:7px;border:none;color:#fff;
}
.alert .close{
   border: none; float: right; margin-top: -20px;color: #fff; background: orange;cursor: pointer; border-radius: 50%;
}
</style>