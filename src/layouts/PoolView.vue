<template>
   <span class="popup"><img src="../../public/images/correct.png" alt="" width="35" height="35">Thành công</span>
        <div class="container-home">
              <div class="heading-bar">
                <div class="inner-header">
                  <div class="left-icon">
                   <div class="block-center">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" class="brand-image"><g clip-path="url(#clip0)"><path d="M19.9195 17.7344C19.7755 17.7344 19.622 17.7056 19.478 17.6479L0.765061 10.2849C0.314031 10.1022 0.0069466 9.66968 0.0069466 9.17945C-0.00264978 8.68922 0.285242 8.24706 0.736272 8.05481L19.4492 0.0862126C19.7467 -0.0387473 20.0922 -0.0387473 20.3897 0.0862126L39.1026 8.05481C39.5537 8.24706 39.8415 8.68922 39.8319 9.17945C39.8224 9.66968 39.5249 10.1022 39.0738 10.2849L20.3609 17.6479C20.2169 17.7056 20.0634 17.7344 19.9195 17.7344ZM4.3733 9.13139L19.9195 15.2448L35.4656 9.13139L19.9195 2.50851L4.3733 9.13139Z" fill="#4E89FF"></path>
                    <path d="M19.9096 23.8673C19.7656 23.8673 19.6121 23.8385 19.4682 23.7808L0.755203 16.4178C0.141034 16.1871 -0.156454 15.4854 0.083456 14.8702C0.323366 14.255 1.0239 13.9474 1.63807 14.1877L19.9096 21.3778L38.1811 14.1877C38.7953 13.9474 39.4958 14.2454 39.7357 14.8702C39.9756 15.4854 39.6782 16.1871 39.0544 16.4274L20.3414 23.7904C20.2071 23.8385 20.0631 23.8673 19.9096 23.8673Z" fill="#4E89FF"></path>
                    <path d="M19.9096 30C19.7656 30 19.6121 29.9712 19.4681 29.9135L0.755181 22.5505C0.141012 22.3102 -0.166072 21.6085 0.0738377 20.9933C0.313747 20.3781 1.01428 20.0705 1.62845 20.3108L19.9 27.5008L38.1715 20.3108C38.7857 20.0705 39.4862 20.3685 39.7261 20.9933C39.966 21.6085 39.6685 22.3102 39.0448 22.5505L20.3318 29.9135C20.2071 29.9712 20.0631 30 19.9096 30Z" fill="#4E89FF"></path>
                    </g><defs><clipPath id="clip0"><rect width="170" height="30" fill="white"></rect></clipPath></defs></svg> <span class="brand-name" style="color: rgb(30, 60, 114); font-size: 28px; font-weight: bold; line-height: 1;">AutoFarmer</span>
                   </div>
                </div>
                <div class="right-list-icon">
                   <ul class="parent-list">
                       <li class="price">
                          Số tiền:12,000<span>đ</span>
                       </li>
                       <li class="flag">
                           <i class="fa-down" @click="menuDropdown()"></i>
                           <img  v-if="langs === 'vn' " id="triangle" src="../../public/images/vnflag.jpg" alt="">
                           <img  v-if="langs === 'en' "  id="triangle" src="../../public/images/usaflag.jpg"  alt="">
                           <div class="dropdown">
                                <span class="span active" ><img src="../../public/images/vnflag.jpg" id="vn" alt="" @click="changeFlag(this)"></span>
                                <span class="span" ><img src="../../public/images/usaflag.jpg" id="en" alt="" @click="changeFlag(this)"></span>
                           </div>
                       </li>
                       <li class="avatar">
                          <i>B</i>
                       </li>
                   </ul>
                </div>
                </div>
              </div>
              <div class="clearfix"></div>
          <div class="main-content-under-bar">
              <div class="main-content-container">
                   <div class="left-bar-container">
                       <div class="list-child-icon-main">
                        <router-link class="link" to="/">
                           <ul class="home home-icon"  @click="addNewClass()">
                             <li class="left-icon">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V8.939C20 8.47098 19.8904 8.00946 19.6802 7.59134C19.4699 7.17322 19.1647 6.8101 18.789 6.531L10.6 0.2C10.4269 0.0701779 10.2164 0 10 0C9.78363 0 9.5731 0.0701779 9.4 0.2L1.211 6.531C0.835304 6.8101 0.530118 7.17322 0.319842 7.59134C0.109566 8.00946 3.28786e-05 8.47098 0 8.939L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H7.872C8.13722 20 8.39157 19.8946 8.57911 19.7071C8.76664 19.5196 8.872 19.2652 8.872 19V14.5C8.872 14.3143 8.94575 14.1363 9.07703 14.005C9.2083 13.8737 9.38635 13.8 9.572 13.8H10.428C10.6137 13.8 10.7917 13.8737 10.923 14.005C11.0542 14.1363 11.128 14.3143 11.128 14.5V19C11.128 19.2652 11.2334 19.5196 11.4209 19.7071C11.6084 19.8946 11.8628 20 12.128 20H18ZM18.7 18C18.7 18.1857 18.6262 18.3637 18.495 18.495C18.3637 18.6262 18.1857 18.7 18 18.7H12.428V14.5C12.428 13.9696 12.2173 13.4609 11.8422 13.0858C11.4671 12.7107 10.9584 12.5 10.428 12.5H9.572C9.04157 12.5 8.53286 12.7107 8.15779 13.0858C7.78271 13.4609 7.572 13.9696 7.572 14.5V18.7H2C1.81435 18.7 1.6363 18.6262 1.50503 18.495C1.37375 18.3637 1.3 18.1857 1.3 18V8.939C1.3013 8.66974 1.36588 8.40456 1.48851 8.16485C1.61115 7.92514 1.78841 7.71761 2.006 7.559L10 1.379L18.014 7.574C18.2266 7.7325 18.3993 7.93841 18.5184 8.17537C18.6375 8.41233 18.6997 8.6738 18.7 8.939V18Z" fill="white"></path></svg>
                             </li>
                               <li class="right-icon"><router-link class="link" to="/homepage">Trang Chủ</router-link></li>
                           </ul>
                           </router-link>
                       </div>
                       <div class="list-child-icon-main">
                           <ul class="home spe">
                            <li class="left-icon special" @click="addNewClass()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                                <span id="clone" @click="showSubList()"><router-link to="#">Clone</router-link></span>
                            </li>
                            <div class="clearfix"></div>
                               <li class="right-icon">
                                <div class="clearfix"></div>
                                 <div class="sub-list">
                                    <ul>
                                         <li class="li-sub home-icon" @click="addNewClass2()">
                                            <router-link class="link" to="/allvue">Tất cả</router-link>
                                         </li>
                                         <li class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/livevue">Live</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/checkpoint">Checkpoint</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/storevue">Stored</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/gettingvue">Getting</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/checkingvue">Checking</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/avatarvue">Avatar</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/nonava">Non Avatar</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/birthday">Birthday</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/gender">Sex</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/noneAc">No-Activities-24h</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                            <router-link class="link" to="/nodo">No-DoResults-24h</router-link>
                                         </li>
                                    </ul>
                                 </div>
                                </li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main" @click="hideSubList()">
                            <ul class="home " @click="addNewClass()">
                            <li class="left-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </li>
                               <li class="right-icon"><router-link to="/actionAll">Hành động</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home" @click="addNewClass()">
                            <li class="left-icon">
                                 <svg fill="white" viewBox="0 0 24 24" width="20" height="24px"><path d="M 9.6660156 2 L 9.1757812 4.5234375 C 8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531 L 4.5078125 4.9785156 L 2.171875 9.0214844 L 4.1132812 10.708984 C 4.0386488 11.16721 4 11.591845 4 12 C 4 12.408768 4.0398071 12.832626 4.1132812 13.291016 L 4.1132812 13.292969 L 2.171875 14.980469 L 4.5078125 19.021484 L 6.9296875 18.1875 C 7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562 L 9.6660156 22 L 14.333984 22 L 14.824219 19.476562 C 15.648925 19.165543 16.404903 18.73057 17.068359 18.185547 L 19.492188 19.021484 L 21.826172 14.980469 L 19.886719 13.291016 C 19.961351 12.83279 20 12.408155 20 12 C 20 11.592457 19.96113 11.168374 19.886719 10.710938 L 19.886719 10.708984 L 21.828125 9.0195312 L 19.492188 4.9785156 L 17.070312 5.8125 C 16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375 L 14.333984 2 L 9.6660156 2 z M 11.314453 4 L 12.685547 4 L 13.074219 6 L 14.117188 6.3945312 C 14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375 L 16.664062 8.0664062 L 18.585938 7.40625 L 19.271484 8.5917969 L 17.736328 9.9277344 L 17.912109 11.027344 L 17.912109 11.029297 C 17.973258 11.404235 18 11.718768 18 12 C 18 12.281232 17.973259 12.595718 17.912109 12.970703 L 17.734375 14.070312 L 19.269531 15.40625 L 18.583984 16.59375 L 16.664062 15.931641 L 15.798828 16.640625 C 15.308719 17.043245 14.745852 17.36853 14.117188 17.605469 L 14.115234 17.605469 L 13.072266 18 L 12.683594 20 L 11.314453 20 L 10.925781 18 L 9.8828125 17.605469 C 9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625 L 7.3359375 15.933594 L 5.4140625 16.59375 L 4.7285156 15.408203 L 6.265625 14.070312 L 6.0878906 12.974609 L 6.0878906 12.972656 C 6.0276183 12.596088 6 12.280673 6 12 C 6 11.718768 6.026742 11.404282 6.0878906 11.029297 L 6.265625 9.9296875 L 4.7285156 8.59375 L 5.4140625 7.40625 L 7.3359375 8.0683594 L 8.1992188 7.359375 C 8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312 L 10.925781 6 L 11.314453 4 z M 12 8 C 9.8034768 8 8 9.8034768 8 12 C 8 14.196523 9.8034768 16 12 16 C 14.196523 16 16 14.196523 16 12 C 16 9.8034768 14.196523 8 12 8 z M 12 10 C 13.111477 10 14 10.888523 14 12 C 14 13.111477 13.111477 14 12 14 C 10.888523 14 10 13.111477 10 12 C 10 10.888523 10.888523 10 12 10 z"></path></svg>
                            </li>
                               <li class="right-icon">
                                <router-link to="/blockconfig">Cấu Hình Clone Bị Chặn</router-link>
                               </li>
                           </ul>
                          
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home" @click="addNewClass()">
                            <li class="left-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </li>
                               <li class="right-icon" ><router-link to="/device">Thiết bị</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home"  @click="addNewClass()">
                             <li class="left-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                             </li>
                               <li class="right-icon"><router-link to="/page">Trang</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home" @click="addNewClass()">
                            <li class="left-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></li>
                               <li class="right-icon"><router-link to="/friend">Bạn bè</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home"   @click="addNewClass()">
                            <li class="left-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </li>
                               <li class="right-icon"><router-link to="/group">Nhóm</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                            <ul class="home spe specs">
                            <li class="left-icon special1" @click="addNewClass()">
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M19.321 10.217C19.2356 10.2169 19.1509 10.2336 19.072 10.2662C18.993 10.2988 18.9212 10.3467 18.8608 10.407C18.8003 10.4674 18.7523 10.5391 18.7196 10.618C18.6869 10.697 18.67 10.7816 18.67 10.867C18.6699 12.6932 18.1034 14.4743 17.0486 15.9651C15.9938 17.4558 14.5027 18.5828 12.7807 19.1907C11.0587 19.7986 9.19055 19.8575 7.43366 19.3593C5.67677 18.8611 4.11761 17.8303 2.97102 16.409L4.14302 16.368L0.650024 13.211L0.825024 17.911L1.72502 16.906C2.99259 18.618 4.76823 19.8861 6.79883 20.5296C8.82944 21.1732 11.0114 21.1593 13.0336 20.49C15.0559 19.8207 16.8152 18.5301 18.0609 16.8021C19.3066 15.0742 19.9751 12.9971 19.971 10.867C19.971 10.6946 19.9025 10.5293 19.7806 10.4074C19.6587 10.2855 19.4934 10.217 19.321 10.217Z" fill="white"></path><path d="M19.32 8.787L19.145 4.087L18.245 5.092C16.9773 3.3804 15.2016 2.11263 13.1711 1.46937C11.1406 0.826102 8.95883 0.840172 6.93679 1.50957C4.91474 2.17897 3.15557 3.46954 1.91 5.19734C0.664434 6.92515 -0.00398122 9.00204 1.78403e-05 11.132C1.78439e-05 11.3044 0.0684998 11.4697 0.190398 11.5916C0.312297 11.7135 0.477627 11.782 0.650018 11.782C0.822409 11.782 0.987739 11.7135 1.10964 11.5916C1.23154 11.4697 1.30002 11.3044 1.30002 11.132C1.29935 9.30532 1.8654 7.52343 2.92013 6.03202C3.97486 4.54061 5.46631 3.41315 7.18883 2.80512C8.91134 2.19708 10.7801 2.13842 12.5373 2.63721C14.2946 3.136 15.8538 4.16769 17 5.59L15.828 5.63L19.32 8.787Z" fill="white"></path><path d="M10.364 5.445V6.078C10.7332 6.10936 11.0956 6.196 11.439 6.335C11.7415 6.46719 12.0092 6.66779 12.221 6.921C12.3866 7.10509 12.5241 7.31267 12.629 7.537C12.7175 7.71791 12.7663 7.91568 12.772 8.117C12.7726 8.21151 12.754 8.30516 12.7174 8.3923C12.6808 8.47943 12.6269 8.55825 12.559 8.624C12.4913 8.69293 12.4103 8.74735 12.3209 8.78397C12.2315 8.82059 12.1356 8.83863 12.039 8.837C11.8605 8.84264 11.686 8.78251 11.5489 8.66803C11.4117 8.55355 11.3214 8.3927 11.295 8.216C11.2407 7.98564 11.1257 7.77402 10.962 7.6031C10.7983 7.43218 10.5918 7.30819 10.364 7.244V9.681C10.848 9.814 11.233 9.935 11.522 10.044C11.8061 10.1522 12.0671 10.3134 12.291 10.519C12.5321 10.7319 12.7236 10.9951 12.852 11.29C12.9861 11.5996 13.0542 11.9337 13.052 12.271C13.0544 12.7077 12.9467 13.1379 12.739 13.522C12.5236 13.9173 12.2045 14.2465 11.816 14.474C11.3744 14.731 10.879 14.8816 10.369 14.914V16.372C10.3775 16.5414 10.3544 16.711 10.301 16.872C10.2748 16.9273 10.2314 16.9726 10.1774 17.0013C10.1233 17.0299 10.0615 17.0403 10.001 17.031C9.94408 17.0378 9.88637 17.0294 9.8337 17.0068C9.78103 16.9841 9.73526 16.948 9.70101 16.902C9.63541 16.7794 9.60594 16.6407 9.61601 16.502V14.925C9.20077 14.8858 8.7951 14.777 8.41601 14.603C8.09539 14.454 7.80542 14.2465 7.56101 13.991C7.34748 13.7696 7.17571 13.5115 7.05401 13.229C6.94868 12.9837 6.89294 12.72 6.89001 12.453C6.8907 12.358 6.91054 12.2642 6.94834 12.1771C6.98614 12.09 7.04113 12.0114 7.11001 11.946C7.18051 11.8722 7.26569 11.8139 7.36008 11.775C7.45446 11.736 7.55595 11.7173 7.65801 11.72C7.81539 11.7149 7.9706 11.7578 8.10301 11.843C8.22441 11.9258 8.31344 12.0481 8.35501 12.189C8.43358 12.4387 8.52537 12.6841 8.63001 12.924C8.71472 13.1023 8.83562 13.261 8.98501 13.39C9.16784 13.5438 9.38329 13.6539 9.61501 13.712V10.988C9.16265 10.8698 8.7229 10.7077 8.30201 10.504C7.95523 10.331 7.66028 10.0696 7.44701 9.746C7.21418 9.36602 7.09998 8.92523 7.11901 8.48C7.10783 8.17552 7.15891 7.87195 7.26913 7.58789C7.37935 7.30383 7.54639 7.04526 7.76001 6.828C8.26846 6.36373 8.92677 6.09757 9.61501 6.078V5.457C9.61501 5.12834 9.73801 4.964 9.98401 4.964C10.23 4.964 10.3567 5.12434 10.364 5.445ZM9.62001 9.464V7.22C9.33963 7.29351 9.07792 7.42538 8.85201 7.607C8.7557 7.70041 8.68113 7.81388 8.6336 7.93935C8.58608 8.06483 8.56676 8.19922 8.57701 8.333C8.56793 8.4613 8.58623 8.59007 8.63071 8.71076C8.67519 8.83144 8.74484 8.94129 8.83501 9.033C9.06682 9.22539 9.33327 9.37169 9.62001 9.464ZM10.364 11.205V13.771C10.7124 13.7175 11.0333 13.5506 11.277 13.296C11.4876 13.0705 11.6033 12.7725 11.6 12.464C11.6086 12.3177 11.585 12.1712 11.5307 12.0351C11.4764 11.8989 11.3929 11.7763 11.286 11.676C11.0142 11.4574 10.7004 11.2971 10.364 11.205Z" fill="white"></path></svg>
                                <span id="clone" @click="showSubList2()"><router-link to="#">Kiếm tiền</router-link></span>
                            </li>
                            <div class="clearfix"></div>
                               <li class="right-icon">
                                <div class="clearfix"></div>
                                 <div class="sub-list first">
                                    <ul>
                                         <li class="li-sub home-icon" @click="addNewClass2()">
                                            <router-link class="link" to="/today">Today</router-link>
                                         </li>
                                         <li class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/subdevice">Devices</router-link>
                                         </li>
                                         <li  class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/payment">Thanh toán</router-link>
                                         </li>
                                    </ul>
                                 </div>
                                </li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                           <ul class="home spe specss">
                            <li class="left-icon special2" @click="addNewClass()">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                                <span id="clone" @click="showSubList3()"><router-link to="/expensevue">Tài Chính</router-link></span>
                            </li>
                            <div class="clearfix"></div>
                               <li class="right-icon">
                                <div class="clearfix"></div>
                                 <div class="sub-list second">
                                    <ul>
                                         <li class="li-sub home-icon" @click="addNewClass2()">
                                            <router-link class="link" to="/expensevue">Chi phí</router-link>
                                         </li>
                                         <li class="li-sub"  @click="addNewClass2()">
                                             <router-link class="link" to="/transitionvue">Diao dịch</router-link>
                                         </li>
                                    </ul>
                                 </div>
                                </li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                      
                           <ul class="home"  @click="addNewClass()">
                            <li class="left-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 4.90998H14.72C15.1796 4.32082 15.4152 3.58765 15.3848 2.84104C15.3544 2.09442 15.06 1.38283 14.554 0.832985C14.2817 0.564288 13.9588 0.352302 13.604 0.209312C13.2492 0.0663224 12.8695 -0.00482787 12.487 -1.534e-05C11.5503 0.01087 10.6561 0.392366 10 1.06098C9.34392 0.392366 8.44969 0.01087 7.513 -1.534e-05C7.13049 -0.00482787 6.75082 0.0663224 6.39601 0.209312C6.0412 0.352302 5.71829 0.564288 5.446 0.832985C4.94001 1.38283 4.6456 2.09442 4.61521 2.84104C4.58481 3.58765 4.82039 4.32082 5.28 4.90998H1C0.734784 4.90998 0.48043 5.01534 0.292893 5.20288C0.105357 5.39041 0 5.64477 0 5.90998L0 9.14298C0 9.4082 0.105357 9.66255 0.292893 9.85009C0.48043 10.0376 0.734784 10.143 1 10.143H2.066V15.843C2.066 16.9039 2.48743 17.9213 3.23757 18.6714C3.98772 19.4216 5.00513 19.843 6.066 19.843H13.934C14.9949 19.843 16.0123 19.4216 16.7624 18.6714C17.5126 17.9213 17.934 16.9039 17.934 15.843V10.143H19C19.2652 10.143 19.5196 10.0376 19.7071 9.85009C19.8946 9.66255 20 9.4082 20 9.14298V5.90998C20 5.64477 19.8946 5.39041 19.7071 5.20288C19.5196 5.01534 19.2652 4.90998 19 4.90998ZM10.65 3.03098V2.99898C10.6201 2.6384 10.7162 2.27861 10.922 1.98098C11.3337 1.5569 11.896 1.31221 12.487 1.29998C12.6986 1.29534 12.9091 1.33292 13.106 1.41053C13.3029 1.48814 13.4824 1.60422 13.634 1.75198C13.9595 2.14368 14.1181 2.64764 14.0754 3.15516C14.0328 3.66269 13.7923 4.13312 13.406 4.46498C13.0775 4.68044 12.6848 4.77615 12.294 4.73598H10.65C10.65 4.73598 10.644 3.49198 10.65 3.03098ZM6.366 1.75198C6.51757 1.60422 6.69706 1.48814 6.894 1.41053C7.09094 1.33292 7.30137 1.29534 7.513 1.29998C8.10395 1.31221 8.66627 1.5569 9.078 1.98098C9.28362 2.2783 9.37975 2.63772 9.35 2.99798V3.03498C9.356 3.49498 9.35 4.73498 9.35 4.73498H7.706C7.3152 4.77515 6.9225 4.67944 6.594 4.46398C6.20795 4.13215 5.96771 3.66192 5.92506 3.15464C5.88242 2.64736 6.04077 2.14362 6.366 1.75198ZM9.35 18.543H6.066C5.34992 18.543 4.66316 18.2585 4.15681 17.7522C3.65046 17.2458 3.366 16.5591 3.366 15.843V10.143H9.35V18.543ZM9.35 8.84298H1.3V6.20998H9.35V8.84298ZM16.634 15.843C16.634 16.5591 16.3495 17.2458 15.8432 17.7522C15.3368 18.2585 14.6501 18.543 13.934 18.543H10.65V10.143H16.634V15.843ZM18.7 8.84298H10.65V6.20998H18.7V8.84298Z" fill="white"></path></svg>
                            </li>
                            <li class="right-icon">
                                <router-link to="/giftcode">Mã quà tặng</router-link>
                            </li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main">
                       
                           <ul class="home" @click="addNewClass()">
                            <li class="left-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
                            </li>
                               <li class="right-icon">
                               <router-link to="#"> Hỗ trợ</router-link>
                               </li>
                           </ul>
                       </div>
                       <div class="clearfix"></div>
                       <hr>
                       <div class="list-child-icon-main">
                           <ul class="home"  @click="addNewClass()">
                            <li class="left-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.3C11.7207 1.3 13.4028 1.81025 14.8335 2.76621C16.2642 3.72218 17.3793 5.08094 18.0378 6.67065C18.6962 8.26037 18.8685 10.0097 18.5328 11.6973C18.1971 13.3849 17.3685 14.9351 16.1518 16.1518C14.9351 17.3685 13.3849 18.1971 11.6973 18.5328C10.0097 18.8685 8.26038 18.6962 6.67066 18.0378C5.08094 17.3793 3.72219 16.2642 2.76622 14.8335C1.81025 13.4028 1.3 11.7207 1.3 10C1.30265 7.69343 2.22011 5.48209 3.8511 3.85109C5.48209 2.2201 7.69343 1.30265 10 1.3ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V0Z" fill="#E6E6E6"></path><path d="M11.837 10.578C12.42 10.1846 12.8612 9.6145 13.0959 8.95155C13.3305 8.28861 13.3461 7.56785 13.1404 6.89535C12.9348 6.22286 12.5186 5.63415 11.9533 5.21588C11.388 4.7976 10.7033 4.57185 10 4.57185C9.2968 4.57185 8.61213 4.7976 8.0468 5.21588C7.48147 5.63415 7.06534 6.22286 6.85965 6.89535C6.65397 7.56785 6.66959 8.28861 6.90423 8.95155C7.13887 9.6145 7.58012 10.1846 8.16305 10.578C7.17733 10.9502 6.32794 11.6131 5.72738 12.4788C5.12683 13.3446 4.80344 14.3724 4.80005 15.426H6.10005C6.10005 14.3917 6.51094 13.3997 7.24233 12.6683C7.97372 11.9369 8.9657 11.526 10 11.526C11.0344 11.526 12.0264 11.9369 12.7578 12.6683C13.4892 13.3997 13.9 14.3917 13.9 15.426H15.2C15.1967 14.3724 14.8733 13.3446 14.2727 12.4788C13.6722 11.6131 12.8228 10.9502 11.837 10.578ZM10 5.873C10.3924 5.873 10.776 5.98936 11.1023 6.20737C11.4286 6.42537 11.6829 6.73523 11.833 7.09776C11.9832 7.46029 12.0225 7.8592 11.9459 8.24406C11.8694 8.62892 11.6804 8.98243 11.4029 9.2599C11.1255 9.53737 10.772 9.72633 10.3871 9.80288C10.0022 9.87943 9.60333 9.84014 9.2408 9.68998C8.87828 9.53981 8.56842 9.28552 8.35041 8.95925C8.13241 8.63299 8.01605 8.2494 8.01605 7.857C8.01658 7.33097 8.22578 6.82664 8.59773 6.45469C8.96969 6.08273 9.47402 5.87353 10 5.873Z" fill="#E6E6E6"></path></svg>
                            </li>
                               <li class="right-icon"><router-link to="/dossier">Hồ sơ</router-link></li>
                           </ul>
                       </div>
                       <div class="list-child-icon-main" >
                           <ul class="logout-icon" >
                            <li class="left-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 20C7.76861 20.0077 5.60004 19.2614 3.84602 17.882C3.7749 17.8308 3.71485 17.7658 3.66944 17.6909C3.62404 17.616 3.59423 17.5327 3.58179 17.446C3.56935 17.3592 3.57455 17.2709 3.59706 17.1862C3.61957 17.1016 3.65894 17.0223 3.71281 16.9532C3.76668 16.8841 3.83394 16.8266 3.91056 16.7842C3.98718 16.7417 4.07159 16.7151 4.15872 16.706C4.24586 16.697 4.33393 16.7056 4.41766 16.7313C4.50139 16.7571 4.57906 16.7995 4.64602 16.856C6.17169 18.0568 8.05848 18.7066 10 18.7C12.3074 18.7 14.5203 17.7834 16.1518 16.1518C17.7834 14.5203 18.7 12.3074 18.7 9.99999C18.7 7.69261 17.7834 5.47973 16.1518 3.84816C14.5203 2.2166 12.3074 1.29999 10 1.29999C8.05939 1.29331 6.17354 1.94319 4.64902 3.14399C4.51206 3.23848 4.34415 3.27703 4.17969 3.25175C4.01523 3.22647 3.86666 3.13926 3.76441 3.00799C3.66215 2.87672 3.61396 2.71133 3.62969 2.54568C3.64542 2.38003 3.72389 2.22667 3.84902 2.11699C5.60236 0.738622 7.76976 -0.00733469 10 -7.56865e-06C12.6522 -7.56865e-06 15.1957 1.05356 17.0711 2.92892C18.9465 4.80429 20 7.34783 20 9.99999C20 12.6522 18.9465 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20Z" fill="white"></path><path d="M11.53 9.41001H2.33L4.539 7.40001C4.60415 7.34316 4.6573 7.2739 4.69534 7.19626C4.73338 7.11863 4.75556 7.03418 4.76056 6.94787C4.76557 6.86156 4.7533 6.77511 4.72449 6.6936C4.69567 6.61209 4.65089 6.53714 4.59275 6.47315C4.53461 6.40916 4.46429 6.35741 4.38591 6.32093C4.30753 6.28445 4.22265 6.26398 4.13626 6.2607C4.04986 6.25743 3.96368 6.27143 3.88276 6.30187C3.80185 6.33232 3.72781 6.3786 3.665 6.43801L0.213002 9.57901L0.200002 9.59101C0.154761 9.63745 0.116678 9.69036 0.0870017 9.74801C0.0751977 9.76461 0.0645076 9.78199 0.0550018 9.80001C0.0185352 9.88182 -0.000208543 9.97043 1.75009e-06 10.06C0.000220534 10.1488 0.0185972 10.2366 0.0540018 10.318C0.0640018 10.339 0.0820018 10.355 0.0930018 10.375C0.121765 10.4312 0.158849 10.4828 0.203002 10.528L0.212002 10.541L3.664 13.679C3.7267 13.7387 3.8007 13.7853 3.88165 13.816C3.96261 13.8468 4.04888 13.861 4.13542 13.8579C4.22195 13.8549 4.307 13.8345 4.38557 13.7981C4.46413 13.7617 4.53463 13.71 4.59293 13.646C4.65122 13.5819 4.69614 13.5069 4.72504 13.4253C4.75394 13.3437 4.76623 13.2571 4.76121 13.1706C4.75619 13.0842 4.73394 12.9996 4.69578 12.9219C4.65763 12.8442 4.60432 12.7748 4.539 12.718L2.331 10.71H11.531C11.6164 10.71 11.7009 10.6932 11.7797 10.6605C11.8586 10.6279 11.9303 10.58 11.9906 10.5196C12.051 10.4593 12.0989 10.3876 12.1315 10.3088C12.1642 10.2299 12.181 10.1454 12.181 10.06C12.181 9.97465 12.1642 9.89012 12.1315 9.81126C12.0989 9.7324 12.051 9.66075 11.9906 9.60039C11.9303 9.54003 11.8586 9.49215 11.7797 9.45948C11.7009 9.42682 11.6164 9.41001 11.531 9.41001H11.53Z" fill="white"></path></svg>
                            </li>
                               <li class="right-icon" >
                               <span @click="checkOut()">Đăng xuất</span> 
                               </li>
                           </ul>
                       </div>
                   </div>
                   <div class="right-bar-container">
                       <div class="main-right-bar" @click="hideLoginWord()">
                            <span v-if="checkShow == 'ok'" @click="hideLoginWord()">You Logged In !</span>
                            <slot/>
                       </div>
                   </div>
              </div>
          </div>
        </div>
        <div class="back-top" @click="topUp()">
            <svg id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 512 512" xml:space="preserve"><path d="M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256 C512,114.608,397.392,0,256,0z" style="fill: rgb(138, 213, 221);"></path><g style="opacity: 0;"><path d="M135.52,163.056l136.4,87.488l136.4-87.472L271.92,447.36L135.52,163.056z"></path></g><path d="M119.52,147.056l136.4,87.488l136.4-87.472L255.92,431.36L119.52,147.056z" style="fill: rgb(255, 255, 255);"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </div>
         <div class="back-bottom" @click="toBottom()">
            <svg id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 512 512" xml:space="preserve"><path d="M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256 C512,114.608,397.392,0,256,0z" style="fill: rgb(138, 213, 221);"></path><g style="opacity: 0;"><path d="M135.52,163.056l136.4,87.488l136.4-87.472L271.92,447.36L135.52,163.056z"></path></g><path d="M119.52,147.056l136.4,87.488l136.4-87.472L255.92,431.36L119.52,147.056z" style="fill: rgb(255, 255, 255);"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </div>
</template>
<script>
import $ from "jquery";
import setCookie from '../cookie/setCookie';
import getCookie from '../cookie/getCookie';
import setHeaderToken from '../utils/setHeaderToken';
export default {
  name: 'PoolView',
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
    hideLoginWord(){
      this.checkShow = '';
    },
    checkOut(){
           setCookie('jwtToken','');
           setCookie('routerAuthCheck',false);
           this.$router.push('/login');
           this.$store.dispatch('logout');
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
@import '../../public/css/clone.css';
@import '../../public/css/childcomponent.css';
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