<template>
  <div>
    <div id="yx-ComponentTop">
        <div id="yx-top">
            <!-- 顶部小组件 height: 36px, background-color: #333 -->
            <div class="yx-top-siteNav" id="yx-top-siteNav">
                <div class="yx-row">
                    <!-- 顶部顶部的左边 -->
                    <div class="yx-top-siteNav-l">
                        <div class="yx-siteNavItem" style="margin-left: 0">
                            <a href="http://you.163.com/story">好的生活，没那么贵</a>
                        </div>
                        <div class="yx-siteNavItem">
                            <div class="yx-siteNavItemHd">
                                <div class="yx-noticeList">
                                    <ul>
                                        <li class="yx-noticeItem"><a class="yx-noticeTxt" href="#">【严选x中行联名卡】达标领80元礼品卡></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 顶部顶部的右边 -->
                    <div class="yx-top-siteNav-r">
                        <div style="float: left;">
                            <div class="yx-siteNavItem">
                                <router-link to="/login" title="网易严选登录">登录</router-link>
                            </div>
                            <div class="yx-siteNavItem" style="margin-left: 20px">
                                <a href="#" title="网易严选注册">注册</a>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <a href="#" title="我的订单">我的订单</a>
                                </div>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <a href="#" title="会员">会员</a>
                                </div>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <a href="#" title="甄选家">甄选家</a>
                                </div>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <a href="#" title="企业采购">企业采购</a>
                                </div>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <span>客户服务</span>
                                    <i style="margin-left: 10px" class="yx-icon-yxtop icon-yxtop-upArrow"></i>
                                </div>
                            </div>
                            <div class="yx-siteNavItem">
                                <div class="yx-siteNavItemHd pipe">
                                    <a href="#" title="APP">
                                       <i style="margin-right: 10px" class="yx-icon-yxtop icon-yxtop-app"></i>APP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 顶部的导航栏 height: 204px -->
            <div class="yx-top-mainNav" style="height: 206px">
                <div class="yx-row">
                    <!-- MiniLogo -->
                    <a href="#" class="yx-miniLogo yx-func-hide">
                        <i class="yx-icon-yxtop yx-icon-miniLogo"></i>
                    </a>
                    <!-- logo -->
                    <a class="yx-logo yx-funcFixed-hide" href="#" title="网易严选" target="_blank">
                        <i class="yx-icon-yxtop yx-icon-logo"></i>
                    </a>
                    <!-- 购物车 -->
                    <div class="yx-cartEnterWrap">
                        <div class="yx-cartEnter">
                            <!-- 购物车图标 -->
                            <i class="yx-icon-yxtop yx-icon-num yx-icon-badge">0</i>
                            <!-- 购买数量 -->
                            <i class="yx-icon-yxtop yx-icon-cart"></i>
                        </div>
                    </div>
                    <!-- 具体导航栏 + 下拉菜单 -->
                    <ul class="yx-top-nav">
                        <li class="yx-siteNavItem yx-firstItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="首页">首页</a>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="居家">居家</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard" style="width: 1519px;left: -759.5px;">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/jujia/13ff4decdf38fe1a5bde34f0e0cc635a.png" alt="夏凉">
                                                <p class="yx-subCate-text">夏凉</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/jujia/243e5bf327a87217ad1f54592f0176ec.png" alt="床品件套">
                                                <p class="yx-subCate-text">床品件套</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="鞋包配饰">鞋包配饰</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/xiebao/288b0e864a24763bade8e22c0c39ff02.png" alt="行李箱">
                                                <p class="yx-subCate-text">行李箱</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/xiebao/5772be58599ae04e05129ceb41aec4f8.png" alt="女士包袋">
                                                <p class="yx-subCate-text">女士包袋</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="服装">服装</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/clothes/24a7a33cfeac0bb87a737480db79e053.png" alt="T恤">
                                                <p class="yx-subCate-text">T恤</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/clothes/863b1e4a6c84fb33f5d09d91d2a36881.png" alt="运动">
                                                <p class="yx-subCate-text">运动</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="电器">电器</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/dianqi/4cbfd1f6e50bc808ddf0bbd0ef9f246c.png" alt="生活电器">
                                                <p class="yx-subCate-text">生活电器</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/dianqi/521bd0c02d283b80ba49e73ca84df250.png" alt="厨房电器">
                                                <p class="yx-subCate-text">厨房电器</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="洗护">洗护</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <ul class="yx-dropdown-cateCardList">
                                            <li class="yx-dropdown-item">
                                                <a class="yx-item-subCate" href="#">
                                                    <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/xh/3067ee3e3871d0f9d1b3f3a3d8673e6f.png" alt="纸巾湿巾">
                                                    <p class="yx-subCate-text">纸巾湿巾</p>
                                                </a>
                                            </li>
                                            <li class="yx-dropdown-item">
                                                <a class="yx-item-subCate" href="#">
                                                    <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/xh/5ccf97220d69681197a4e82bf5cdc7b5.png" alt="家庭清洁">
                                                    <p class="yx-subCate-text">家庭清洁</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="饮食">饮食</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/yinshi/93168242df456b5f7bf3c89653b3db76.png" alt="甜品鲜花">
                                                <p class="yx-subCate-text">甜品鲜花</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/yinshi/eaf26ae4c0dd3201edf637a1e79965a8.png" alt="糕点">
                                                <p class="yx-subCate-text">糕点</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="餐厨">餐厨</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/canchu/0b244d3575b737c8f0ed7e84c5c4abd2.png" alt="水具杯壶">
                                                <p class="yx-subCate-text">水具杯壶</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/canchu/f109afbb7e7a00c243c1da29991a5aa3.png" alt="餐具">
                                                <p class="yx-subCate-text">餐具</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="婴童">婴童</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/yingtong/22ecc8737bf7fba40ae11be08094830e.png" alt="暑假好物">
                                                <p class="yx-subCate-text">暑假好物</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/yingtong/4e50f3c4e4d0a64cd0ad14cfc0b6bd17.png" alt="新生儿服装">
                                                <p class="yx-subCate-text">新生儿服装</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="文体">文体</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/wenti/83d22ca3d1c8f94ee23ca96de489864c.png" alt="文具">
                                                <p class="yx-subCate-text">文具</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/wenti/e1743239e41ca9af76875aedc73be7f0.png" alt="运动户外">
                                                <p class="yx-subCate-text">运动户外</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem">
                            <a href="#" class="yx-topLevel" target="_blank" title="特色区">特色区</a>
                            <div class="yx-top-nav-dropdown">
                                <div class="yx-dropdown-cateCard">
                                    <ul class="yx-dropdown-cateCardList">
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/tesequ/24a5a967a30f170219ac95882b2c1157.png" alt="日本馆">
                                                <p class="yx-subCate-text">日本馆</p>
                                            </a>
                                        </li>
                                        <li class="yx-dropdown-item">
                                            <a class="yx-item-subCate" href="#">
                                                <img class="yx-subCate-icon" src="../assets/img/nav/dropdown/tesequ/e6859ab74c8b256c3693a5b4f0f723ba.png" alt="韩国馆">
                                                <p class="yx-subCate-text">韩国馆</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="yx-siteNavItem-split yx-func-hide"></li>
                        <li class="yx-siteNavItem yx-func-hide">
                            <a href="#" class="yx-topLevel" target="_blank" title="为你严选">为你严选</a>
                        </li>
                        <li class="yx-siteNavItem yx-func-hide">
                            <a href="#" class="yx-topLevel" target="_blank" title="众筹">众筹</a>
                        </li>
                    </ul>
                    <!-- 搜索框 -->
                    <div class="yx-search">
                        <div class="yx-searchInputWrap">
                            <input class="yx-searchInput" type="text">
                            <div class="yx-searchDefaultKW">超清凉3D可逆循环扇上新</div>
                        </div>
                        <div class="yx-searchBtn">
                            <i class="yx-icon-yxtop icon-yx-search"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import "../assets/css/header.css"
  export default{
    data(){
        return {}
    },
    components:{

    },
    methods:{},
    computed: {
      
    },
    mounted(){
      

(function(){

    // 功能一：导航栏下拉菜单
    let topNav = document.getElementsByClassName("yx-top-nav")[0];
    // console.log(topNav)
    let siteNavItems = document.querySelectorAll('.yx-top-nav .yx-siteNavItem');
    // console.log(siteNavItems)
        // 功能零：下拉菜单共同样式：
        (()=>{
            let dropdown = document.querySelectorAll('.yx-top-nav .yx-siteNavItem .yx-top-nav-dropdown');
            for(let d of dropdown){
                d.style.display = 'none';
            }
            let cateCard = document.querySelectorAll('.yx-top-nav .yx-dropdown-cateCard');
            for(let c of cateCard){
                c.style.width = '1519px';
                c.style.left = '-759.5px';
            }
        })()
    // 绑定事件
    for(let i in siteNavItems){
        // console.log(siteNavItems[1]);
        if(i > 0 && i < siteNavItems.length - 2){
            siteNavItems[i].onmouseover = function(e){
                let li = e.currentTarget;
                li.lastElementChild.style.display = 'block'
            }
            siteNavItems[i].onmouseout = function(e){
                let li = e.currentTarget;
                li.lastElementChild.style.display = 'none'
            }
        }        
    }

    // 滚动固定距离，导航栏固定
    window.onscroll = function () {
        // console.log(111)
        var topScroll = document.body.scrollTop || document.documentElement.scrollTop; //滚动的距离,距离顶部的距离
        var bignav = document.getElementsByClassName("yx-top-nav")[0]; //获取到导航栏id
        var liHides = document.querySelectorAll(".yx-top-nav li.yx-func-hide");
        var topNav = document.querySelectorAll('.yx-top-mainNav')[0];
        if (topScroll > 250) { //当滚动距离大于250px时执行下面的东西
            for(let li of liHides){
                li.style.display = 'none';
            }
            topNav.classList.add('yx-func-fixed');
        } else { //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
            bignav.style.position = 'absolute';
            bignav.style.top = '';
            for(let li of liHides){
                li.style.display = 'block';
            }
            topNav.classList.remove('yx-func-fixed');
        }
    }
}())
    }
  }
</script>
<style scoped>


</style>

