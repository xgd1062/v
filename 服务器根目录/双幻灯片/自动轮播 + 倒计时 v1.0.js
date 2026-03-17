// 自动轮播图
// let img0 = document.querySelector('.img1')  //获取需要更换的部位
let i = 1  //循环用
let a = 1  //循环用
function abc() {
    if (i > 5) {  //修改为需要的 n-1
        i = 1
    } else {
        i++
    }
    img1.src = `20230110_7456/${i}.jpg`   //记得改一下这边
}
setInterval(abc, 2500)   //时间在这改
setInterval(function () {
    a++
    if (a === 9) {
        a = 1
    }
    img2.src = `20230111_0658/${a}.jpg`   //记得改一下这边
}, 2500)   //时间在这改
// 自动轮播图


// 倒计时
let djs = document.querySelector('.djs')   //获取需要添加倒计时的组件
let time = 5          //计时初始值
//计时执行主程序
let jishi = setInterval(function () {
    if (time === 0) {
        djs.innerHTML = `恭喜你同意送我一百万`   //计时结束显示的内容
        clearInterval(jishi)    //停止倒计时
    } else {
        djs.innerHTML = `稍等${time}秒`   //正在计时的内容
        time--
    }
    console.log(time);  //打印，可以在控制台看见计时
}, 1000)
// 倒计时