var slide = document.getElementById('slide');//获取外层div
var image = document.querySelector('.image');//获取图片
var select = document.querySelector('.select');//获取小圆点盒子
var dian = document.getElementsByClassName('dian');//获取小圆点
var left = document.querySelector('.left');//获取左边div
var right = document.querySelector('.right');//获取右边div
/*数组，图片的地址*/
var picture = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg', 'img/banner4.jpg'];
var index = 0;
/*添加小圆点*/
for (let i = 0; i < picture.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dian');
    select.appendChild(dot);
    /*对应每张图片的下标*/
    dot.bianhao = i;
}
/*清除所有小圆点check样式*/
function qingchu() {
    for (let i = 0; i < dian.length; i++) {
        dian[i].classList.remove('check');
    }
}
/*切下一张图*/
function yunxing() {
    /*index加1*/
    index = index + 1;
    if (index == picture.length) {
        index = 0;
    }
    /*显示图片*/
    image.src = picture[index];
    /*小圆点的显示*/
    qingchu();
    /*显示那张图就显示对于的圆点，给他.check的样式*/
    dian[index].classList.add('check');
    /*若index超过，回到-1*/
    if (index == picture.length - 1) {
        index = -1;
    }
}
/*点击向右按钮时的操作*/
right.addEventListener('click', function () {
    /*直接用上面的切图函数*/
    yunxing();
})
/*点击向左按钮时的操作，跟上面的切下张图函数差不多*/
left.addEventListener('click', function () {
    index = index - 1;
    if (index == -1) {
        index = picture.length - 1;
    }
    image.src = picture[index];
    bg.style.cssText = 'background-image: url(${picture[index]});'
    /*向左时小圆点的显示*/
    qingchu();
    dian[index].classList.add('check');
})
/*进入slide这个底层盒子时，停止自动轮播和.yun类的动画效果*/
slide.addEventListener('mouseover', function () {
    clearInterval(lunbo);
    image.classList.remove('yun');
})
/*离开slide这个底层盒子时，开始自动轮播和.yun类的动画效果*/
slide.addEventListener('mouseout', function () {
    lunbo = setInterval(yunxing, 4000);
    image.classList.add('yun');
    image.style.animationDelay = '4s';
})
/*点击小圆点时的切图操作*/
for (let i = 0; i < picture.length; i++) {
    dian[i].addEventListener('click', function () {
        qingchu();
        this.classList.add('check');
        index = i;
        image.src = picture[index];
        bg.style.cssText = 'background-image: url(${picture[index]});'
    })
}
/*自动轮播定时器与初始状态*/
lunbo = setInterval(yunxing, 4000);
image.classList.add('yun');
dian[0].classList.add('check');

/*页面滚动时的动画*/

//获取关于我们模块的6个p标签
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var p4 = document.querySelector(".p4");
var p5 = document.querySelector(".p5");
var p6 = document.querySelector(".p6");

//获取我们的优势模块的标题与5个li标签
var title1 = document.querySelector(".title1");
var i1 = document.querySelector(".i1");
var li_1 = document.querySelector(".li_1");
var li_2 = document.querySelector(".li_2");
var li_3 = document.querySelector(".li_3");
var li_4 = document.querySelector(".li_4");
var li_5 = document.querySelector(".li_5");

//获取路线总汇模块的标题与两行表格
var title2 = document.querySelector(".title2");
var tr1 = document.querySelector(".tr1");
var tr2 = document.querySelector(".tr2");

//获取预约旅行模块的内容
var title3 = document.querySelector(".title3");

//获取新闻动态模块的内容与left、right、content盒子
var title4 = document.querySelector(".title4");
var left = document.querySelector(".left1");
var right = document.querySelector(".right1");
var content = document.querySelector(".content");

//用js检测鼠标滚轮距离顶部位置来给div添加动画
window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    //要设置到DIV显示出来时给div添加动画

    if (top > (p1.offsetTop - p1.offsetHeight + 600)) {
        p1.style.animation = "an1 1s";
    }
    if (top > (p2.offsetTop - p2.offsetHeight + 300)) {
        p2.style.animation = "an4 1s";
    }
    if (top > (p3.offsetTop - p3.offsetHeight + 250)) {
        p3.style.animation = "an4 1s";
    }
    if (top > (p4.offsetTop - p4.offsetHeight + 300)) {
        p4.style.animation = "an4 1s";
    }
    if (top > (p5.offsetTop - p5.offsetHeight + 600)) {
        p5.style.animation = "an5 1s";
    }
    if (top > (p5.offsetTop - p6.offsetHeight + 600)) {
        p6.style.animation = "an5 1s";
    }

    if (top > (title1.offsetTop - title1.offsetHeight + 100)) {
        title1.style.animation = "text1 1s";
    }
    if (top > (i1.offsetTop - i1.offsetHeight + 100)) {
        i1.style.animation = "text2 1s";
    }
    if (top > (li_1.offsetTop - li_1.offsetHeight + 150)) {
        li_1.style.animation = "an5 1s";
    }
    if (top > (li_2.offsetTop - li_2.offsetHeight + 150)) {
        li_2.style.animation = "an5 1.2s ease 1";
    }
    if (top > (li_3.offsetTop - li_3.offsetHeight + 150)) {
        li_3.style.animation = "an5 1.4s ease 1";
    }
    if (top > (li_4.offsetTop - li_4.offsetHeight + 150)) {
        li_4.style.animation = "an5 1.6s ease 1";
    }
    if (top > (li_5.offsetTop - li_5.offsetHeight + 150)) {
        li_5.style.animation = "an5 1.8s ease 1";
    }

    if (top > (title2.offsetTop - title2.offsetHeight)) {
        title2.style.animation = "text1 1s";
    }
    if (top > (tr1.offsetTop - tr1.offsetHeight + 1900)) {
        tr1.style.animation = "an6 1s";
    }
    if (top > (tr2.offsetTop - tr2.offsetHeight + 1900)) {
        tr2.style.animation = "an7 1s";
    }

    if (top > (title3.offsetTop - title3.offsetHeight + 200)) {
        title3.style.animation = "text1 1s";
    }

    if (top > (title4.offsetTop - title4.offsetHeight + 2800)) {
        title4.style.animation = "text1 1s";
    }
    if (top > (left.offsetTop - left.offsetHeight + 3100)) {
        left.style.animation = "an3 1s";
    }
    if (top > (right.offsetTop - right.offsetHeight + 3100)) {
        right.style.animation = "an4 1s";
    }
    if (top > (content.offsetTop - content.offsetHeight + 2800)) {
        content.style.animation = "an5 1s";
    }

}
/*window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var hh = document.querySelectorAll(".t1");
    var i;
    for (i = 0; i < hh.length; i++) {
        if (top > (hh.offsetTop - hh.offsetHeight + 700)) {
            console.log(top);
        }
        hh[i].style.animation = "zhankai 1.5s linear 1" //添加动画
        console.log(top);
    }
}*/