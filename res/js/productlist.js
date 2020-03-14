$(function () {
    //登录
    // $.get('http://jx.xuzhixiang.top/ap/api/login.php',{
    //     'username':'xule',
    //     'password':'123456',
    // }).then(data=>{
    //     console.log(data)
    // })

    //删除商品
    // for(let i = 197795;i<=197799;i++){
    //     $.get('http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php',{
    //         'pid':i,
    //         'uid':'32977',
    //         'token':'7b71504742b695d2b5ebf659bc008db2'
    //     }).then(data=>{
    //         console.log(data)
    //     })
    // }


    //修改
    // $.get('http://jx.xuzhixiang.top/ap/api/goods/goods-update.php',{
    //     'pid':'197790',
    //     'pname':'碗架',
    //     'pprice':'210',
    //     'pimg':'img/chaoshi11.png',
    //     'pdesc':'宇宙无敌超级好的碗架'
    // }).then(data=>{
    //     console.log(data)
    // })


    //给页面中加入数据
    $.get('http://jx.xuzhixiang.top/ap/api/productlist.php', {
        'uid': '32977'
    }).then(data => {
        let str = '';
        for (let id in data.data) {
            let a = data.data[id];
            str += `<li>
                <a href="detail.html?pid=${a.pid}" target="_blank"><img src="${a.pimg}"></a>
                <p>${a.pname}</p>
                <p>${a.pprice}</p>
                <a href="">${a.pdesc}</a><br>
            </li>
            `
        }
        $('.productList ul').html(str);
        
    })
})

//查询购物车里面的商品个数
