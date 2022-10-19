import * as VueRouter from 'vue-router';
import HomePage from './components/childcomponent/HomePage';
import ActionAll from './components/childcomponent/ActionAll';
import BlockConfig from './components/childcomponent/BlockConfig';
import AddAction from './components/childcomponent/AddAction';
import DeviceVue from './components/childcomponent/DeviceVue';
import PageVue from './components/childcomponent/PageVue';
import AddNewPage from './components/childcomponent/AddNewPage';
import AddNewFriend from './components/childcomponent/AddNewFriend';
import FriendVue from './components/childcomponent/FriendVue';
import GroupVue from './components/childcomponent/GroupVue';
import AddNewGroup from './components/childcomponent/AddNewGroup';
import TodayVue from './components/childcomponent/TodayVue';
import SubDeviceVue from './components/childcomponent/SubDeviceVue';
import PayMentVue from './components/childcomponent/PayMentVue';
import ExpenseVue from './components/childcomponent/ExpenseVue';
import TransitionVue from './components/childcomponent/TransitionVue';
import GiftCode from './components/childcomponent/GiftCode';
import DossierVue from './components/childcomponent/DossierVue';
import EditAction from './components/childcomponent/EditAction';
import BillVue from './components/finance/BillVue';
//test component
import VueTest from './components/test/VueTest';
// clone routes
import AllVue from './components/clone-file/AllVue';
import AvatarVue from './components/clone-file/AvatarVue';
import CheckingVue from './components/clone-file/CheckingVue';
import CheckPoint from './components/clone-file/CheckPoint';
import GenDer from './components/clone-file/GenDer';
import GettingVue from './components/clone-file/GettingVue';
import LiveVue from './components/clone-file/LiveVue';
import NoDoResult24h from './components/clone-file/NoDoResult24h';
import NoneActivity24h from './components/clone-file/NoneActivity24h';
import StoredVue from './components/clone-file/StoredVue';
import PerSonBirthday from './components/clone-file/PerSonBirthday';
import NoneAvatar from './components/clone-file/NoneAvatar';
import AddNewClone from './components/clone-file/AddNewClone';
import VueLogin from './components/VueLogin';
import VueRegister from './components/VueRegister';
import ForgotPass from './components/ForgotPass';
import store from './store';
// import store from './store';
import getCookie from './cookie/getCookie';
const requireAuth  = (to,from,next)=>{
    const jwtToken = getCookie('jwtToken');
    console.log('beforeEnter route',jwtToken);
    if(!jwtToken) next({name:"login",params:{}})
    next();
}
const routes =[
    {
        path: '/',
        name:'homepage',
        component: HomePage,
        beforeEnter:requireAuth,
   },
    {
        path: '/register',
        name: 'register',
        component:()=>import(/* webpackChunkName: "group-user" */ './components/VueRegister'),
        
    },
    {
        path: '/fgpass',
        name: 'fgpass',
        component:()=>import(/* webpackChunkName: "group-user" */ './components/ForgotPass'),
    },
    {
    path: '/repass/:id',
    name: '/repass',
    component:()=>import(/* webpackChunkName: "group-user" */ './components/RePass'),
     },
    {
        path: '/login',
        name: 'login',
        component:()=>import(/* webpackChunkName: "group-user" */ './components/VueLogin'),
    },
    //test routes
    {
        path: '/test',
        name: 'test',
        component:()=>import(/* webpackChunkName: "group-user" */ './components/test/VueTest'),
    },
    // clone routes
    {
        path:'/allvue',
        name:'allvue',
        component: AllVue,
        beforeEnter:requireAuth,
    },
    {
       path:'/avatarvue',
       name:'avatarvue',
       component: AvatarVue,
       beforeEnter:requireAuth,
    },
    {
        path:'/checkingvue',
        name:'checkingvue',
        component:CheckingVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/checkpoint',
        name:'checkpoint',
        component:CheckPoint,
        beforeEnter:requireAuth,
    },
    {
        path:'/gender',
        name:'gender',
        component:GenDer,
        beforeEnter:requireAuth,
    },
    {
        path:'/gettingvue',
        name:'gettingvue',
        component:GettingVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/livevue',
        name:'livevue',
        component:LiveVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/nodo',
        name:'nodo',
        component:NoDoResult24h,
        beforeEnter:requireAuth,
    },
    {
        path:'/noneAc',
        name:'noneAc',
        component: NoneActivity24h,
        beforeEnter:requireAuth,
    },
    {
        path:'/storevue',
        name:'storevue',
        component:StoredVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/birthday',
        name:'birthday',
        component:PerSonBirthday,
        beforeEnter:requireAuth,
    },
    {
        path:'/nonava',
        name:'nonava',
        component: NoneAvatar,
        beforeEnter:requireAuth,
    },
    {
        path:'/addnewclone',
        name:'addnewclone',
        component:AddNewClone,
        beforeEnter:requireAuth,
    },
    {
        path:'/actionAll',
        name:'actionAll',
        component:ActionAll,
        beforeEnter:requireAuth,
    },
    {
       path:'/blockconfig',
       name:'blockconfig',
       component:BlockConfig,
       beforeEnter:requireAuth,
    },
    {
        path:'/addaction',
        name:'addaction',
        component:AddAction,
        beforeEnter:requireAuth,
    },
    {
        path:'/device',
        name:'device',
        component:DeviceVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/page',
        name:'page',
        component:PageVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/friend',
        component:FriendVue,
        name:'friend',
        beforeEnter:requireAuth,
    },
    {
        path:'/addnewpage',
        name:'addnewpage',
        component:AddNewPage,
        beforeEnter:requireAuth,
    },
    {
        path:'/addnewfriend',
        name:'addnewfriend',
        component:AddNewFriend,
        beforeEnter:requireAuth,
    },
    {
        path:'/addnewgroup',
        name:'addnewgroup',
        component:AddNewGroup,
        beforeEnter:requireAuth,
    },
    {
        path:'/group',
        name:'group',
        component:GroupVue,
        beforeEnter:requireAuth,
    },
    {
        path:'/today',
        component:TodayVue,
        name:'today',
        beforeEnter:requireAuth,
    },
    {
        path:'/subdevice',
        component:SubDeviceVue,
        name:'subdevice',
        beforeEnter:requireAuth,
    },
    {
        path:'/payment',
        component:PayMentVue,
        name:'payment',
        beforeEnter:requireAuth,
    },
    {
        path:'/expensevue',
        component:ExpenseVue,
        name:'expensevue',
        beforeEnter:requireAuth,
    },
    {
        path:'/transitionvue',
        component:TransitionVue,
        name:'transitionvue',
        beforeEnter:requireAuth,
    },
    {
        path:'/giftcode',
        component:GiftCode,
        name:'giftcode',
        beforeEnter:requireAuth,
    },
    {
        path:'/dossier',
        component:DossierVue,
        name:'dossier',
        beforeEnter:requireAuth,
    },
    {
        path:'/bill/:id',
        component:BillVue,
        name:'bill',
        beforeEnter:requireAuth,
    },
    {
       path:'/editaction/:id',
       component:EditAction,
       name:'editaction/:id',
       beforeEnter:requireAuth,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
]

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
});
export default router;
