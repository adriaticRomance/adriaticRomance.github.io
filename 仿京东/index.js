var user = document.getElementById("user");
var password = document.getElementById("password");
var passwordinsure = document.getElementById("passwordinsure");
var number = document.getElementById("number");
var checkcode = document.getElementById("checkcode");
var codeimg = document.getElementById("codeimg");
var checkxieyi = document.getElementById("checkxieyi");
var button = document.getElementById("button");
var wroing = document.getElementById("wroing");
var wroing1 = document.getElementById("wroing1");
var wroing2 = document.getElementById("wroing2");
var wroing3 = document.getElementById("wroing3");
var wroing4 = document.getElementById("wroing4");
var flage;
function fun1() {
  var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
  var str = user.value;
  flage = pattern.test(str);
}
function fun2() {
  if (flage) {
    wroing.style.display = "none";
  } else {
    wroing.style.display = "block";
  }
}
function fun3() {
  var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
  var str = password.value;
  flage = pattern.test(str);
}
function fun4() {
  if (flage) {
    wroing1.style.display = "none";
  } else {
    wroing1.style.display = "block";
  }
}
function fun5() {
  var str = password.value;
  var str1 = passwordinsure.value;
  if (str == str1) {
    flage = true;
  } else {
    flage = false;
  }
}
function fun6() {
  if (flage) {
    wroing2.style.display = "none";
  } else {
    wroing2.style.display = "block";
  }
}
function fun7() {
  var pattern = /^1[3456789]\d{9}$/;
  var str = number.value;
  flage = pattern.test(str);
}
function fun8() {
  if (flage) {
    wroing3.style.display = "none";
  } else {
    wroing3.style.display = "block";
  }
}
function fun9() {
  var str = checkcode.value;
  var str1 = codeimg.innerHTML;
  if (str == str1) {
    flage = true;
  } else {
    flage = false;
  }
}
function fun10() {
  if (flage) {
    wroing4.style.display = "none";
  } else {
    wroing4.style.display = "block";
  }
}
function fun11() {
  var infoList = window.localStorage.getItem("infoList");
  var list = JSON.parse(infoList) || [];
  var userlis = {
    username: user.value,
    password: password.value,
    number: number.value,
  };
  var str = user.value;
  var str1 = password.value;
  var str2 = number.value;
  var str3 = checkcode.value;
  if (str.length !== 0) {
    if (str1.length !== 0) {
      if (str2.length !== 0) {
        if (str3.length !== 0) {
          if (checkxieyi.checked) {
            list.push(userlis);
            console.log(list);
          } else {
            alert("请同意用户协议");
          }
        }
      } else {
        alert("请填写手机号码");
      }
    } else {
      alert("请填写密码");
    }
  } else {
    alert("请填写用户名");
  }
}

var butB = document.getElementsByName("butB");
var butP = document.getElementsByName("butP");
var butS = document.getElementsByName("butS");
var butC = document.getElementsByName("butC");
var sel1 = document.getElementById("sel1");
var sel2 = document.getElementById("sel2");
var sel3 = document.getElementById("sel3");
var sel4 = document.getElementById("sel4");
sel1.onclick = function () {
  sel1.style.display = "none";
};
sel2.onclick = function () {
  sel2.style.display = "none";
};
sel3.onclick = function () {
  sel3.style.display = "none";
};
sel4.onclick = function () {
  sel4.style.display = "none";
};
for (let i = 0; i < butB.length; i++) {
  butB[i].onclick = function () {
    sel1.style.display = "block";
    var butBo = butB[i].parentNode.children;
    for (var z = 0; z < butBo.length; z++) {
      butBo[z].style.color = "black";
      butBo[0].style.color = "gray";
    }
    butB[i].style.color = "red";
    sel1.innerHTML = butB[i].innerHTML;
    var button = document.createElement("button");
    button.innerHTML = "X";
    sel1.appendChild(button);
  };
}
for (let j = 0; j < butP.length; j++) {
  butP[j].onclick = function () {
    sel2.style.display = "block";
    var butPo = butP[j].parentNode.children;
    for (var q = 0; q < butPo.length; q++) {
      butPo[q].style.color = "black";
      butPo[0].style.color = "gray";
    }
    butP[j].style.color = "red";
    sel2.innerHTML = butP[j].innerHTML;
    var button = document.createElement("button");
    button.innerHTML = "X";
    sel2.appendChild(button);
  };
}
for (let n = 0; n < butS.length; n++) {
  butS[n].onclick = function () {
    sel3.style.display = "block";
    var butSo = butS[n].parentNode.children;
    for (var w = 0; w < butSo.length; w++) {
      butSo[w].style.color = "black";
      butSo[0].style.color = "gray";
    }
    butS[n].style.color = "red";
    sel3.innerHTML = butS[n].innerHTML;
    var button = document.createElement("button");
    button.innerHTML = "X";
    sel3.appendChild(button);
  };
}
for (let m = 0; m < butC.length; m++) {
  butC[m].onclick = function () {
    sel4.style.display = "block";
    var butCo = butC[m].parentNode.children;
    for (var e = 0; e < butCo.length; e++) {
      butCo[e].style.color = "black";
      butCo[0].style.color = "gray";
    }
    butC[m].style.color = "red";
    sel4.innerHTML = butC[m].innerHTML;
    var button = document.createElement("button");
    button.innerHTML = "X";
    sel4.appendChild(button);
  };
}
