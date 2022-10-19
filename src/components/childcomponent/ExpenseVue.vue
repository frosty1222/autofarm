<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <li class="leftword">Chi phí</li>
                     <li class="leftword2">Thống kê thiết bị</li>
                     <div class="clearfix"></div>
                     <div class="list-action">
                         <label class="pick-day">chọn ngày</label>
                         <br>
                          <input type="date"  value="today" >
                     </div>
                </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th>STT</th>
                                <th>ANDROIDID</th>
                                <th>TỔNG CLONE</th>
                                <th>TỔNG ACTION</th>
                                <th>TỔNG TIỀN</th>
                                <th title="FB_FOLLOW">FB_F</th>
                                <th title="FB_LIKE PAGE">FB_LP</th>
                                <th title="FaceBookLikeVipService">FB_VS</th>
                                <th title="FB_Buff Like">FB_BL</th>
                                <th title="FB_Buff Comment">FB_BC</th>
                                <th title="FB Comment">FB_VC</th>
                                <th title="AF Feed">AF_FD</th>
                                <th title="AF FeedLikes">AF_FL</th>
                                <th title="AF Watch">AF_W</th>
                                <th title="AF Watch Likes">AF_WL</th>
                                <th title="AF Page Feed">AF_PF</th>
                                <th title="AF group Feed">AF_GF</th>
                                <th title="AF Group like">AF_GL</th>
                                <th title="AF joinGroupLike">AF_JG</th>
                                <th title="AF Friend Feed">AF_FF</th>
                                <th title="AF Friend Like">AF_FL</th>
                                <th title="AF add Friend Suggest">AF_AFS</th>
                                <th title="AF add FriendUID">AF_AFID</th>
                                <th title="AF Confirm Friend">AF_CF</th>
                                <th title="AF Share Now">AF_SN</th>	
                                <th title="AF ShareGroup">AF_SG</th>
                                <th title="AF PostStatusImage">AF_PSI</th>
                                <th title="AF Follow">AF_FW</th>
                                <th title="AF Comment Tag">AF_CT</th>
                                <th title="AF Search">AF_S</th>
                                <th title="AF Feed View">AF_FV</th>
                                <th title="AF Subscribe">AF_SUB</th>
                                <th title="AF Comment">AF_C</th>
                                <th title="AF Like">AF_L</th>
                                <th title="AF DisLike">AF_DL</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!-- <td><button class="btn btn-danger"  @click="openModel()">xóa</button></td> -->
                              </tr>
                            </tbody>
                         </table>
                      </div>
                      <div class="clearfix"></div>
                  </div>
              </div>
          </div>
          <div class="modal-notify">
                <div class="inner-mode-content">
                    <div class="main-model-heading"  @click="closeModel()">
                          <legend>Xác nhận</legend><svg width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(66, 82, 110);"><g><path d="M18 6.41L16.59 5L11 10.59L5.41 5L4 6.41L9.59 12L4 17.59L5.41 19L11 13.41L16.59 19L18 17.59L12.41 12L18 6.41Z" fill="black" fill-opacity="0.54"></path></g></svg>
                    </div>
                    <div class="under-heading-content">
                       <span>Bạn chắc chắn muốn xóa <b>023423423?</b></span>
                       <br/>
                       <div class="button"><button class="button-left">Hủy bỏ</button> <button class="button-right">Xóa</button></div>
                    </div>
                </div>
          </div>
    </div>
</PoolView>
</template>
<script>
import $ from "jquery";
import PoolView from '../../layouts/PoolView';
// import ApiPool from '../../ApiPool';
// import axios from "axios";
export default {
  name: 'AllVue',
  props:{
    msg: String
  },
  components:{
  PoolView,
  },
  data(){
     return {
         stt:1,
         newData:'',
         newValue:[],
         today:''
     }
  },
  methods:{
     openModel(){
        $('.modal-notify').show();
     },
     closeModel(){
        $('.modal-notify').hide();
     },
     changeIconColor(){
        $('.icon').removeClass("active");
        $('.icon').on('click',function(){
            $(this).addClass("active");
       })
     },
     getDate(){
        var today = new Date();

         var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
         this.today = date;
     }
  },
  created(){
    this.getDate();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
@import '../../../public/css/clone.css';
a{color:#fff;}
.circle-cross{color:red;cursor:pointer;}
.devide-heading{
        height: auto;
}
.inner-all .devide-heading .left-heading-word{
 font-size: 20px;  width: 151px; text-align: left; float: left;
}
.devide-heading .right-legend{
    text-align: center; width: 113px; background-color: #4E89FF; padding: 7px 9px;font-size: 18px; color: #fff; border-radius: 4px; cursor: pointer;height: 29px; float: right;
}
.btn-success{
 color: #fff; padding: 5px 5px; margin: 5px; background-color: #4E89FF; border: none;cursor: pointer; border-radius: 4px;
}
#qrcode{
    height:42px; width:42px;
}
#Layer_1{
    position:absolute;
}
.table tbody tr td {
        border-bottom: 1px solid #edf2f9;
        padding: 21px !important;
        position:relative;
}
.right-avenue{
    float:right; font-size:20px;
}
.list-action{display:block;}
.list-action .pick-day{font-size: 15px;margin: 5px 0px;}
.list-action input{
border: none; border-bottom: 2px solid; width: 148px; background: transparent; height: 34px;
}
.leftword{
    text-align: left;
    font-size: 30px;
}
.leftword2{
text-align: left;
font-size: 22px;
}
</style>
