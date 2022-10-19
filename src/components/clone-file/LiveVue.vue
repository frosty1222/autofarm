<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                  <legend>Clone</legend>
                  <div class="list-heading">
                    <ul class="ul-list-heaing-all-left">
                         <li class="angle" @click="showFirstlist()">Action Profile <i class="fa fa-angle-down" ></i>
                              <div class="inner-list-child-all first">
                                  <ul>
                                      <li class="li actived" @click="proFile()"><router-link class="link-all" to="#">Action profile</router-link></li>
                                      <li class="li" @click="proFile()"><router-link class="link-all" to="#">Friend</router-link></li>
                                      <li class="li" @click="proFile()"><router-link class="link-all" to="#">Group</router-link></li>
                                      <li class="li" @click="proFile()"><router-link class="link-all" to="#">Page</router-link></li>
                                  </ul>
                              </div>
                         </li>
                         <li class="angle"  @click="showSecondlist()">Facebook <i class="fa fa-angle-down"></i>
                             <div class="inner-list-child-all second">
                                  <ul>
                                      <li class="li actived" @click="faceBook()" >Facebook</li>
                                      <li  class="li" @click="faceBook()">Instagram</li>
                                      <li  class="li" @click="faceBook()">Tiktok</li>
                                      <li  class="li" @click="faceBook()">Youtube</li>
                                      <li  class="li" @click="faceBook()">Lazada</li>
                                      <li  class="li" @click="faceBook()">Shopee</li>
                                      <li  class="li" @click="faceBook()">Actra Action</li>
                                  </ul>
                              </div>
                         </li>
                         <li class="angle" @click="showThirdlist()">ACTION FACEBOOK <i class="fa fa-angle-down"></i>
                              <div class="inner-list-child-all third">
                                  <ul>
                                      <li class="li actived"  @click="actionFacebook()">Action Facebook</li>
                                      <li  class="li"  @click="actionFacebook()">FBLikeSubMoney </li>
                                      <li  class="li"  @click="actionFacebook()">tinh test</li>
                                      <li  class="li"  @click="actionFacebook()">Bùi Văn Lực</li>
                                      <li  class="li"  @click="actionFacebook()">Web</li>
                                  </ul>
                              </div>
                         </li>
                         <li class="install">Cài đặt(0)</li>
                         <li class="install">Cài đặt hành động(0)</li>
                    </ul>
                     <ul class="ul-list-heaing-all-right">
                         <li class="remove">Xóa Clone(0)</li>
                         <li><i class="fa fa-plus"></i><router-link to="/addnewclone">Thêm Clone</router-link></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th><input type="checkbox" v-model="checked" :checked="checked" /></th>
                                <th>STT</th>
                                <th>THIẾT BỊ</th>
                                <th>UID</th>
                                <th>EMAIL</th>
                                <th>TRẠNG THÁI</th>
                                <th>AF</th>
                                <th>TẬP LỆNH HÀNH ĐỘNG</th>
                                <th>EXTRA ACTION</th>
                                <th>THỜI GIAN TẠO</th>
                                <th>THỜI GIAN CẬP NHẬT</th>
                                <th>TÊN CLONE</th>
                                <th>ẢNH ĐẠI DIỆN</th>
                                <th>NGÀY SINH</th>
                                <th>GIỚI TÍNH	</th>
                                <th>BẠN BÈ</th>
                                <th>NHÓM</th>
                                <th>TRANG</th>
                                <th class="fixed-position td">Hành động</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><input type="checkbox" :checked="checked" /></td>
                                <td>{{stt+1}}</td>
                                <td>âdgdfffffffffff</td>
                                <td>12333333333333333</td>
                                <td>1233333333333</td>
                                <td>21333333333333333</td>
                                <td class="circle-cross"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td class="fixed-position td"><button class="btn btn-danger">xóa</button></td>
                              </tr>
                              <tr>
                                <td><input type="checkbox" :checked="checked" /></td>
                                <td>{{stt+2}}</td>
                                <td>âdgdfffffffffff</td>
                                <td>12333333333333333</td>
                                <td>1233333333333</td>
                                <td>21333333333333333</td>
                                <td class="circle-cross"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td class="fixed-position td"><button class="btn btn-danger">xóa</button></td>
                              </tr>
                              <tr>
                                <td><input type="checkbox" :checked="checked"/></td>
                                <td>{{stt+3}}</td>
                                <td>âdgdfffffffffff</td>
                                <td>12333333333333333</td>
                                <td>1233333333333</td>
                                <td>21333333333333333</td>
                                <td class="circle-cross"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td>21333333333333333</td>
                                <td class="fixed-position td"><button class="btn btn-danger"  @click="openModel()">xóa</button></td>
                              </tr>
                            </tbody>
                         </table>
                      </div>
                      <div class="clearfix"></div>
                         <div class="sub-list-bottom">
                          <div class="inner-sub-list-bottom">
                             <div class="left-list">
                                    <div name="" id="input" class="select" required="required">
                                        <span class="selected" @click="showInerBox()">{{numSelected}}<i class="fa fa-angle-down"></i></span>
                                        <div id="inner-box">
                                          <div class="select-value" v-for="i in limitNumber" v-bind:key="i.id" @click="optionColor(i)">{{i.limit}}</div>
                                          <!-- <div class="select-value" @click="optionColor()">100</div>
                                          <div class="select-value" @click="optionColor()">200</div>
                                          <div class="select-value" @click="optionColor()">1000</div> -->
                                      </div>
                                    </div>
                               </div>
                               <div class="right-pagination">
                                    <ul class="pagination">
                                         <li class="link-list active" @click="listPaginate()">1</li>
                                         <li class="link-list"  @click="listPaginate()">2</li>
                                         <li class="link-list"  @click="listPaginate()">3</li>
                                         <li class="link-list"  @click="listPaginate()">4</li>
                                         <li class="link-list"  @click="listPaginate()">5</li>
                                    </ul>
                               </div>
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
import PoolView from '../../layouts/PoolView';
export default {
  name: 'LiveVue',
  props:{
    msg: String
  },
  components:{
   PoolView,
  },
  data(){
     return {
          redOne:'red',
          checked:0,
          counttime:0,
          limitNumber:[
            {id:1,limit:50},
            {id:2,limit:100},
            {id:3,limit:200},
            {id:4,limit:1000},
          ],
          numSelected:'50',
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
    proFile(){
       $('.li').removeClass("actived");
       $('.li').on('click',function(){
            $(this).addClass("actived");
       })
    },
    faceBook(){
       $('.li').removeClass("actived");
       $('.li').on('click',function(){
            $(this).addClass("actived");
       })
    },
     actionFacebook(){
         $('.li').removeClass("actived");
       $('.li').on('click',function(){
            $(this).addClass("actived");
       })
     },
     optionColor(i){
       $('.select-value').removeClass("act");
       $('.select-value').on('click',function(){
            $(this).addClass("act");
       })
       this.numSelected = i.limit;
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
     checkStatus(){
        console.log(this.checked)
      // alert(a)
      // console.log(a);
     }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
</style>
