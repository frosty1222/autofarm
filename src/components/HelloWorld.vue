<template>
  <div class="hello">
        <router-view />
  </div>
</template>
<script>
import $ from "jquery";
import setCookie from '../cookie/setCookie';
import getCookie from '../cookie/getCookie';
import setHeaderToken from '../utils/setHeaderToken';
export default {
  name: 'HelloWorld',
  props:{
    msg: String
  },
  data(){
     return {
          checkActive:'false',
          result:'',
          height: window.innerHeight,
          checkShow:document.cookie,
          langs:getCookie('lang'),
     }
  },
  watch:{
  },
  methods:{
      menuDropdown(){
        $('.dropdown').slideToggle().css('visibility','visible');
      },
      showSubList(){
         $('.sub-list').slideToggle();
         $('.sub-list.first').hide();
         $('.sub-list.second').hide();
      },
       showSubList2(){
         $('.sub-list.first').slideToggle();
         $('.sub-list.second').hide();
      },
      showSubList3(){
         $('.sub-list.second').slideToggle();
        $('.sub-list.first').hide();
      },
      hideSubList(){
          $('.sub-list').hide('slow');
          $('.sub-list.first').hide('slow');
      },
      addNewClass(){
       $('.home').removeClass("home-icon");
      
       $('.home').on('click',function(){
            $(this).addClass("home-icon");
             $('.left-icon.special').removeClass("home-icon");
             $('.left-icon.special1').removeClass("home-icon");
             $('.left-icon.special2').removeClass("home-icon");
       })
        $('.home.spe').on('click',function(){
            $('.left-icon.special').addClass("home-icon").css('padding','10px');
             $('.home.spe').removeClass("home-icon");
       })
        $('.home.spe.specs').on('click',function(){
            $('.left-icon.special1').addClass("home-icon").css('padding','10px');
             $('.home.spe.specs').removeClass("home-icon");
             $('.left-icon.special').removeClass("home-icon");
       })
        $('.home.spe.specss').on('click',function(){
            $('.left-icon.special2').addClass("home-icon").css('padding','10px');
             $('.home.spe.specss').removeClass("home-icon");
             $('.left-icon.special').removeClass("home-icon");
       })
      },
      addNewClass2(){
         $('.li-sub').removeClass("home-icon");
         $('.li-sub').on('click',function(){
            $(this).addClass("home-icon");
         })
      },
      topUp(){
         var offset = 500;
         var duration = 750;
        $(window).scroll(function () {
         if ($(this).scrollTop() > offset)
          $(this).fadeIn(duration);else
         $(this).fadeOut(duration);
         });
          $('body,html').animate({scrollTop: 0}, duration);
         var element = document.getElementsByClassName("back-bottom");
          var element2 = document.getElementsByClassName("back-top");
         for (var i=0;i<element.length;i+=1){
            element[i].style.display = 'block';
            }
        for (var j=0;j<element2.length;j+=1){
            element2[j].style.display = 'none';
          }
      },
      toBottom(){
          var duration = 600;
           $(this).fadeIn(duration)
           $('body,html').animate({scrollTop: 1500}, duration);
            var element = document.getElementsByClassName("back-bottom");
          var element2 = document.getElementsByClassName("back-top");
         for (var i=0;i<element.length;i+=1){
            element[i].style.display = 'none';
            }
        for (var j=0;j<element2.length;j+=1){
            element2[j].style.display = 'block';
          }
      },
     checkOut(){
           setCookie('jwtToken','');
           setCookie('routerAuthCheck',false);
           this.$router.push('/login');
    },
    changeFlag(btn){
        $('.span').removeClass("active");
         $('.span').on('click',function(){
            $(this).addClass("active");
            console.log(btn.this)
         })
         setTimeout(function(){
             $('.dropdown').hide()
         },2000)
         document.addEventListener('click', (e) =>
       {
    // Retrieve id from clicked element
        let elementId = e.target.id;
        // If element has id
        if (elementId !== '') {
            console.log(elementId);
        }
        // If element has no id
        else { 
            console.log("An element without an id was clicked.");
        }
    //    let lang = getCookie('lang');
       if(elementId == 'vn'){
        $("#triangle").show();
        $("#engflag").hide();
         setCookie('lang','vn');
       }else if(elementId =='en' ){
           $("#engflag").show();
           $("#triangle").hide(); 
           setCookie('lang','en');
       }
    }
    );
    },
     getApi(){
        this.check = getCookie('check');
     },
  },
  created(){
    this.addNewClass2();
    this.addNewClass();
    //  setCookie('lang','vn')
  },
  unmounted() {
    
  },
  computed(){
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/css/home.css';
.back-top{
    position:fixed;
    bottom:0px;
    right:0px;
}
.back-top:hover{
  transform:rotate(180deg);
}
.back-bottom{
    position:fixed;
    bottom:0px;
    right:0px;
    display:none;
}
.back-bottom:hover{
  transform:rotate(360deg);
}
.popup {
   display:none;position:fixed;height:20px;padding: 17px 60px;background-color:#fff;border-radius:5px;top:5px;right:100px;z-index:999;color:#666;box-shadow:0px 0px 1px 0.1px rgb(197,197,197);top:5px;right:0px;
}
.popup img{
  position: absolute;left: 0px; top: 0px;background-color: #37B487; padding: 9px;color: #ffF;opacity: 0.7;
}
.span.active{background-color:#37B487;}
#engflag{display:none;}
</style>
<i18n>
  {
    "hello":"hello world",
  }
</i18n>
