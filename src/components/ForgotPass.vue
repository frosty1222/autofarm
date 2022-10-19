<template>
<UserSection>
     <div class="form">
              <form @submit.prevent role="form">
                <legend>Đặt Lại Mật Khẩu</legend>
                <div class="form-group">
                    <label for="">Số điện thoại:</label>
                    <input type="text" name="phone" v-model="phone">
                </div>
                 <div class="form-group recap">
                 </div>
                <button type="button" class="button-login" @click="confirmRepass()">Gửi Yêu Cầu</button>
              </form>
          </div>
</UserSection>
</template>
<script>
import UserSection from '../layouts/UserSection';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
components: { 
  UserSection
},
name: 'ForgotPass',
props:{
    msg: String
},
data(){
    return{
        value:'',
        phone:'',
    }
},
methods:{
    gotToRepass(phone){
      this.$router.push('/repass/'+phone)
    },
   async confirmRepass(){
       await axios.post('http://127.0.0.1:8000/api/confirm_repass',{
        phone:this.phone
       }).then(res=>{
             this.message = res.data.message;
            if(this.message == 'accepted'){
                Swal.fire({
                    title:'success',
                    text:this.message,
                    icon:'success'
                })
                this.gotToRepass(this.phone);
            }
        })
        .catch(err=>{
           console.log(err)
        })
    }
},
created(){

}
}
</script>
<style scoped>
form .button-login{
    width:73%;height:50px;margin:30px;background:#6D81A4;font-size:20px;font-weight:500;
    border-radius:7px;border:none;color:#fff;cursor:pointer;
}
form legend{padding-top:50px;padding-bottom:40px;font-size:23px;font-weight:600;text-transform:uppercase;}
.form form{margin-top:30px;width:100%;height:auto;padding:0px;}
form .form-group{
    width:auto;height:27px;display:flex;margin:30px;position: relative;
}
form .form-group.recap{
    width:320px;height:27px;display:flex;margin:auto;position: relative;
}
.form-group label{
    width: 24%;
    text-align: left;
    margin-left: 20px;
}
.form-group input{
    width:58%;height:33px;border:1px solid rgba(197,197,197);
    border-radius:5px;
    }
.form-group.recap .recapcha{
       width:30%;height:37px;border:1px solid rgba(197,197,197);
       border-radius:5px;
}
.form-group.recap button{
        height:40px;border:none;background-color:cyan;color:#fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor:pointer;
    }
</style>