<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                  <legend>Clone</legend>
                  <div class="list-heading">
                    <ul class="ul-list-heaing-all-left">
                         <li class="angle" @click="showFirstlist()">{{ profileselect }}<i class="fa fa-angle-down" ></i>
                              <div class="inner-list-child-all first">
                                  <ul id="myProfile"  @click="proFile()">
                                      <li class="li" v-for="(i,index) in actionProfile" v-bind:key="index">{{i.name}}</li>
                                      <!-- <li class="li" @click="proFile()"><router-link class="link-all" to="#">Friend</router-link></li>
                                      <li class="li" @click="proFile()"><router-link class="link-all" to="#">Group</router-link></li>
                                      <li class="li" @click="proFile()"><router-link class="link-all" to="#">Page</router-link></li> -->
                                  </ul>
                              </div>
                         </li>
                         <li class="angle"  @click="showSecondlist()">{{facebookselect}}<i class="fa fa-angle-down"></i>
                             <div class="inner-list-child-all second">
                                  <ul id="myFacebookApp" @click="faceBook()">
                                      <li class="li" v-for="(i,index) in facbookApp" v-bind:key="index">{{i.name}}</li>
                                      <!-- <li  class="li" @click="faceBook()">Instagram</li>
                                      <li  class="li" @click="faceBook()">Tiktok</li>
                                      <li  class="li" @click="faceBook()">Youtube</li>
                                      <li  class="li" @click="faceBook()">Lazada</li>
                                      <li  class="li" @click="faceBook()">Shopee</li>
                                      <li  class="li" @click="faceBook()">Actra Action</li> -->
                                  </ul>
                              </div>
                         </li>
                         <li class="angle" @click="showThirdlist()">{{selectaction}}<i class="fa fa-angle-down"></i>
                              <div class="inner-list-child-all third">
                                  <ul id="myactionApp" @click="actionFacebook()">
                                      <li class="li" v-for="(i,index) in newData.data" v-bind:key="index">{{i.actionapp}}</li>
                                      <!-- <li  class="li"  @click="actionFacebook()">FBLikeSubMoney </li>
                                      <li  class="li"  @click="actionFacebook()">tinh test</li>
                                      <li  class="li"  @click="actionFacebook()">Bùi Văn Lực</li>
                                      <li  class="li"  @click="actionFacebook()">Web</li> -->
                                  </ul>
                              </div>
                         </li>
                         <li class="install">Cài đặt({{selected.length}})</li>
                         <li class="install">Cài đặt hành động({{selected.length}})</li>
                    </ul>
                     <ul class="ul-list-heaing-all-right">
                         <li class="remove">Xóa Clone({{selected.length}})</li>
                         <li><i class="fa fa-plus"></i><router-link to="/addnewclone">Thêm Clone</router-link></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th><input type="checkbox" v-model="select_all" :checked="selected.length === newData.data.length" @click="getCheckedValue" /></th>
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
                                <th class="fixed-position">Hành động</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item,index) in newData.data" v-bind:key="index" >
                                <td><input type="checkbox" :value="item.id" v-model="selected" /></td>
                                <td>{{index+1}}</td>
                                <td>{{selected.length}}{{}}</td>
                                <td>{{item.uid}}</td>
                                <td></td>
                                <td>{{item.check_value}}</td>
                                <td class="circle-cross">
                                  <!-- {{item.fa2}} -->
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></td>
                                <td>{{item.facbookApp}}</td>
                                <td></td>
                                <td>{{item.created_date}}</td>
                                <td>{{item.updated_date}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="fixed-position td"><button class="btn btn-danger"  @click="openModel(item.id)">xóa</button></td>
                              </tr>
                            </tbody>
                         </table>
                      </div>
                      <div class="clearfix"></div>
                         <div class="sub-list-bottom">
                          <div class="inner-sub-list-bottom">
                             <div class="left-list">
                                    <div name="" id="input" class="select" required="required">
                                        <span class="selected" @click="showInerBox()">{{selectrange}}<i class="fa fa-angle-down"></i></span>
                                        <div id="inner-box" @click="optionColor()">
                                          <div class="select-value" v-for="(i,index) in rageNumber" v-bind:key="index">{{i.value}}</div>
                                          <!-- <div class="select-value" @click="optionColor()">100</div>
                                          <div class="select-value" @click="optionColor()">200</div>
                                          <div class="select-value" @click="optionColor()">1000</div> -->
                                      </div>
                                    </div>
                               </div>
                               <div class="right-pagination">
                                    <ul class="pagination">
                                      <pagination :data="newData" @pagination-change-page="getCloneValue" />
                                         <!-- <li class="link-list active"  @click="listPaginate()">1</li>
                                         <li class="link-list"  @click="listPaginate()">2</li>
                                         <li class="link-list"  @click="listPaginate()">3</li>
                                         <li class="link-list"  @click="listPaginate()">4</li>
                                         <li class="link-list"  @click="listPaginate()">5</li> -->
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
                    <div class="under-heading-content" v-for="(i,index) in datadelete" v-bind:key="index">
                       <span>Bạn chắc chắn muốn xóa <b>{{i.uid}}?</b></span>
                       <br/>
                       <div class="button"><button class="button-left" @click="cancelDelete(0)">Hủy bỏ</button> <button class="button-right"  @click="acceptDelete(i.id)">Xóa</button></div>
                    </div>
                </div>
          </div>
    </div>
</PoolView>
</template>
<script>
import $ from "jquery";
// import ApiPool from '../../ApiPool';
import axios from "axios";
import PoolView from '../../layouts/PoolView';
import  pagination from 'laravel-vue-pagination';
import Swal from 'sweetalert2';
export default {
  name: 'AllVue',
  props:{
    msg: String,
  },
  components:{
  PoolView,
  pagination,
  },
  data(){
     return {
         stt:1,
         newData:[],
         newValue:[],
         datadelete:[],
         selected:[],
         select_all:false,
         actionProfile:[
          {id:1,name:'action profile'},
          {id:2,name:'friend'},
          {id:3,name:'group'},
          {id:4,name:'page'},
         ],
         facbookApp:[
          {id:1,name:'facebook'},
          {id:2,name:'instagram'},
          {id:3,name:'youtube'},
          {id:4,name:'lazada'},
          {id:5,name:'shopee'},
          {id:6,name:'faceBook choose'},
         ],
         rageNumber:[
          {id:1,value:50},
          {id:2,value:100},
          {id:3,value:250},
          {id:4,value:500},
          {id:5,value:1000},
         ],
         actionApp:[
           {id:1,name:'Action Facebook'},
           {id:2,name:'FBLikeSubMoney'},
           {id:3,name:'tinh test'},
           {id:4,name:'Bùi văn Lực'},
           {id:5,name:'Web'},
         ],
         profileselect:'Action Profile',
         facebookselect:'faceBook choose',
         selectaction:'Action FaceBook',
         selectrange:50,
         onsearchvalue:[],
         message:'',
         increase:0,
     }
  },
  methods:{
    cancelDelete(){
      this.closeModel();
    },
    acceptDelete(id){
      this.closeModel();
       axios.post('http://127.0.0.1:8000/api/deletedataallvue/'+id).then(
           res=>{
         this.message = res.data.message
         Swal.fire({
          title:'success',
          text:this.message,
          icon:'success'
         })
         window.location.reload();
        }
      )
      .catch(err=>{
        console.log(err.message)
      });
    },
    showFirstlist(){
      // $('.inner-list-child-all.first').slideToggle();
      if(this.increase++ % 2== 0){
        document.getElementsByClassName("inner-list-child-all")[0].style.display ="block";
      }else{
        document.getElementsByClassName("inner-list-child-all")[0].style.display ="none";
      }
       document.getElementsByClassName("inner-list-child-all")[1].style.display ="none";
       document.getElementsByClassName("inner-list-child-all")[2].style.display ="none";
      //  console.log(document.getElementsByClassName("li")[0]);
    },
     showSecondlist(){
      if(this.increase++ % 2== 0){
        document.getElementsByClassName("inner-list-child-all")[1].style.display ="block";
      }else{
        document.getElementsByClassName("inner-list-child-all")[1].style.display ="none";
      }
       document.getElementsByClassName("inner-list-child-all")[0].style.display ="none";
       document.getElementsByClassName("inner-list-child-all")[2].style.display ="none";
    },
     showThirdlist(){
     if(this.increase++ % 2== 0){
        document.getElementsByClassName("inner-list-child-all")[2].style.display ="block";
      }else{
        document.getElementsByClassName("inner-list-child-all")[2].style.display ="none";
      }
       document.getElementsByClassName("inner-list-child-all")[0].style.display ="none";
       document.getElementsByClassName("inner-list-child-all")[1].style.display ="none";
    },
    proFile(){
      // Get the container element
     var b = this;
    var btnContainer = document.getElementById("myProfile");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("li");

    // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(e) {
        var current = document.getElementsByClassName("actived");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" actived", "");
        }

        // Add the active class to the current/clicked button
        this.className += " actived";
        b.profileselect = e.target.textContent;
      });
    }
    },
    faceBook(){
      var b = this;
      var btnContainer = document.getElementById("myFacebookApp");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("li");

      // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e) {
          var current = document.getElementsByClassName("actived");

          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace("actived", "");
          }

          // Add the active class to the current/clicked button
          this.className += " actived";
          b.facebookselect = e.target.textContent;
        });
      }
       if(this.facebookselect){
         this. onSortValue(this.facebookselect);
      }
    },
    returnValue(data){
      return data.actionapp;
    },
     actionFacebook(){
      var b = this;
      var btnContainer = document.getElementById("myactionApp");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("li");
      // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e) {
          var current = document.getElementsByClassName("actived");
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace("actived", "");
          }
          // Add the active class to the current/clicked button
          this.className += " actived";
          b.selectaction = e.target.textContent;
        });
      }
     },
     optionColor(){
       var b = this;
      var btnContainer = document.getElementById("inner-box");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("select-value");

      // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e) {
          var current = document.getElementsByClassName("act");

          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace("act", "");
          }

          // Add the active class to the current/clicked button
          this.className += " act";
          b.selectrange = e.target.textContent;
        });
      }
     },
     listPaginate(){
      $('.link-list').removeClass("active");
       $('.link-list').on('click',function(){
            $(this).addClass("active");
       })
     },
     showInerBox(){
        var a = document.getElementById("inner-box");
        
        if(this.increase++ % 2 == 0){
           a.style.display ="block";
        }else{
          a.style.display ="none";
        }
        // console.log(a);
     },
     openModel(id){
      var a = document.getElementsByClassName("modal-notify");
       a[0].style.display = "block";
        $.ajax({
        url:axios.post('http://127.0.0.1:8000/api/specificdata/'+id).then(
          res=>{
            this.datadelete = res.data.data
            console.log(this.datadelete)
          }
        ),
        method: 'POST',
        success: data => {
          this.comments = data;
        }
       });
        return id;
     },
     closeModel(){
       var a = document.getElementsByClassName("modal-notify");
       a[0].style.display = "none";
      //  a.style.display ="none";
     },
     getCloneValue(page=1){
        axios.get(`http://127.0.0.1:8000/api/getclonevalue?page=${page}`).then(res=>{
          this.newData = res.data.data;
          // console.log(this.newData)
        })
        .catch(
          err=>{
            console.log(err.message)
          }
        );
     },
     getCheckedValue(){
       this.selected =[];
       if(!this.select_all){
        for(let i in this.newData.data){
           this.selected.push(this.newData.data[i].id);
          //  console.log(this.selected);
          //  console.log(this.newData.data[i].id)
        }
       }
     },
    onSortValue(select){
     $.ajax({
      url:axios.get('http://127.0.0.1:8000/api/sortdata/'+select).then(
        res=>{
          this.newData = res.data.data}
      ),
      method: 'GET',
      success: data => {
        this.comments = data;
      }
    });
    },
  },
  mounted(){
  },
  created(){
    this. getCloneValue();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
@import '../../../public/css/clone.css';
a{color:#fff;}
.circle-cross{color:red;cursor:pointer;}
</style>
