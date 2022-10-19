<template>
<PoolView>
    <div class="addnewclone">
        <div class="addnew-container">
              <div class="addnew-inner-all">
                  <legend>Thêm clone</legend>
                  <div class="clearfix"></div>
                <div class="form-area">
                     <div class="main-form-container">
                        <div class="form">
                            <div class="first-content">
                                 <div class="label">Quốc gia</div>
                                 <div class="inner-first-list">
                                   <div class="first-list" @click="showFirstlist()">
                                   <span class="default-first-list-value">{{selected1}}<i class="fa fa-angle-down"></i></span>
                                   </div>
                                   <div class="inner-list-first">
                                       <span class="child-value-first" v-for="(i,index) in nation" @click=" changeColorChildFirst(i)" v-bind:key="index">{{i.name}}</span>
                                   </div>
                                 </div>
                                  <div class="head-empty"></div>
                           </div>
                           <div class="clearfix"></div>
                           <div class="between-content">
                               <div class="label">Clones</div>
                               <div class="second-textarea">
                                    <textarea name="clone_list" v-model="clone_list" rows="10" class="text-area" placeholder="Nhập danh sách clone"></textarea>
                               </div>
                                <div class="label-format"> 
                                   <legend>Format upload clone</legend>
                                    <div class="list-format">
                                   <ul>
                                        <li>uid|password</li>
                                        <li>uid|password|2fa</li>
                                        <li>uid|password|cookie</li>
                                        <li>uid|password|2fa|cookie</li>
                                        <li>uid|password|2fa|cookie|email|passmail</li>
                                   </ul>
                               </div>
                              </div>
                           </div>
                            <div class="clearfix"></div>
                               <div class="thirdlist">
                                <div class="label">Tên ứng dựng </div>
                                 <div class="inner-third"  @click="showSecondlist()">
                                  <span class="default-child-value-third">{{selected2}}<i class="fa fa-angle-down"></i></span>
                                   <div class="inner-third-list">
                                      <span class="child-value-third" v-for="(i,index) in media"  @click=" changeColorChildSecond(i)" v-bind:key="index">{{i.name}}</span>
                                   </div>
                                 </div>
                               </div>
                           <div class="clearfix"></div>
                           <div class="third-content">  
                            <div class="label">Hành động</div>
                            <div class="fourthlist">
                               <div class="inner-fourth" @click="showThirdlist()">
                                   <span class="default-child-value-fourth">{{selected3}}<i class="fa fa-angle-down"></i></span>
                                   <div class="inner-fourth-list">
                                      <span class="child-value-fourth" v-for="(i,index) in action"  @click=" changeColorChildThird(i)" v-bind:key="index">{{i.name}}</span>
                                   </div>
                               </div>
                               </div>
                           </div>
                           <div class="clearfix"></div>
                            <div class="checkbox"> 
                                <div class="label">Clone NVR</div>
                                  <input type="checkbox"  name="check_value" value="1" v-model="check_value" class="child-checkbox">
                               </div>
                               <div class="clearfix"></div>
                            <div class="button-bottom">
                              <div class="inner-but">
                                <button class="remove-but">Hủy bỏ</button>
                                <button class="add-but" @click="addButton()">Thêm</button>
                             </div>
                             </div>
                            </div>
                     </div>
                </div>
           </div>
        </div>
    </div>
</PoolView>
</template>
<script>
import $ from "jquery";
import PoolView from '../../layouts/PoolView';
import  axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: 'AddNewClone',
  props:{
    msg: String
  },
components:{
 PoolView,
},
  data(){
     return {
      nation:[
        {
            id: 1,
            name: "Việt Nam"
        },
        {
            id: 2,
            name: "Indonesia"
        },
        {
            id: 3,
            name: "England"
        },
        {
            id: 4,
            name: "Australia"
        },
      ],
      media:[
          {id:1,name:"FaceBook"},
          {id:2,name:"Instagram"},
          {id:3,name:"TikTok"},
          {id:4,name:"Youtube"},
      ],
      action:[
          {id:1,name:"Action FaceBook"},
          {id:2,name:"FaceBook LikeMoney"},
          {id:3,name:"Tinh Test"},
      ],
      selected1:'Việt Nam',
      selected2:'FaceBook',
      selected3:'Action FaceBook',
      clone_list:[],
      check_value:'1',
      newval:'',
      message:'',
     }
  },
  methods:{
    showFirstlist(){
      $('.inner-list-first').slideToggle();
    },
    showSecondlist(){
      $('.inner-third-list').slideToggle();
    },
    showThirdlist(){
      $('.inner-fourth-list').slideToggle();
    },
    changeColorChildFirst(i){
        $('.child-value-first').removeClass("factive");
       $('.child-value-first').on('click',function(){
            $(this).addClass("factive");
       })
       this.selected1 = i.name;
    },
     changeColorChildSecond(i){
      $('.child-value-third').removeClass("tactive");
       $('.child-value-third').on('click',function(){
            $(this).addClass("tactive");
       })
       this.selected2 = i.name;
    },
     changeColorChildThird(i){
        $('.child-value-fourth').removeClass("fractive");
        $('.child-value-fourth').on('click',function(){
              $(this).addClass("fractive");
        })
       this.selected3 =i.name;
    },
    async addButton(){
       await axios.post('http://127.0.0.1:8000/api/addnewclone',{
          nationality:this.selected1,
          appname:this.selected3,
          actionapp:this.selected2,
          clone_list:this.clone_list,
          check_value:this.check_value,
       }).then(res=>{
           this.newval = res.data.newval;
           this.message = res.data.message;
           Swal.fire({
             title:'success',
             text:this.message,
             icon:'success',
           })
           console.log(this.newval)
       })
       .catch(err=>{
        console.log(err.message)
       });
    },
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/css/home.css';
</style>
