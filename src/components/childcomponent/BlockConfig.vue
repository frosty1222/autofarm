<template>
<PoolView>
    <div class="block">
        <div class="main-container-block">
              <legend>Cấu hình clone bị chặn</legend>
              <div class="main-config">
               <div class="cover-input">
                 <div class="inner-config">
                    <div class="inner-input">
                         <div class="left-name-input">Mở chặn clone sau:</div>
                         <div class="right-input-list">
                              <input type="radio" value="">
                              <label for="">Một ngày</label>
                         </div>
                          <div class="right-input-list">
                              <input type="radio" value="">
                              <label for="">Hai ngày</label>
                         </div>
                         <div class="right-input-list">
                              <input type="radio" value="" checked>
                              <label for="">Ba ngày</label>
                         </div>
                    </div>
                    <div class="input-list">
                           <div class="left-name">
                               Cho clone đăng xuất khi bị chặn:
                           </div>
                           <div class="right-input-list">
                              <input type="checkbox" >
                           </div>
                    </div>
                    <div class="button-bottom-config">
                          <button class="button-bottom-config-inner">Cập nhật</button>
                    </div>
               </div>
               </div>
              </div>
             
        </div>
    </div>
</PoolView>
</template>
<script>
import PoolView from '../../layouts/PoolView';
export default{
     components:{
      PoolView,
     }
}
</script>
<style scoped>
@import '../../../public/css/childcomponent.css';
</style>