$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.fix-top').fadeIn();
            $('.fix-left').fadeIn();
        } else {
            $('.fix-top').fadeOut();
            $('.fix-left').fadeOut();
        }
        $('.gunlun>div').each(function (i) {
            if ($(window).scrollTop() >= $(this).offset().top - 300) {
                $('.fix-left li').eq(i + 1).addClass('active').siblings().removeClass('active');
            } else {
                $('.fix-left li').eq(i + 1).removeClass('active');
            }

        })


    })
    $('.fix-left li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('html,body').stop().animate({ 'scrollTop': $('.gunlun>div').eq(index - 1).offset().top - 300 }, 800)

    })

    $('.fix-left span').click(function () {
        $('html,body').stop().animate({ 'scrollTop': 0 }, 800)
    })
    // 插入轮播图

    $.get('http://jx.xuzhixiang.top/ap/api/bannerlist.php', {
        'uid': '32977'
    }).then(data => {
        let str = ''
        for (let k in data.data) {
            var a = data.data[k]
            str += ` <div class="swiper-slide" style="background-image:url(./images/nature-1.jpg)"><img src="${a.banner_img_url}"></div>
            `
        }
        $('.sw1').html(str)
        var swiper = new Swiper('.swiper1', {
            autoplay: true,
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        swiper.el.onmouseover = function () {
            swiper.autoplay.stop();
        }

        //鼠标离开开始自动切换
        swiper.el.onmouseout = function () {
            swiper.autoplay.start();
        }

    })

    // 登录接口

    // $.get('http://jx.xuzhixiang.top/ap/api/login.php',{
    //     'username':'xule',
    //     'password':'123456',
    // }).then(data=>{
    //     console.log(data)
    // })

    // 上传商品列表

    // $.get('http://jx.xuzhixiang.top/ap/api/goods/goods-add.php',{
    //     'pimg':'img/chaoshi10.jpg',
    //     'pname':'榄菊洗洁精',
    //     'pprice':"111元",
    //     'pdesc':'白猫听过吗',
    // }).then(data=>{
    //     console.log(data);
    // })

    //删除商品列表

    // $.get('http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php',{
    //     'pid':"197236",
    //     'uid':"32977",
    //     'token':"9501d2ed39f7ce73158595f6ee3f2dd6",
    // }).then(data=>{
    //     console.log(data)
    // })

    //商品列表
    $.get('http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4').then(data => {
        let str = '';
        for (let k in data.data) {
            var a = data.data[k];
            str += `<li><a href="#"></a>
            <img src="${a.pimg}">
            <p>${a.pname}</p>
            <p>${a.pdesc}</p>
            <p>￥${a.pprice}</p>
            </li>`
        }
        $('.list ul').html(str);
    })
    //
    // $.get('http://jx.xuzhixiang.top/ap/api/productlist.php',{

    // }).then(data=>{
    //     console.log(data)
    // })

})

