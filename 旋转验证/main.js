var userInput = 0;
var down = document.querySelector(".down");
var mask = document.querySelector(".mask");
var slider = document.querySelector(".slider");
var pic = document.querySelector("#pic");
var canvas = document.querySelector("#canvasP");
var reloadIcon = document.querySelector(".reload");
var sliderIcon = document.querySelector(".sliderIcon");
var infor = document.querySelector(".infor");
var randomNb;
slider.onmousedown = function(e) {
  if (e.which !== 1) {
    return;
  }
  // console.log(1);
  down.onmousemove = function(event) {
    // console.log(1);
    var x = event.pageX - this.offsetLeft - e.offsetX;
    if (x > 260 || x < 0) {
      return;
    }
    // console.log(x);

    userInput = x;
    slider.style.left = x + "px";
    mask.style.width = x + 40 + "px";
    // var context = canvas.getContext("2d");
    // context.rotate(((randomNb+userInput) * Math.PI) / 180)
    canvas.style.transform = "rotate(" + (randomNb - userInput) + "deg)";
  };
};
function randomN(m, n) {
  return Math.floor(Math.random() * (n - m)) + m;
}
function draw() {
  randomNb = randomN(50, 220);
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, 300, 300);
  context.beginPath();
  context.arc(150, 150, 150, 0, 2 * Math.PI);
  context.closePath();
  context.clip();
  context.drawImage(pic, 100, 100, 300, 300, 0, 0, 300, 300);
  //   context.rotate(randomNb * Math.PI / 180);

  canvas.style.transform = "rotate(" + randomNb + "deg)";
}
function init() {
  draw();
  slider.style.left = 0 + "px";
  mask.style.width = 0 + 40 + "px";
  userInput = 0;
  sliderIcon.innerHTML =
    '<span class="iconfont sliderIcon yes">&#xe631;</span>';
}
pic.onload = function() {
  init();
};
slider.onmouseup = function() {
  down.onmousemove = null;
  if (Math.abs(userInput - randomNb) < 15) {
    infor.style.display = "block";
    $(".infor").text("验证成功");
    sliderIcon.innerHTML =
      '<span class="iconfont sliderIcon yes">&#xe625;</span>';
  } else {
    infor.style.display = "block";
    $(".infor").text("验证失败请刷新重新验证");
    sliderIcon.innerHTML =
      '<span class="iconfont sliderIcon no">&#xe646;</span>';
  }
};
reloadIcon.onclick = function() {
  pic.src = "img/" + randomN(1, 6) + ".png";
  init();
  infor.style.display = "none";
};
window.onload = function() {
  pic.src = "img/1.png";
};
