<template>
<PoolView>
    <div class="edit-action">
        <div class="heading-word">
            <legend>Sửa hành động</legend><div class="right-export"><span class="inner-right-export"><i class="fa fa-plus"></i>Export Excel</span></div>
        </div>
        <div class="main-edit" v-for="i in datas" v-bind:key="i.index">
              <div class="edit-detail">
                 <span>Tên hành động:</span>
                 <span class="name">{{i.actname}}</span> 
               </div>
                <div class="edit-detail">
                 <span>Tên ứng dụng:</span>
                 <span class="name">{{i.appname}}</span>
                </div>
                 <div class="edit-detail">
                     <span>Thời gian tạo:</span>
                     <span class="name">{{i.created_at}}</span>
                 </div>
                  <div class="edit-detail">
                     <span>Thời gian cập nhật:</span>
                     <span class="name">{{i.updated_at}}</span>
                  </div>
            <button class="return" @click="returnActionHome()">Quay lại trang hành động</button>
        </div>
    </div>
</PoolView>
</template>
<script>
import axios from 'axios';
import PoolView from '../../layouts/PoolView';
export default{
    props:{},
    components:{PoolView,},
    data(){
        return{
            datas:[],
        }
    },
    methods:{
        getDataById(){
           let id = this.$route.params.id;
            axios.get('http://127.0.0.1:8000/api/getdatabyid/'+id).then(res=>{
             this.datas = res.data.data;
             console.log(this.datas)
          }).catch(err=>{
            console.log(err);
          });
        },
        returnActionHome(){
            this.$router.push('/actionAll');
        }
    },
    created(){
        this.getDataById();
    }
}
</script>
<style scoped>

</style>