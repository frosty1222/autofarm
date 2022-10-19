<template>
<PoolView>
    <div class="all">
          <div class="all-container">
              <div class="inner-all">
                <div class="devide-heading">
                     <span class="left-heading-word">Bạn bè</span><span class="right-legend"><i class="fa fa-plus"></i><router-link to="/addnewgroup">Thêm nhóm</router-link></span>
                </div>
                  <div class="clearfix"></div>
                  <div class="under-list-table">
                      <div class="table-area">
                         <table class="table table-hover">
                             <thead>
                              <tr>
                                <th>STT</th>
                                <th>UID</th>
                                <th>THỜI GIAN TẠO</th>
                                <th>Hành động</th>
                              </tr>
                            </thead>
                            <tbody> 
                              <tr v-for="(i,index) in datagroup.data" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{i.uid}}</td>
                                <td>{{i.created_at}}</td>
                                <td><button class="btn btn-danger"  @click="deleteGroupData(i.id)">xóa</button></td>
                              </tr>
                            </tbody>
                         </table>
                         <div class="right-pagination">
                          <pagination :data="datagroup" @pagination-change-page="getDataGroup" />
                           </div>
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
                       <div class="button"><button type="button" @click="deleteBut(0)" class="button-left" >Hủy bỏ</button> <button type="button" class="button-right" @click="deleteBut(1)">Xóa</button></div>
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
import  pagination from 'laravel-vue-pagination';
import PoolView from '../../layouts/PoolView';
import Swal from 'sweetalert2';
export default {
  name: 'GroupVue',
  props:{
    msg: String
  },
  components:{
   pagination,
   PoolView,
  },
  data(){
     return {
         stt:1,
         newData:'',
         newValue:[],
         datagroup:[],
         deletebut:'',
         closeBut:'',
     }
  },
  methods:{
     openModel(){
        $('.modal-notify').show();
     },
     closeModel(){
        $('.modal-notify').hide();
     },
     deleteBut(a){
      if(a == 1){
        this.closeModel();
        return this.deletebut =a;
      }else{
        this.closeBut = a;
         this.closeModel();
      }
      
     },
     async getDataGroup(page =1){
       await axios.get(`http://127.0.0.1:8000/api/getgroupdata?page=${page}`).then(
          res=>{
            this.datagroup = res.data.data;
          }
        )
        .catch(
          err=>{
            console.log(err.message)
          }
        );
     },
     deleteGroupData(id){
       axios.post('http://127.0.0.1:8000/api/deletegroupdata/'+id).then(res=>{
       this.message = res.message;
        Swal.fire({
                title: 'success',
                text:this.message,
                icon: 'success',
        });
        window.location.reload(true);
      })
      .catch(err=>{
           console.log(err)
       });
      // alert(a)
     }
  },
  created(){
    this.getDataGroup();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    width: 121px;
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
 .right-pagination{width:100%;height:70px;}
.right-pagination .pagination{width:auto;display:flex;float:right;margin-right:25px;}
.pagination .page-item{border:1px solid rgba(0,0,0,.125) !important;padding:5px 20px;}
.pagination .page-item .page-link{color:#333;}
.pagination .page-item.active{background:#eee;}
.inner-all legend{font-size:20px;text-align:left;}
</style>
