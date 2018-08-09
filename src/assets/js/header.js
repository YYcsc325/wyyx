

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