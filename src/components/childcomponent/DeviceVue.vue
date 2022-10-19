<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <span class="left-heading-word">Thiết bị</span><span class="right-legend">Export excel</span>
                </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th>STT</th>
                                <th>ANDROIDID/MODEL</th>
                                <th>PHONE</th>
                                <th>QRCODE</th>
                                <th>PIN</th>
                                <th>FACEBOOK</th>
                                <th>INSTAGRAM</th>
                                <th>YOUTUBE</th>
                                <th>BUSSINESS TYPE</th>
                                <th>THỜI GIAN CẬP NHẬT</th>
                                <th>S</th>
                                <th class="fixed-position td">Hành động</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in newData" v-bind:key="item.status">
                                <td>{{stt++}}</td>
                                <td>{{item.AndroidId}}</td>
                                <td></td>
                                <td><img src="../../../public/images/QrCode.png" id="qrcode" alt=""></td>
                                <td>100%
                                    <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="20">
                                    <rect x="0" class="st0" width="24" height="24"></rect><g><path class="st1" d="M2.29,11.12H1.27C1.69,6.54,5.32,2.93,9.9,2.53v1.02C5.81,3.91,2.66,7.04,2.29,11.12z"></path><path class="st1" d="M9.82,21.47c-4.56-0.43-8.16-4.06-8.56-8.63h1.02c0.36,4.07,3.57,7.22,7.64,7.61L9.82,21.47z"></path><path class="st1" d="M11.65,21.47l-0.1-1.02c4.03-0.38,7.23-3.58,7.63-7.6h1.02C19.76,17.36,16.16,21.04,11.65,21.47z"></path><path class="st1" d="M13.82,11.55h-2.68c-0.05,0-0.09-0.05-0.07-0.1l2.14-4.81c0.08-0.18-0.16-0.34-0.29-0.19l-5.17,5.71 c-0.09,0.09-0.02,0.24,0.11,0.24h2.68c0.05,0,0.09,0.05,0.07,0.1l-2.14,4.81c-0.08,0.18,0.16,0.34,0.29,0.19l5.17-5.71 C14.01,11.7,13.95,11.55,13.82,11.55z"></path><path class="st1" d="M22.45,6.09H21.5V3.53h-0.78v2.56h-2.2V3.53h-0.78v2.56h-0.92c-0.16,0-0.29,0.13-0.29,0.29v1.3l1.1,3.9 c0.04,0.13,0.15,0.21,0.28,0.21h1.73h1.73c0.13,0,0.25-0.09,0.28-0.21l1.1-3.9v-1.3C22.74,6.22,22.61,6.09,22.45,6.09z"></path></g></svg>
                                </td>
                                <td>0/0</td>
                                <td>0/0</td>
                                <td>0/0</td>
                                <td>facebook</td>
                                <td>20/8/2021</td>
                                <td><svg id="Capa_1" x="0px" y="0px" width="25" height="25" viewBox="0 0 352.62 352.62" xml:space="preserve" fill="#4caf50"><g><path d="M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664 c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648 c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704 c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145 C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611 c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></td>
                                <td class="fixed-position td"><button class="btn btn-success">chi tiết</button><button class="btn btn-danger"  @click="openModel()">xóa</button></td>
                              </tr>
                            </tbody>
                         </table>
                      </div>
                      <div class="clearfix"></div>
                         <div class="sub-list-bottom">
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
                               <!-- <div class="right-pagination">
                                    <ul class="pagination">
                                         <li class="link-list active"  @click="listPaginate()">1</li>
                                         <li class="link-list"  @click="listPaginate()">2</li>
                                         <li class="link-list"  @click="listPaginate()">3</li>
                                         <li class="link-list"  @click="listPaginate()">4</li>
                                         <li class="link-list"  @click="listPaginate()">5</li>
                                    </ul>
                               </div> -->
                          </div>
                      </div>
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
import ApiPool from '../../ApiPool';
import PoolView from '../../layouts/PoolView';
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
      getApiDevice(){
        let baseUrl ='https://customer.autofarmer.net';
        let token = 'c76012e1-fc48-11ec-8fc6-a0369facf454';
        let id ='/v1/devices/search';
        ApiPool(baseUrl,token,id).then(res=>{
           this.newData = res.data.data;
           console.log(this.newData)
        });
      }
  },
  created(){
    this.getApiDevice();
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
    font-size: 20px;width:100px;text-align:left;float:left;padding-top:17px;
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
