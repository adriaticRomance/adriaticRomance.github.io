// 滑块位置数值
var userInput = 0
// 获取各个组件
var sliderContainer = document.querySelector(".sliderContainer")
var sliderMask = document.querySelector(".sliderMask")
var slider = document.querySelector(".slider")
// 拿到隐藏的图片
var soures = document.querySelector("#soures")
// 拿到拼图
var block = document.querySelector('#block')
var back = document.querySelector('#back')
// 拿到滑块
var sliderIcon = document.querySelector(".sliderIcon")
// 拿到提示信息
var infor = document.querySelector(".infor")
// 定义当鼠标按下滑块的方法，包括获取和计算滑块位置同步图片拼图位置
slider.onmousedown = function (e) {
    // console.log(1);
    
    if (e.which !== 1) {
        return
    }
    sliderContainer.onmousemove = function (event) {
        var x = event.pageX - this.offsetLeft - e.offsetX;
        if (x > 760 || x < 0) {
            return
        }
        userInput = x
        slider.style.left = x + "px"
        sliderMask.style.width = x + 40 + "px"
        block.style.left = userInput + "px"
    }
}
// 定义获取随机数的方法
function randomNumber(m, n) {
    return Math.floor(Math.random() * (n - m)) + m
}
// 定义随机数
var randomNum
// 定义在画布canvas上绘图的方法，绘制扣掉拼图区域的原图片
function draw() {
    randomNum = randomNumber(100, 560)
    /** @type {HTMLCanvasElement} */
    var context = back.getContext('2d');
    context.drawImage(soures, 0, 0);
    // 绘制圆形路径
    context.beginPath();
    context.moveTo(randomNum, 300 - 25);
    context.lineTo(randomNum, 300+25)
    context.lineTo(randomNum+50, 300+25)
    context.lineTo(randomNum+50, 300 - 25)
    context.closePath()
    context.fillStyle = "white";
    context.fill()

}
// 绘制拼图路径图形
function drawBlock() {
    var context = block.getContext("2d")
    context.clearRect(0, 0, 1200, 800);
    context.beginPath()
    context.moveTo(25, 275);
    context.lineTo(25, 275+50)
    context.lineTo(75, 275+50)
    context.lineTo(75, 275)
    context.closePath()
    context.clip();
    // 在图片中扣出图案
    context.drawImage(soures, randomNum-25, 275, 200, 200, 0, 275, 200, 200)
}
// 在图片加载后执行重载方法
soures.onload = function () {
    init()
}
// 定义重载方法，包括
function init() {
    // 重绘扣掉拼图的背景图
    draw()
    // 重绘拼图图形
    drawBlock()
    // 设置滑块的定位
    slider.style.left = 0 + "px"
    sliderMask.style.width = 0 + 40 + "px"
    // 设置拼图的移动量
    block.style.left = 0 + "px"
    // 重置滑块输入值
    userInput = 0
    sliderIcon.innerHTML = '<span class="iconfont sliderIcon no">&#xe631;</span>'

}
// 定义鼠标放开后的验证方法
function check() {
    sliderContainer.onmousemove = null
    if (Math.abs(userInput - (randomNum - 25)) < 5) {
        // console.log('验证成功')

        infor.style.display = "block"
        $('.infor').text("验证成功")
        sliderIcon.innerHTML = '<span class="iconfont sliderIcon yes">&#xe625;</span>'
        // slider.onmousedown = null
    } else {
        // console.log("验证失败")
        // soures.src = "img/" + randomNumber(1, 6) + ".png"
        // init()
        infor.style.display = "block"
        $('.infor').text("验证失败请刷新重新验证")
        sliderIcon.innerHTML = '<span class="iconfont sliderIcon no">&#xe646;</span>'
        // slider.onmousedown = null
    }
    
}
slider.onmouseup = check
// 定义刷新验证的方法
document.querySelector(".refresh").onclick = function () {
    soures.src = "img/" + randomNumber(1, 6) + ".png"
    init()
    infor.style.display = 'none'
}