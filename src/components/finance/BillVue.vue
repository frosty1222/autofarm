<template>
<PoolView>
    <div class="bill-container">  
        <legend>Chi tiết giao dịch </legend>
        <div class="main-bill">
          
            <ul class="bill-list-info" v-for="(i,index) in newData" v-bind:key="index">
                <li class="transit_id">
                    <span class="left-bill-name">Mã giao dịch</span>
                    <div class="right-direction">
                         <label for="">{{i.transition_id}}</label>
                         <p>Nếu bạn cần hỗ trợ đơn hàng của bạn, hãy cung cấp mã hóa đơn này.</p>
                    </div>
                </li>
                <li>
                    <span class="left-bill-name">Số tiền</span>
                    <span class="money">{{i.money}}{{i.type}}</span>
                </li>
                <li>
                    <span class="left-bill-name">Thời gian tạo</span>
                    <span class="time">{{i.created_at}}</span>
                </li>
                <li>
                    <span class="update">Thời gian cập nhật</span>
                    <span>{{i.updated_at}}</span>
                </li>
                <li>
                     <span class="left-bill-name">Trạng thái</span>
                     <span class="status">{{i.status}}</span>
                </li>
                <li>
                    <span class="payment-direction">Hướng dẫn thanh toán</span>
                    <div class="list-payment-info">
                        <h4>Vui lòng chuyển vào tài khoản Vietcombank bên dưới</h4>
                        <span>
                            Ngân hàng: 
                            <b>Ngân hàng Ngoại Thương Việt Nam</b>
                        </span>
                        <br/>
                         <span>
                            Số tài khoản:
                            <b>0011000412973</b>
                        </span>
                         <br/>
                         <span>
                            Tên tài khoản:
                            <b>TRUONG THANH NAM</b>
                        </span>
                         <br/>
                         <span>
                            Số tiền:
                            <b>{{i.money}}{{i.type}}</b>
                        </span>
                         <br/>
                         <span>
                            Nội dung chuyển khoản (memo):
                            <b>{{i.transition_id}}</b>
                        </span>
                         <br/>
                        <div class="bottom-line"> 
                            Lưu ý:
                             <b>
                                Giao dịch cần được thanh toán trong vòng 15 phút trước khi bị hủy. Vui lòng chuyển tiền chính xác(bao gồm cả số lẻ) và nội dung chuyển khoản theo như hướng dẫn.
                             </b>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</PoolView>
</template>
<script>
import axios from "axios";
import PoolView from '../../layouts/PoolView';
export default{
    components:{
    PoolView,
    },
   data(){
     return{
       newData:[],
     }
   },
   methods:{
     getReturnData(){
        var id=this.$route.params.id;
        console.log(id)
        axios.post('http://127.0.0.1:8000/api/getreturn/'+id).then(
            res=>{
                this.newData = res.data.data;
            }
        )
        .catch(
            err=>{
                console.log(err)
            }
        );
     }
   },
   created(){
     this.getReturnData();
   }
}
</script>
<style scoped>
  @import '../../../public/css/home.css';
   @import '../../../public/css/childcomponent.css';
</style>