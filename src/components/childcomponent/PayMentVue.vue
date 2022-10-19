<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <span class="left-heading-word">Thanh toán</span>
                </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th>STT</th>
                                <th>NGÀY</th>
                                <th>SỐ TIỀN</th>
                                <th>TÌNH TRẠNG</th>
                                <th>NGÀY THANH TOÁN</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>17/03/2022 00:00:00</td>
                                <td>46</td>
                                <td>unpaid</td>
                                <td>17/03/2022</td>
                              </tr>
                            </tbody>
                         </table>
                      </div>
                      <div class="clearfix"></div>
                         <!-- <div class="sub-list-bottom">
                          <div class="inner-sub-list-bottom">
                             <div class="left-list">
                                    <div name="" id="input" class="select" required="required">
                                        <span class="selected" @click="showInerBox()">50 <i class="fa fa-angle-down"></i></span>
                                        <div id="inner-box">
                                          <div class="select-value act" @click="optionColor()">50</div>
                                          <div class="select-value" @click="optionColor()">100</div>
                                          <div class="select-value" @click="optionColor()">200</div>
                                          <div class="select-value" @click="optionColor()">1000</div>
                                      </div>
                                    </div>
                               </div>
                               <div class="right-pagination">
                                    <ul class="pagination">
                                         <li class="link-list active"  @click="listPaginate()">1</li>
                                         <li class="link-list"  @click="listPaginate()">2</li>
                                         <li class="link-list"  @click="listPaginate()">3</li>
                                         <li class="link-list"  @click="listPaginate()">4</li>
                                         <li class="link-list"  @click="listPaginate()">5</li>
                                    </ul>
                               </div>
                          </div>
                      </div> -->
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
     }
  },
  methods:{
    showFirstlist(){
      $('.inner-list-child-all.first').slideToggle();
      $('.inner-list-child-all.second').hide();
      $('.inner-list-child-all.third').hide();
    },
     showSecondlist(){
      $('.inner-list-child-all.second').slideToggle();
       $('.inner-list-child-all.first').hide();
       $('.inner-list-child-all.third').hide();
    },
     showThirdlist(){
      $('.inner-list-child-all.third').slideToggle();
      $('.inner-list-child-all.second').hide();
      $('.inner-list-child-all.first').hide();
    },
     optionColor(){
       $('.select-value').removeClass("act");
       $('.select-value').on('click',function(){
            $(this).addClass("act");
       })
     },
     listPaginate(){
      $('.link-list').removeClass("active");
       $('.link-list').on('click',function(){
            $(this).addClass("active");
       })
     },
     showInerBox(){
       $('#inner-box').slideToggle();
     },
     openModel(){
        $('.modal-notify').show();
     },
     closeModel(){
        $('.modal-notify').hide();
     },
      // alert(a)
  },
  created(){
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
  font-size: 20px; width: 110px; text-align: left; float: left; padding-top: 17px;
}
.devide-heading .right-legend{
    text-align: center;
    width: 100px;
    background-color: #4E89FF;
    padding: 7px 9px;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    height: 29px;
    float: right;
}
.btn-success{
         color: #fff;
        padding: 5px 5px;
        margin: 5px;
        background-color: #4E89FF;
        border: none;
        cursor: pointer;
        border-radius: 4px;
}
.st0{fill:none;}
.st1{fill:#1E3C72;position:absolute;}
/* svg{
    position:absolute;
} */
#qrcode{
    height:42px; width:42px;
}
#Layer_1{
    position:absolute;
}
.table tbody tr td {
        border-bottom: 1px solid #edf2f9;
        padding: 6px !important;
        position:relative;
}
</style>
