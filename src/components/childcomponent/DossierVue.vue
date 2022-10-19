<template>
<PoolView>
    <div class="block">
        <div class="main-container-block">
              <legend>Hồ sơ</legend>
             <div class="dossier-container">
                 <div class="inner-dossier">
                     <ul>
                        <li>
                            <span class="name">Họ tên*</span>
                            <input type="text" placeholder="nhập họ tên">
                        </li>
                        <li>
                            <span class="name">Tên tài khoản</span>
                            <input type="text" placeholder="nhập tên tài khoản">
                        </li>
                        <li>
                            <span class="name">Token</span>
                            <input type="text" placeholder="nhập token">
                        </li>
                        <li>
                            <span class="name">Email*</span>
                            <input type="text" placeholder="nhập email">
                        </li>
                        <li>
                            <span class="name">Link FB*</span>
                            <input type="text" placeholder="nhập link facebook">
                        </li>
                        <li>
                            <span class="name">Tên ngân hàng*</span>
                            <input type="text" placeholder="nhập tên tài khoản ngân hàng">
                        </li>
                        <li>
                            <span class="name">Số tài khoản*</span>
                            <input type="text" placeholder="tên số tài khoản">
                        </li>
                        <li>
                            <span class="name">Chủ tài khoản*</span>
                            <input type="text" placeholder="tên chủ tài khoản">
                        </li>
                        <li>
                            <span class="name">Link mời</span>
                            <input type="text" placeholder="nhập link mời">
                        </li>
                        <li>
                            <span class="name">QRCode</span>
                            <img src="../../../public/images/Qrcodeprofile.jpg" alt="">
                        </li>
                        <li>
                             <span class="name">Action facebook</span>
                             <input type="text" placeholder="Chọn Action" @click="showActionFaceBook()">
                             <div class="unner-list1"> 
                                <div class="inner-under-list1">
                                     <span class="option-fb active" @click="forcusActionFaceBook()">Chọn Action</span>
                                     <span  class="option-fb" @click="forcusActionFaceBook()">ACTION FACEBOOK</span>
                                     <span  class="option-fb" @click="forcusActionFaceBook()">FBLikeSubMoney</span>
                                     <span  class="option-fb" @click="forcusActionFaceBook()">tinh test</span>
                                     <span  class="option-fb" @click="forcusActionFaceBook()">Bùi Văn Lực</span>
                                     <span  class="option-fb" @click="forcusActionFaceBook()">Web</span>
                                </div>
                             </div>
                        </li>
                        <li>
                             <span class="name">Action instagram</span>
                             <input type="text" placeholder="Chọn Action" @click="showActionInstagram()">
                              <div class="unner-list2">
                                <div class="inner-under-list2">
                                      <span class="option-fb active" @click="forcusActionInstagram()">Chọn Action</span>
                                      <span  class="option-fb" @click="forcusActionInstagram()">ACTION Instagram</span>
                                       <span  class="option-fb" @click="forcusActionInstagram()">InsLikeSubMoney</span>
                                </div>
                             </div>
                        </li>
                        <li>
                             <span class="name">Action youtube</span>
                             <input type="text" placeholder="Chọn Action" @click="showActionYoutube()" >
                              <div class="unner-list3">
                                <div class="inner-under-list3">
                                     <span class="option-fb active" @click=" forcusActionYoutube()">Chọn Action</span>
                                      <span  class="option-fb"  @click=" forcusActionYoutube()">ACTION YOUTUBE</span>
                                      <span  class="option-fb"  @click=" forcusActionYoutube()">YouTubeLikeSubMoney</span>
                                       <span  class="option-fb"  @click=" forcusActionYoutube()">TikTokLikeSubMoney</span>
                                </div>
                             </div>
                        </li>
                        <li>
                            <span class="name">FacebookDeCheckpoint</span>
                            <svg id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                        <li>
                             <span class="name">FacebookLikeSubMoney</span>
                            <svg id="green-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </li>
                        <li>
                            <span class="name">InstargramMoney</span>
                            <svg id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                        <li>
                             <span class="name">YoutubeMoney</span>
                             <svg  id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                        <li>
                             <span class="name">TikTokMoney</span>
                             <svg id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                        <li>
                             <span class="name">ShopeeMoney</span>
                             <svg id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                        <li>
                             <span class="name">LazadaMoney</span>
                             <svg  id="red-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </li>
                     </ul>
                     <div class="clearfix"></div>
                      <div class="button-dossier">
                            <button class="button-left" @click="showModel()">Đổi mật khẩu</button>
                            <button class="button-right">Cập nhật lại</button>
                        </div>
                 </div>
             </div>
        </div>
        <div class="modal">
              <div class="inner-child-model" @click="closeModel()">
                   <legend>Đổi mật khẩu <i class="fa fa-close"></i></legend>
                   <form @submit.prevent>
                        <legend>ĐẶT LẠI MẬT KHẨU</legend>
                        <div class="form-group">
                             <label for="">Nhập mật khẩu:</label>
                             <input type="text">
                        </div>
                         <div class="form-group">
                             <label for="">Mật khẩu mới:</label>
                             <input type="text">
                        </div>
                         <div class="form-group">
                             <label for="">Xác nhận MK:</label>
                             <input type="text">
                        </div>
                        <button @click="closeModel()">ĐẶT LẠI</button>
                   </form>
              </div>
        </div>
    </div>
</PoolView>
</template>
<script>
import $ from 'jquery';
import PoolView from '../../layouts/PoolView';
 export default{
    props:{
    msg: String
  },
  components:{
   PoolView,
  },
  data(){
    return {

    }
  },
  methods:{
     showActionFaceBook(){
         $('.unner-list1').slideToggle();
         $('.unner-list2').css('display', 'none');
         $('.unner-list3').css('display', 'none');
     },
     showActionInstagram(){
         $('.unner-list1').css('display', 'none');
         $('.unner-list2').slideToggle();
         $('.unner-list3').css('display', 'none');
     },
     showActionYoutube(){
        $('.unner-list1').css('display', 'none');
         $('.unner-list2').css('display', 'none');
         $('.unner-list3').slideToggle();
     },
     forcusActionFaceBook(){
           $('.option-fb').removeClass("active");
         $('.option-fb').on('click',function(){
            $(this).addClass("active");
         })
     },
     forcusActionYoutube(){
         $('.option-fb').removeClass("active");
         $('.option-fb').on('click',function(){
            $(this).addClass("active");
         })
     },
     forcusActionInstagram(){
         $('.option-fb').removeClass("active");
         $('.option-fb').on('click',function(){
            $(this).addClass("active");
         })
     },
     showModel(){
        $('.modal').fadeIn(3000);
        //   setTimeout(function(){
        //     $('.modal').fadeOut('slow');
        //   },6000);
     },
     closeModel(){
         var a = document.getElementsByClassName("modal");
         a[0].style.display = "none";
         console.log(a);
     }
  },
  created(){

  }
 }
</script>
<style scoped>

@import '../../../public/css/childcomponent.css';
.inner-dossier ul li .svg{}
.inner-dossier ul li input{
 width: 65%; padding: 10px 5px;border: 1px solid darkcyan; outline: none;border-radius: 4px;
}
.inner-dossier ul li input::placeholder{padding-left:5px;}
.inner-dossier ul li #red-svg{color:red;}
.inner-dossier ul li #green-svg{color:green;}
.button-dossier{
        width: 100%;
        display: block;
        margin-bottom: 43px;
}
.button-dossier .button-left{
        float: left;
        border: none;
        padding: 8px 20px;
        background-color: #0671FF;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
}
.button-dossier .button-left:hover{background-color:#1E3C72;}
.button-dossier .button-right:hover{background-color:#1E3C72;}
.button-dossier .button-right{
    float:right;
    border: none;
    padding: 8px 20px;
    background-color: #0671FF;
    color: #fff;
    border-radius: 4px;
    cursor: pointer
}
.modal{
 display:none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  bottom:100px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal .inner-child-model{
    width:570px; height:400px;background-color:#fff;
    margin-left:auto; margin-right:auto;
    margin-top:0px;
    border-radius:7px;
}
.inner-child-model legend{ width: 90%; text-align: left;padding: 17px 15px;position:relative;
}
.inner-child-model legend .fa-xmark{
 position: absolute;  right: 0px;font-size: 21px; font-weight: 300;opacity: 0.3;
}
.inner-child-model legend .fa-xmark:hover{opacity:1;cursor: pointer;}
.inner-child-model form legend{
    text-align: center;
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 30px;
}
.inner-child-model form .form-group{
    display:flex;
    margin: 10px 0px;
    height: auto;
}
.inner-child-model form .form-group label{
   width:30%; padding: 5px 0px; font-size: 15px;font-weight: 500;
}
.inner-child-model form{ 
    width:400px;
    margin:auto;
}
.inner-child-model form .form-group input{
 width: 70%; padding: 10px 5px; outline: none; border: 1px solid #666; border-radius: 5px;
}
.inner-child-model form button{
    width:100%;
    padding:10px 0px;
    border-radius:5px;
    background-color:#0671FF;
    color:#fff;
    border:1px solid #666;
    outline:none;
    cursor:pointer;
    margin-top:50px;
}
</style>