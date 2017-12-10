
(function(win){
    var docEl = win.document.documentElement;
    var timer = '';
    function changeRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width > 540)//最大宽度，若果兼容到ipad的话把这个去掉就行
        {
            width = 540;
        }
        var fontS = width/10;//把设备宽度10等分 等同于用vw来做
        docEl.style.fontSize = fontS + "px";
    }
    //页面尺寸发生改变的时候就再执行changeRem
    win.addEventListener("resize",function(){
        clearTimeout(timer);
        timer = setTimeout(changeRem,30);
    },false);
    //页面加载的时候，若果是调用缓存的话就再执行changeRem
    win.addEventListener("pageshow",function(e){
        if (e.persisted)//缓存
        {
            clearTimeout(timer);
            timer = setTimeout(changeRem,30);
        }
    },false);
    changeRem();
})(window);

//banner
window.onload = function() {
    (function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,//可选选项，自动滑动
            direction : 'horizontal',
            initialSlide: 0, //第一张开始
            speed: 500, //切换速度
            autoplayDisableOnInteraction: false, // 在进行触屏之后自动进行切换
            pagination: '.swiper-pagination',//下面的图标跟随切换
            grabCursor: true, //鼠标覆盖swiper时会变成手指
            freeMode: false, //自动贴合
            freeModeMomentumRatio: 3, //移动惯性
            loop: true, //无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
            observer: true, //当li节点被修改的时候自动更新Swiper
            observeParents: true //当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        });
        var mySwiper1 = new Swiper('.swiper-container1', {
            autoplay: 3000,//可选选项，自动滑动
            direction : 'vertical',
            initialSlide: 0, //第一张开始
            speed: 30, //切换速度
            loop: true, //无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
            observer: true,
            observeParents: true
        });
        var mySwiper2 = new Swiper('.swiper-container2', {
            autoplay: 3000,//可选选项，自动滑动
            initialSlide: 0, //第一张开始
            speed: 300, //切换速度
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            observer: true,
            observeParents: true
        });
    })();
    (function () {
        var goTop = document.getElementById("goTop"),
            speed = 100;
        window.onscroll = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            goTop.style.display = (scrollTop>=400)?"block":"none";
        };
        goTop.onclick = function() {
            cancelAnimationFrame(goTop.time);
            goTop.time =  requestAnimationFrame(function move() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop>0){
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
                    goTop.time =  requestAnimationFrame(move)
                }else{
                    cancelAnimationFrame(goTop.time);
                }
            });
        }
    })();
};

