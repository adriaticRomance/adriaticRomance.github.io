$(".dropdown").hover(
  function() {
    $(this).addClass("open");
  },
  function() {
    $(this).removeClass("open");
  }
);
$(".alink").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: "0px" }, 800);
});
$("#subb").click(function(e) {
  e.preventDefault();
});
$(".alinktwo").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: "0px" }, 1400);
});
$(".butSend").click(function(e) {
  e.preventDefault();
});
$(".alinkthree").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: "0px" }, 1800);
});
$("#topAbout").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#About").offset().top }, 800);
});
$("#topGallery").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkGallery").offset().top }, 1400);
});
$("#topContact").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkContact").offset().top }, 1800);
});
$("#butcont1").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $("#alinkContact").offset().top }, 1800);
});
$("#butcont2").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $("#alinkContact").offset().top }, 1800);
});
$("#butcont3").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $("#alinkContact").offset().top }, 1800);
});
$("#topServices").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#servicesPage").offset().top }, 1000);
});
$("#topBlog").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkBlog").offset().top }, 1000);
});
$("#topNewsletter").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#newLetter").offset().top }, 1800);
});
$(".alinkAbout").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#About").offset().top }, 1800);
});
$(".alinkBlog").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkBlog").offset().top }, 1800);
});
$(".alinkGallery").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkGallery").offset().top }, 1200);
});
$(".alinkContact").click(function(e) {
  e.preventDefault();
  // console.log(1)
  $("html,body").animate({ scrollTop: $("#alinkContact").offset().top }, 800);
});
$("#toTop").click(function(e) {
  $("html,body").animate({ scrollTop: "0px" }, 1800);
});
$("#subb").click(function(e) {
  // console.log(1)
  if ($("#exampleInputName2").val() == 0) {
    // console.log(1)
    $("#inputWone").fadeIn("slow");
  } else {
    if ($("#exampleInputEmail2").val() == 0) {
      $("#inputWtwo").fadeIn("slow");
    } else {
      var pattern = /[@]{1,}/;
      var valll = $("#exampleInputEmail2").val();
      if (pattern.test(valll)) {
        $("#inputWtwo2").fadeOut("slow");
      } else {
        $(".wwww2").text("请在电子邮件地址中包括“@”，“" + valll + "”中缺少“@”");
        $("#inputWtwo2").fadeIn("slow");
      }
    }
  }
});
$("#exampleInputName2").change(function(e) {
  e.preventDefault();
  $("#inputWone").fadeOut("slow");
});
$("#exampleInputEmail2").change(function(e) {
  e.preventDefault();
  $("#inputWtwo").fadeOut("slow");
});
$("#send").click(function() {
  var pattern = /[@]{1,}/;
  var valll2 = $("#exampleInputEmail1").val();
  if ($("#nameInputll").val() == 0) {
    $("#inputWonecont").fadeIn("slow");
  } else {
    if ($("#exampleInputEmail1").val() == 0) {
      $("#inputWonecont2").fadeIn("slow");
    } else {
      if (pattern.test(valll2)) {
        $("#inputWtwo3").fadeOut("slow");
      } else {
        $("#wwww23").text(
          "请在电子邮件地址中包括“@”，“" + valll2 + "”中缺少“@”"
        );
        $("#inputWtwo3").fadeIn("slow");
      }
      if ($("#subjectInput").val() == 0) {
        $("#inputWonecont3").fadeIn("slow");
      } else {
        if ($("#messageInput").val() == 0) {
          $("#inputWonecont4").fadeIn("slow");
        }
      }
    }
  }
});
$("#nameInputll").change(function(e) {
  e.preventDefault();
  $("#inputWonecont").fadeOut("slow");
});
$("#exampleInputEmail1").change(function(e) {
  e.preventDefault();
  $("#inputWonecont2").fadeOut("slow");
});
$("#subjectInput").change(function(e) {
  e.preventDefault();
  $("#inputWonecont3").fadeOut("slow");
});
$("#messageInput").change(function(e) {
  e.preventDefault();
  $("#inputWonecont4").fadeOut("slow");
});
