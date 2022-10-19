<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <span class="left-heading-word">Thêm trang</span>
                </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <form action="" class="addnewpage">
                            <div class="div-main">
                                <div class="left-uid">
                                    Tên
                                </div>
                                 <div class="right-text">
                                     <input type="text" placeholder="nhập tên">
                                 </div>
                             </div>
                             <div class="div-main">
                                <div class="left-uid">
                                    UIDs
                                </div>
                                 <div class="right-text">
                                     <textarea name="" id="" rows="10"></textarea>
                                 </div>
                             </div>
                             <div class="button-add-new-page">
                                <button class="left-button">Hủy bỏ</button>
                                <button class="right-button">Thêm</button>
                             </div>
                         </form>
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
     }
  },
  methods:{
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
@import '../../../public/css/childcomponent.css';
a{color:#fff;}
.circle-cross{color:red;cursor:pointer;}
.devide-heading{
        height: auto;
}
.inner-all .devide-heading .left-heading-word{
    font-size: 20px;width:120px;text-align:left;float:left;padding-top:17px;
}
.devide-heading .right-legend{
    text-align: center;
    width: 113px;
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
        padding: 21px !important;
        position:relative;
}
</style>
