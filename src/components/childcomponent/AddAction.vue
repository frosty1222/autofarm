<template>
<PoolView>
    <div class="add-action-main-container">
         <legend>Thêm hành động</legend>
         <div class="main-add-action">
              <ul>
                 <li>
                     <span>Tên hành động</span>
                     <input type="text"  v-model="AddData.actname" placeholder="Nhập tên hành động">
                    <!-- hi: {{AddData.actname}} -->
                 </li>
                 <li>
                    <span>Tên ứng dụng</span>
                    <div class="option">
                        <div class="default-option" @click=" showList()">{{selected}} <i class="fa fa-angle-down"></i></div>
                        <div class="inner-option"  >
                            <label class="" v-for="item in AppName" v-bind:key="item.id" @click="chooseColor(item)">{{item.name}}</label>
                        </div>
                    </div>
                 </li>
                  <div class="button-beeneath">
                    <div class="inner-button">
                          <button class="left-button" @click="returnPage()">Hủy bỏ</button>
                          <button type="button" class="right-button" @click="addButton()">Thêm</button>
                    </div>
              </div>
              </ul>
         </div>
    </div>
</PoolView>
</template>
<script>
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';
import PoolView from '../../layouts/PoolView';
export default{
  name: 'ActionAll',
  props:{
    msg: String
  },
  components:{
    PoolView,
  },
  data(){
     return {
      AppName:[
      {
         id: 1,
         name: "Instagram"
     },
     {
         id: 2,
         name: "Tiktok"
     },
     {
         id: 3,
         name: "Youtube"
     },
     {
         id: 4,
         name: "Shopee"
     },
      {
         id: 5,
         name: "Lazada"
     },
     {
         id: 6,
         name: "Facebook"
     },
      ],
      selected:'chọn tên ứng dụng',
      AddData:{actname:null,appname:null},
      newData:[],
      message:''
     }
  },
  methods:{
    showList(){
     $('.inner-option').slideToggle();
    },
    chooseColor(item){
       $('label').removeClass("active");
       $('label').on('click',function(){
            $(this).addClass("active");
       })
        this.selected = item.name
       return this.selected;
    },
    addButton(){
         this.newData =[this.AddData.actname,this.selected];
         axios.post('http://127.0.0.1:8000/api/addnew',{
          actname: this.AddData.actname,
          appname:this.selected,
         }).then(res=>{
            this.message = res.message;
          Swal.fire({
            title: 'success',
            text:this.message,
            icon: 'success',
          });
          this.AddData.actname = '';
     }).catch(err=>{
      console.log(err);
     })
    },
    showPopup(){
        $('.popup').show('slow').delay(3000);
        setTimeout(function(){
            $('.popup').fadeOut('slow');
        },3000);
    },
    returnPage(){
      if(confirm("Do you really want to return?")){
         this.$router.push('/actionAll');
      }
     
    }
  },
  created(){
  }
}
</script>
<style scoped>
  @import '../../../public/css/home.css';
   @import '../../../public/css/childcomponent.css';
</style>