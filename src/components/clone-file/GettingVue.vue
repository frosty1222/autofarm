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
                                      <li  class="li"  @click="actionFacebook()">B??i V??n L???c</li>
                                      <li  class="li"  @click="actionFacebook()">Web</li>
                                  </ul>
                              </div>
                         </li>
                         <li class="install">C??i ?????t(0)</li>
                         <li class="install">C??i ?????t h??nh ?????ng(0)</li>
                    </ul>
                     <ul class="ul-list-heaing-all-right">
                         <li class="remove">X??a Clone(0)</li>
                         <li><i class="fa fa-plus"></i><router-link to="/addnewclone">Th??m Clone</router-link></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th><input type="checkbox" @click="checkStatus()" :class="check" /></th>
                                <th>STT</th>
                                <th>THI???T B???</th>
                                <th>UID</th>
                                <th>EMAIL</th>
                                <th>TR???NG TH??I</th>
                                <th>AF</th>
                                <th>T???P L???NH H??NH ?????NG</th>
                                <th>EXTRA ACTION</th>
                                <th>TH???I GIAN T???O</th>
                                <th>TH???I GIAN C???P NH???T</th>
                                <th>T??N CLONE</th>
                                <th>???NH ?????I DI???N</th>
                                <th>NG??Y SINH</th>
                                <th>GI???I T??NH	</th>
                                <th>B???N B??</th>
                                <th>NH??M</th>
                                <th>TRANG</th>
                                <th class="fixed-position">H??nh ?????ng</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                 <td class="empty-spacing" colspan="14">
                                      <div class="empty-alert">ch??a c?? d??? li???u</div>
                                 </td>
                                <!-- <td class="fixed-position td"><button class="btn btn-danger"  @click="openModel()">x??a</button></td> -->
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
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal-notify">
                <div class="inner-mode-content">
                    <div class="main-model-heading"  @click="closeModel()">
                          <legend>X??c nh???n</legend><svg width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(66, 82, 110);"><g><path d="M18 6.41L16.59 5L11 10.59L5.41 5L4 6.41L9.59 12L4 17.59L5.41 19L11 13.41L16.59 19L18 17.59L12.41 12L18 6.41Z" fill="black" fill-opacity="0.54"></path></g></svg>
                    </div>
                    <div class="under-heading-content">
                       <span>B???n ch???c ch???n mu???n x??a <b>023423423?</b></span>
                       <br/>
                       <div class="button"><button class="button-left">H???y b???</button> <button class="button-right">X??a</button></div>
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
  name: 'GettingVue',
  props:{
    msg: String
  },
  components:{PoolView,},
  data(){
     return {
          redOne:'red',
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
     checkStatus(){
       var  a = this.counttime++;
       if(a % 2 == 0){
         this.check = 'checked';
       }{
        this.check = '';
       }
      // alert(a)
     }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
@import '../../../public/css/clone.css';
</style>
