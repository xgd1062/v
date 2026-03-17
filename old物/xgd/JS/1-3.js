let arr0 = [
    { name: '晓丹小仙女儿', img: 'https://i2.hdslb.com/bfs/archive/a6eb2c6650b2dae2befedf71365fde638e925aae.jpg', url: 'https://www.bilibili.com/video/BV1jT411m7fe?spm_id_from=333.1007.tianma.4-2-12.click' },
    { name: '伢伢gagako', img: 'https://i0.hdslb.com/bfs/archive/cc9193977c69b2d2fca11a02f04ba9fa67be86dc.jpg', url: 'https://www.bilibili.com/video/BV1AW4y1G7nx?spm_id_from=333.1007.tianma.1-2-2.click' },
    { name: '你好呀世界！', img: 'https://i2.hdslb.com/bfs/archive/a6eb2c6650b2dae2befedf71365fde638e925aae.jpg', url: 'https://www.bilibili.com/video/BV1jT411m7fe?spm_id_from=333.1007.tianma.4-2-12.click' },
    { name: '你好呀世界！', img: 'https://i2.hdslb.com/bfs/archive/a6eb2c6650b2dae2befedf71365fde638e925aae.jpg', url: 'https://www.bilibili.com/video/BV1jT411m7fe?spm_id_from=333.1007.tianma.4-2-12.click' },
    { name: '你好呀世界！', img: 'https://i2.hdslb.com/bfs/archive/a6eb2c6650b2dae2befedf71365fde638e925aae.jpg', url: 'https://www.bilibili.com/video/BV1jT411m7fe?spm_id_from=333.1007.tianma.4-2-12.click' },
    { name: '你好呀世界！', img: 'https://i2.hdslb.com/bfs/archive/a6eb2c6650b2dae2befedf71365fde638e925aae.jpg', url: 'https://www.bilibili.com/video/BV1jT411m7fe?spm_id_from=333.1007.tianma.4-2-12.click' },
]


for (i = 0; i < 6; i++) {
    let div1 = document.createElement("div");  //新建一个div
    div1.classList.add('nr') //添加类名
    //添加内容
    div1.innerHTML =
        '<a href="' + arr0[i].url + '"><img src = "' + arr0[i].img + '" ><span>' + arr0[i].name + '</span></a>'
    let neirong = document.querySelector('.neirong')
    neirong.appendChild(div1)
}