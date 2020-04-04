$.ajaxSetup({
    dataType: "json",
    beforeSend: function(xhr) {
        // console.log("发送之前");
        $(".loading").fadeIn('slow');
    },
    complete: function(xhr, status) {
        // console.log("完成");
        $(".loading").fadeOut('slow');
    }
});
$.ajax({
url: './astro.json',
type: 'GET',
data: 'data',
success: function(response){
    response.result.forEach(function(element){
        $("ul").append(
                "<li title=" +
                    element.astroid +
                    "><h3>" +
                    element.astroname +
                    "</h3><p>" +
                    element.date +
                    '</p><img src="' +
                    element.pic +
                    '"></li>'
            );
    })
}
})
$('ul').on('click','li',function(e){
var astroid = $(this).attr('title')
$.get(
    'https://api.jisuapi.com/astro/fortune',
    {
        astroid:astroid,
        appkey:'714bd85991fb74b9'
    },
    function(data,textStatus,jqXHR){
        console.log(data)
        if(($('.conten').children().length)<5){
            $('.conten').append('<h3>'+data.result.astroname+'本周运势：'+'</h3>'+'<p>'+'财富：'+data.result.week.money+'</p><p>'+'事业：'+data.result.week.career+'</p><p>'+'爱情：'+data.result.week.love+'</p><p>'+'健康'+data.result.week.health+'</p>')
        }else{
            $('.conten').empty()
            $('.conten').append('<h3>'+data.result.astroname+'本周运势：'+'</h3>'+'<p>'+'财富：'+data.result.week.money+'</p><p>'+'事业：'+data.result.week.career+'</p><p>'+'爱情：'+data.result.week.love+'</p><p>'+'健康：'+data.result.week.health+'</p>')
        }	
    },
    "jsonp"//jsonp解决跨域问题,但是jsonp不是ajax，它是通过把在跨域过程中要拿的对象放入当作函数的参数这样解决跨域拿不到对象的问题
    )
})