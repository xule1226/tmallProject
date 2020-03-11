$.get('http://jx.xuzhixiang.top/ap/api/bannerlist.php',{
                'uid':'32977'
            }).then(data=>{
                let str = ''
                for(let k in data.data){
                    var a = data.data[k]
                    console.log(a.banner_img_url)
                        str +=` <div class="swiper-slide" style="background-image:url(./images/nature-1.jpg)"><img src="${a.banner_img_url}" alt=""></div>
                        `
                }
                $('.sw1').html(str)
            })