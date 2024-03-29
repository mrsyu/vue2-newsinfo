// 导入VueRoute路由组件
import VueRouter from 'vue-router'


// 导入各个组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
// 新闻组件
import NewsLists from "./components/news/NewsLists.vue";
import NewsInfo from "./components/news/NewsInfo.vue";

// 图片分享
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";

//商品组件
import ProductList from "./components/shop/ProductList.vue";
import ProductInfo from "./components/shop/ProductInfo.vue";
import GoodsDesc from "./components/shop/GoodsDesc.vue";
import GoodsComment from "./components/shop/GoodsComment.vue"
//评论组件


// 创建路由对象
let routerObj = new VueRouter({
    routes: [
        {path: '/', redirect: '/HomeContainer'},
        // 四个底部按钮路由
        {path: '/HomeContainer', component: HomeContainer},
        {path: '/MemberContainer', component: MemberContainer},
        {path: '/ShopcarContainer', component: ShopcarContainer},
        {path: '/SearchContainer', component: SearchContainer},
        // 新闻列表和信息路由
        {path: '/HomeContainer/NewsLists', component: NewsLists},
        {path: '/HomeContainer/NewsInfo/:id', component: NewsInfo},
        // 图标列表和信息路由
        {path: '/HomeContainer/PhotoList', component: PhotoList},
        {path: '/HomeContainer/PhotoInfo/:id', component: PhotoInfo},
        // 商品列表和商品详情和商品图片介绍路由
        {path: '/HomeContainer/ProductList', component: ProductList},
        {path: '/HomeContainer/ProductInfo/:id', component:ProductInfo, name:'productInfo'},
        {path: '/HomeContainer/GoodsDesc/:id',component:GoodsDesc, name:'goodsDesc'},
        // 单独套的一个评论组件
        {path: '/HomeContainer/GoodsComment/:id',component:GoodsComment,name:'goodsComment'}
    ],
    linkActiveClass: 'mui-active'
});
// 把routerObj对象暴漏出去。main.js导入这个数据
export default routerObj