<template>
    <div class="test-container">
        <div class="main-tse">
            
            <select :name="$t('common.language')" id="language"  required="required">
                <option value="">-----------------pick one language that you want to change to-----------------</option>
                <option value="1">en</option>
                <option value="2">vn</option>
            </select>
            
            <h1>{{$t('Title.title')}}</h1>
              <table class="table table-hover">
                <thead>
                    <tr>
                        <th>{{$t('PIf.no')}}</th>
                        <th>{{$t('PIf.name')}}</th>
                        <th>{{$t('PIf.email')}}</th>
                        <th>{{$t('PIf.phone')}}</th>
                        <th>{{$t('PIf.gender')}}</th>
                        <th>{{$t('PIf.action')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i,index) in testData" v-bind:key="index">
                        <td>{{i.id}}</td>
                        <td>{{i.name}}</td>
                        <td>{{i.email}}</td>
                        <td>{{i.phone}}</td>
                        <td>{{i.gender}}</td>
                        <td>
                            <button class="success-button">{{$t('deepInfo.add')}}</button>
                            <button class="warning-button">{{$t('deepInfo.delete')}}</button>
                            <button class="primary-button">{{$t('deepInfo.edit')}}</button>
                            <button class="default-button">{{$t('deepInfo.detail')}}</button>
                        </td>
                    </tr>
                </tbody>
              </table>
              
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            testData:[
                {id:1,name:'Lò văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:2,name:'Nguyễn văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:3,name:'Phạm văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:4,name:'Lục văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:5,name:'Quàng văn Thái',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:6,name:'Dương văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:7,name:'Cà văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:8,name:'Võ văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:9,name:'Lê văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
                {id:10,name:'Đức văn Đồng',email:'lovandong342@gmail.com',phone:'0353802879',gender:'nam'},
            ]
        }
    },
    methods:{
       
    },
    created(){

    }
}
</script>
<style scoped>
.success-button{
    color:#fff;background:green;border:none;padding:5px 10px; border-radius:5px;margin-right:3px;cursor:pointer;
}
.warning-button{
     color:#fff;background:orange;border:none;padding:5px 10px; border-radius:5px;margin-right:3px;cursor:pointer;
}
.primary-button{
     color:#fff;background:blue;border:none;padding:5px 10px; border-radius:5px;margin-right:3px;cursor:pointer;
}
.default-button{
     color:#333;background:#fff;border:none;padding:5px 10px; border-radius:5px;margin-right:3px;box-shadow: 1px 0px 1px 1px#666;cursor:pointer;
}
#language{
    width:30%;
    float:right;
    padding:5px 0px;
    border:1px solid aqua;
    border-radius:5px;
    text-align:center;
}
/* thead tr th */
</style>