let arr3 = [
    { name: '爱奇艺', url: 'https://www.iqiyi.com/', img: 'https://www.iqiyipic.com/pcwimg/128-128-logo.png' },//3
    { name: '腾讯视频', url: 'https://film.qq.com/', img: 'https://v.qq.com/favicon.ico' },//2
    { name: '哔哩哔哩', url: 'https://www.bilibili.com/', img: 'https://www.bilibili.com/favicon.ico?v=1' },//1
    { name: '哔哩哔哩', url: 'https://www.bilibili.com/', img: 'https://www.bilibili.com/favicon.ico?v=1' },//6
    { name: '哔哩哔哩', url: 'https://www.bilibili.com/', img: 'https://www.bilibili.com/favicon.ico?v=1' },//5
    { name: '哔哩哔哩', url: 'https://www.bilibili.com/', img: 'https://www.bilibili.com/favicon.ico?v=1' },//4
]
let i = 0
for (; i < 6; i++) {
    let a1 = document.createElement("a");  //新建一个a
    a1.href = arr3[i].url
    // div1.classList.add('nr') //添加类名
    //添加内容
    a1.innerHTML =
        '<span>' + arr3[i].name + '</span>  <img src="' + arr3[i].img + '">'
    let c1 = document.querySelector('.c-3')
    c1.appendChild(a1)
}
//  右边6个

//  中间十只
let arr2 = [
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '你的', url: 'https://www.baidu.com/' },
    { name: '他的', url: 'https://www.bilibili.com/' },
    { name: '她的', url: 'https://www.bilibili.com/' },
    { name: '它的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '你的', url: 'https://www.bilibili.com/' },
    { name: '他的', url: 'https://www.bilibili.com/' },
    { name: '她的', url: 'https://www.bilibili.com/' },
    { name: '它的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
    { name: '我的', url: 'https://www.bilibili.com/' },
]
for (i = 0; i < 20; i++) {
    let a2 = document.createElement("a");  //新建一个a
    // div1.classList.add('nr') //添加类名
    //添加内容
    a2.href = arr2[i].url
    a2.innerHTML = '' + arr2[i].name + ''
    let c2 = document.querySelector('.c-2')
    c2.appendChild(a2)
}

//  左三片
let arr1 = [
    { name: '主页', URL: 'https://xgd1062.github.io/x/', img: "../icon/雪花.png" },
    { name: '动态', URL: 'https://www.bilibili.com/', img: "../icon/0-1.png" },
    { name: '软件', URL: 'https://xgd1062.github.io/x/out.html', img: "../icon/0-2.png" },
]
for (i = 0; i < 3; i++) {
    let a3 = document.createElement("a");  //新建一个a
    a3.classList.add('c-1-1') //添加类名
    //添加内容
    a3.href = arr1[i].URL
    a3.innerHTML =
        '<img src= ' + arr1[i].img + '><span>' + arr1[i].name + '</span>';
    let c1 = document.querySelector('.c-1')   //获取目标父元素
    c1.appendChild(a3)           //放到到页面上
}