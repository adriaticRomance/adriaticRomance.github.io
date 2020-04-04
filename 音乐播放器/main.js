var list = document.querySelector("ul.list")
var current = 0
var audio = document.querySelector('audio')
var play = document.querySelector('.play')
var li = document.querySelectorAll("ul.list li")
var stage = document.querySelector('.stage')
var img = document.querySelector('.glue img')
var mask = document.querySelector('.mask')
var h3 = document.querySelector('h3')
var h5 = document.querySelector('h5')
var span = document.querySelectorAll('.time span')
var progress = document.querySelector('.progress input')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var vlounm = document.querySelector('.vlounm input')

// 读取歌单列表
playlist.forEach(function (element, index) {
    var node = document.createElement("li");
    var boxM = document.createElement('div')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    var span3 = document.createElement('span')
    node.innerText = element.name;
    list.appendChild(node);
    node.appendChild(boxM)
    boxM.appendChild(span1)
    boxM.appendChild(span2)
    boxM.appendChild(span3)

});
// 设置歌曲路径方法
function countUrl(id) {
    return " https://music.163.com/song/media/outer/url?id=" + id + ".mp3"
}
// 实例化歌曲
changeSong(playlist[current])
// 播放暂停按钮方法
play.onclick = function () {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}
// 按钮文字和胶片旋转方法
audio.onplay = function () {
    stage.classList.add('playing')
    // var disableDiv = document.querySelector("ul>li>div")
    // stage.classList.add('disable')
    play.innerHTML = '<span class="iconfont next">&#xe616;</span>'
}
audio.onpause = function () {
    stage.classList.remove('playing')
    // var disableDiv = document.querySelector("ul>li>div")
    // stage.classList.remove('disable')
    play.innerHTML = '<span class="iconfont next">&#xe60f;</span>'
}
// 歌曲进度条方法
audio.ontimeupdate = function () {
    if (isNaN(this.duration)) {
        return
    } else {
        vlounm.value = this.volume*100
        progress.value = (this.currentTime / this.duration) * 100
    }
    // 歌曲当前播放进度时间更新
    span[0].innerText = countTime(this.currentTime)
}
// 当前播放时间计算方法
function countTime(n) {
    var n = Math.floor(n)
    var m = Math.floor(n / 60)
    var s = n % 60
    m = m > 9 ? m : "0" + m
    s = s > 9 ? s : "0" + s
    return m + ":" + s
}
// 歌曲当前播放进度时间更新
audio.ondurationchange = function () {
    span[1].innerText = countTime(this.duration)
}
// 拖动歌曲进度条改变歌曲进度方法
progress.onchange = function () {
    audio.currentTime = (this.value * audio.duration) / 100
}
// 改变音量方法
vlounm.onchange = function(){
    audio.volume = (this.value/100)
}
// 切换歌曲方法
function changeSong(obj) {
    // 改变歌曲地址
    audio.src = countUrl(obj.id)
    // 改变歌曲标题信息
    h3.innerText = obj.name
    h5.innerText = obj.artist
    // 改变歌曲图片
    img.src = obj.picUrl
    // 改变背景图片
    mask.style.backgroundImage = 'url("' + obj.picUrl + '")'
    li.forEach(function (element, index) {
        if (index == current) {
            element.classList.add("playing");
        } else {
            element.classList.remove("playing");
        }
    });
}
audio.onended = function () {
    current++
    if (current > playlist.length - 1) {
        current = 0
    }
    changeSong(playlist[current])
}
// 上一曲按钮方法
prev.onclick = function () {
    current--
    if (current < 0) {
        current = playlist.length - 1
    }
    changeSong(playlist[current])
}
// 下一曲按钮方法
next.onclick = function () {
    current++
    if (current > playlist.length - 1) {
        current = 0
    }
    changeSong(playlist[current])
}