window.onload=function() {
    function resize(originSize,type){
        var type=type||"x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100+"px";
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
        resize(750, 'x');
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,

            // 需要分页器
            pagination: '.swiper-pagination',

            // 前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 滚动条
            scrollbar: '.swiper-scrollbar',
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
}