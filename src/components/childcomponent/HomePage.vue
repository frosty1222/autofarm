<template>
<PoolView>
    <div class="homepage">
      <!-- <span class="popup"><img src="../../../public/images/correct.png" alt="" width="35" height="35">Thêm thành công</span> -->
         <div class="rules">
              <div class="main-rules">
                   <legend>quy định</legend>
                   <p>
                        Hệ thống của chúng tôi cung cấp nhiều cấp độ nạp tiền khác nhau để giúp khách hàng trải nghiệm hệ thống
                        <br/>
                        Để đảm bảo chất lượng trải nghiệm, chúng tôi có phiên bản miễn phí (có tính năng tương đương) cho khách hàng sử dụng
                        <br/>
                        Chúng tôi không có chính sách HOÀN TIỀN nên bạn nên cân nhắc trải nghiệm phiên bản miễn phí trước khi gửi tiền
                        Trân trọng!
                   </p>
              </div>
              <div class="clearfix"></div>
              <div class="recharge-container">
                <legend>Nạp Tiền</legend>
                   <ul class="ul-recharge">
                        <li>
                            <div class="inner-li">
                                 <div class="li-top">
                                    <div class="left-img">
                                        <img src="../../../public/images/walletr.png" alt="">
                                    </div>
                                    <div class="right-price">
                                        <p>Nạp tiền</p>
                                        <span>50,000 VNĐ</span>
                                    </div>
                                    </div>
                                
                                    <div class="under-but">
                                         <span class="recharge-link" @click="getData()">Nạp tiền ngay</span>
                                    </div>
                                    <i class="discount-tag">+0%</i>
                                </div>
                        </li>
                   </ul>
              </div>
              <div class="clearfix"></div>
              <div class="earn-container">
               <legend>Kiếm Tiền</legend>
                 <div class="child-earn">
                      <ul class="ul-recharge">
                        <li>
                            <div class="inner-li">
                                 <div class="li-top">
                                    <div class="left-img">
                                        <img src="../../../public/images/walletr.png" alt="">
                                    </div>
                                    <div class="right-price">
                                        <p>Nạp tiền</p>
                                        <span>50,000 VNĐ</span>
                                    </div>
                                    </div>
                                    <div class="under-but">
                                         <span class="recharge-link" @click="getData()">Nạp tiền ngay</span>
                                    </div>
                                    <i class="discount-tag">+0%</i>
                                </div>
                        </li>
                   </ul>
                    <ul class="ul-recharge">
                        <li>
                            <div class="inner-li">
                                 <div class="li-top">
                                    <div class="left-img">
                                        <img src="../../../public/images/walletr.png" alt="">
                                    </div>
                                    <div class="right-price">
                                        <p>Nạp tiền</p>
                                        <span>50,000 VNĐ</span>
                                    </div>
                                    </div>
                                
                                    <div class="under-but" >
                                        <span class="recharge-link" @click="getData()">Nạp tiền ngay</span>
                                    </div>
                                    <i class="discount-tag">+0%</i>
                                </div>
                        </li>
                   </ul>
                 </div>
              </div>
              <div class="clearfix"></div>
              <div class="dossier">
                <legend>Hồ Sơ</legend>
                <div class="list-person-infor">
                     <ul>
                         <li>
                              <span class="left-list-text">
                                   Họ tên
                              </span>
                              <span class="right-list-icon">
                                   Bùi Văn Lực
                              </span>
                         </li>
                         <li>
                               <span class="left-list-text">
                                   Tên tài khoản
                               </span>
                              <span class="right-list-icon">
                                   0936456113
                              </span>
                         </li>
                         <li>
                               <span class="left-list-text">
                                   Token
                               </span>
                              <span class="right-list-icon">
                                   7111115551
                              </span>
                         </li>
                         <li>
                               <span class="left-list-text">
                                   FacebookLikeSubMoney
                               </span>
                              <span class="right-list-icon green">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                              </span>
                         </li>
                         <li>
                               <span class="left-list-text">
                                   InstargramMoney
                               </span>
                              <span class="right-list-icon red">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                              </span>
                         </li>
                         <li>
                               <span class="left-list-text">
                                   YoutubeMoney
                               </span>
                              <span class="right-list-icon red">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                              </span>
                         </li>
                     </ul>
                </div>
                <div class="clearfix"></div>
                <div class="download">
                    <legend>tải xuống</legend>
                    <ul>
                         <li>
                              <span class="d-right-name">
                                   Download app autofarmer
                              </span>
                              <span class="d-left-link">
                                   <a href="https://bit.ly/3I8b34y">https://bit.ly/3I8b34y</a>
                              </span>
                         </li>
                         <li>
                             <span class="d-right-name">
                              QRCode
                             </span>
                             <span class="d-left-link"></span>
                         </li>
                    </ul>
                </div>
              </div>
         </div>
    </div>
</PoolView>
</template>
<script>
import $ from "jquery";
// import axios from 'axios';
import PoolView from '../../layouts/PoolView';
// import store from '../../store';
export default {
  name: 'HomePage',
  props:{
    msg: String
  },
  components:{
     PoolView,
  },
  data(){
     return {
          redOne:'red',
          success:'',
          addData:{table:'recharge',money:500000,},
          user:null,
     }
  },
  methods:{
      getData(){
          this.$router.push('/bill')
          this.reCharge()
      },
       reCharge(){
       $('.popup').show('slow').delay(3000);
        setTimeout(function(){
            $('.popup').fadeOut('slow');
        },3000);
    }, 
  },
  created(){
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
/* .popup {
   display:none;position:fixed;height:20px;padding: 17px 60px;background-color:#fff;border-radius:5px;top:5px;right:100px;z-index:999;color:#666;box-shadow:0px 0px 1px 0.1px rgb(197,197,197);top:5px;right:0px;
}
.popup img{
  position: absolute;left: 0px; top: 0px;background-color: #37B487; padding: 9px;color: #ffF;opacity: 0.7;
} */
</style>
