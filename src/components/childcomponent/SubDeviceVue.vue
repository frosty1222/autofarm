<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <span class="left-heading-word">Thống kê thiết bị</span>
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
                                <th>DEVICE ID</th>
                                <th>CLONE</th>
                                <th>ACTION</th>
                                <th title="TOTAL PRICE">$</th>
                                <th title="LIKE PAGE">LP</th>
                                <th title="FOLLOW">FL</th>
                                <th title="BUFF LIKE">BF</th>
                                <th title="BUFF COMMENT">BM</th>
                                <th title="VIP LIKE">VL</th>
                                <th title="VIP LIKE NEW">VL_N</th>
                                <th title="VIP COMMENT">VC</th>
                                <th title="LIKE PAGE WARRANTY">LP_W</th>
                                <th title="FOLLOW WARRANTY">F_W</th>
                                <th title="FOLLOW LOW">F_L</th>
                                <th title="LIKE PAGE LOW">LP_L</th>
                                <th>THỜI GIAN</th>
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
// import ApiPool from '../../ApiPool';
// import axios from "axios";
import PoolView from '../../layouts/PoolView';
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
</style>
