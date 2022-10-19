<template>
<PoolView>
    <div class="actionall">
         <div class="main-action">
          <div class="top">
               <legend>Hành động</legend><div class="add-action-child"><i class="fa fa-plus"></i><router-Link to="/addaction">Thêm hành động</router-Link></div>
          </div>
              
               <div class="action-container">
                   
                   <table class="table table-self-built">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Hành Động</th>
                            <th>Thời gian tạo</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i,index) in dataaction.data" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{i.actname}}</td>
                            <td>{{i.created_at}}</td>
                            <td class="button-action">
                                <button class="button-left" @click="toEdit(i.id)">chi tiết</button>
                                <button class="button-right" @click="deleteData(i.id)">xóa</button>
                            </td>
                        </tr>
                    </tbody>
                   </table>
                   <div class="right-pagination">
                          <pagination :data="dataaction" @pagination-change-page="getData" />
                  </div>
               </div>
         </div>

    </div>
  </PoolView>
</template>
<script>

import axios from "axios";
// import ApiPool from '../../ApiPool';
import $ from 'jquery';
import Swal from 'sweetalert2';
import  pagination from 'laravel-vue-pagination';
import PoolView from '../../layouts/PoolView';
export default{
  name: 'ActionAll',
  props:{
    msg: String
  },
  components:{
    pagination,
    PoolView,
  },
  data(){
     return {
        dataaction:[],
        message:'',
        newData :[],
        event:[],
     }
  },
   created(){
    this.getData();
  },
  methods:{
    async getData(page = 1){
     await axios.get(`http://127.0.0.1:8000/api/getdata?page=${page}`).then(res=>{
      this.dataaction = res.data.data;
      // this.newData = this.dataaction.length;
      // this.pages =  this.newData / 3;
      // console.log(this.pages.toFixed(0))
      // console.log(this.dataaction)
      }).catch(err=>{
        console.log(err);
      })
      //  let baseURL ='https://customer.autofarmer.net';
      //  let token = 'e41e28cd-fb3c-11ec-8fc6-a0369facf454';
      //  let id ='/v1/action-profile/all-by-clone';
      //   ApiPool( baseURL, token,id).then(res=>{
      //   this.dataaction = res.data.data.data;
      //     console.log(this.dataaction)
      //  })
    },
    showPopup(){
       $('.popup').show('slow').delay(3000);
        setTimeout(function(){
            $('.popup').fadeOut('slow');
        },3000);
    },
      deleteData(id){
        if(confirm("Do you really want to delete?")){
              axios.post('http://127.0.0.1:8000/api/deletedata/'+id).then(res=>{
              this.message = res.data.message;
              if(this.message){
                Swal.fire({
                title: 'success',
                text:this.message,
                icon: 'success',
               });
              }
              console.log(this.message);
          }).catch(err=>{
            console.log(err);
          })
        }
    },
    toEdit(id){
        this.$router.push('/editaction/'+id);
    },
     listPaginate(){
      $('.link-list').removeClass("active");
       $('.link-list').on('click',function(){
            $(this).addClass("active");
       })
     },
  },
 
}
</script>
<style>
   @import '../../../public/css/home.css';
   @import '../../../public/css/childcomponent.css';
 .right-pagination{width:100%;height:70px;}
.right-pagination .pagination{width:auto;display:flex;float:right;margin-right:25px;}
.pagination .page-item{border:1px solid rgba(0,0,0,.125) !important;padding:5px 20px;}
.pagination .page-item .page-link{color:#333;}
.pagination .page-item.active{background:#eee;}
.inner-all legend{font-size:20px;text-align:left;}
</style>